// One shared clock drives every screen in the room. A screen only ticks
// while its seat is lit, and a seat is lit while it sits in the middle of
// the viewport.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const TICK_MS = 140;

const COLORS = {
  screen: '#07080b',
  cell: '#13151c',
  bone: '#e9e4d8',
  dim: '#9b9fae',
  tape: '#e6d5a8',
  // Snake and team colors, checked for color-blind separation on the screen black.
  team: ['#b8891c', '#3d84d6', '#cf5a6a', '#8c6fe0'],
};

// Small seeded random so every reset looks different but stays cheap.
function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

const DIRS = [[0, -1], [1, 0], [0, 1], [-1, 0]];
const key = (x, y) => y * 1000 + x;

// Fit a canvas to its box at device resolution. Returns the CSS size.
function fitCanvas(canvas) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
  }
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w, h };
}

function setHud(seat, name, value) {
  const el = seat.querySelector(`[data-hud="${name}"]`);
  if (el) el.textContent = typeof value === 'number' ? value.toLocaleString('en-US') : value;
}

// ---------------------------------------------------------------------------
// Battlesnake: four copies of a small flood-fill bot on an 11 by 11 board.

function snakeSim(canvas, seat) {
  const N = 11;
  let r, snakes, food, turn, endHold;

  function reset() {
    r = rng((Math.random() * 1e9) | 0);
    const starts = [[1, 1], [9, 1], [1, 9], [9, 9]];
    snakes = starts.map(([x, y], i) => ({
      body: [[x, y], [x, y], [x, y]],
      health: 100,
      color: COLORS.team[i],
      alive: true,
    }));
    food = [];
    turn = 0;
    endHold = 0;
    for (let i = 0; i < 4; i++) addFood();
    food.push([5, 5]);
  }

  function occupied() {
    const set = new Set();
    for (const s of snakes) {
      if (!s.alive) continue;
      // The tail moves away this turn, so it does not block.
      for (let i = 0; i < s.body.length - 1; i++) set.add(key(...s.body[i]));
    }
    return set;
  }

  function addFood() {
    const occ = occupied();
    for (let tries = 0; tries < 40; tries++) {
      const x = (r() * N) | 0, y = (r() * N) | 0;
      if (!occ.has(key(x, y)) && !food.some(([fx, fy]) => fx === x && fy === y)) {
        food.push([x, y]);
        return;
      }
    }
  }

  function flood(sx, sy, blocked, cap) {
    const seen = new Set([key(sx, sy)]);
    const queue = [[sx, sy]];
    while (queue.length && seen.size < cap) {
      const [x, y] = queue.shift();
      for (const [dx, dy] of DIRS) {
        const nx = x + dx, ny = y + dy, k = key(nx, ny);
        if (nx < 0 || ny < 0 || nx >= N || ny >= N || blocked.has(k) || seen.has(k)) continue;
        seen.add(k);
        queue.push([nx, ny]);
      }
    }
    return seen.size;
  }

  function choose(s, blocked) {
    const [hx, hy] = s.body[0];
    const others = snakes.filter((o) => o !== s && o.alive);
    const maxOther = Math.max(0, ...others.map((o) => o.body.length));
    const hungry = s.health < 45 || s.body.length <= maxOther;
    let best = null, bestScore = -Infinity;
    for (const [dx, dy] of DIRS) {
      const nx = hx + dx, ny = hy + dy;
      if (nx < 0 || ny < 0 || nx >= N || ny >= N || blocked.has(key(nx, ny))) continue;
      let score = flood(nx, ny, blocked, 60);
      if (score < s.body.length) score -= 100;
      for (const o of others) {
        const [ox, oy] = o.body[0];
        if (Math.abs(ox - nx) + Math.abs(oy - ny) === 1) {
          score += o.body.length >= s.body.length ? -60 : 8;
        }
      }
      if (food.length) {
        const d = Math.min(...food.map(([fx, fy]) => Math.abs(fx - nx) + Math.abs(fy - ny)));
        score -= d * (hungry ? 2.2 : 0.25);
      }
      score += r() * 0.8;
      if (score > bestScore) { bestScore = score; best = [nx, ny]; }
    }
    return best || [hx, hy - 1];
  }

  function step() {
    const alive = snakes.filter((s) => s.alive);
    if (alive.length <= 1) {
      if (++endHold > 14) reset();
      return;
    }
    turn++;
    const blocked = occupied();
    const moves = alive.map((s) => choose(s, blocked));
    alive.forEach((s, i) => {
      s.body.unshift(moves[i]);
      s.health--;
      const fi = food.findIndex(([fx, fy]) => fx === moves[i][0] && fy === moves[i][1]);
      if (fi >= 0) {
        s.health = 100;
        s.body.push(s.body[s.body.length - 1]);
        food.splice(fi, 1);
      }
      s.body.pop();
    });
    // Eliminations, applied together like the real rules.
    const dead = new Set();
    for (const s of alive) {
      const [x, y] = s.body[0];
      if (x < 0 || y < 0 || x >= N || y >= N || s.health <= 0) { dead.add(s); continue; }
      for (const o of alive) {
        if (o.body.slice(1).some(([bx, by]) => bx === x && by === y)) dead.add(s);
        if (o !== s && o.body[0][0] === x && o.body[0][1] === y && o.body.length >= s.body.length) dead.add(s);
      }
    }
    dead.forEach((s) => { s.alive = false; });
    while (food.length < 3) addFood();
    if (r() < 0.08) addFood();
  }

  function draw() {
    const { ctx, w, h } = fitCanvas(canvas);
    ctx.fillStyle = COLORS.screen;
    ctx.fillRect(0, 0, w, h);
    const hudH = 22;
    const size = Math.floor(Math.min(w - 24, h - hudH - 18) / N);
    const ox = Math.round((w - size * N) / 2);
    const oy = Math.round((h - hudH - size * N) / 2) + 4;
    const gap = Math.max(1, Math.round(size * 0.08));

    ctx.fillStyle = COLORS.cell;
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      ctx.fillRect(ox + x * size + gap / 2, oy + y * size + gap / 2, size - gap, size - gap);
    }

    ctx.fillStyle = COLORS.bone;
    for (const [fx, fy] of food) {
      ctx.beginPath();
      ctx.arc(ox + fx * size + size / 2, oy + fy * size + size / 2, size * 0.17, 0, Math.PI * 2);
      ctx.fill();
    }

    for (const s of snakes) {
      if (!s.alive) continue;
      ctx.fillStyle = s.color;
      const inset = size * 0.14;
      s.body.forEach(([x, y], i) => {
        const px = ox + x * size, py = oy + y * size;
        ctx.fillRect(px + inset, py + inset, size - inset * 2, size - inset * 2);
        const next = s.body[i + 1];
        if (next && (next[0] !== x || next[1] !== y)) {
          // Bridge to the next segment so the body reads as one piece.
          const nx = ox + next[0] * size, ny = oy + next[1] * size;
          ctx.fillRect(Math.min(px, nx) + inset, Math.min(py, ny) + inset,
            Math.abs(px - nx) + size - inset * 2, Math.abs(py - ny) + size - inset * 2);
        }
      });
      const [hx, hy] = s.body[0];
      ctx.fillStyle = COLORS.screen;
      const e = size * 0.09;
      ctx.fillRect(ox + hx * size + size * 0.32 - e / 2, oy + hy * size + size * 0.4 - e / 2, e, e);
      ctx.fillRect(ox + hx * size + size * 0.68 - e / 2, oy + hy * size + size * 0.4 - e / 2, e, e);
    }

    setHud(seat, 'turn', turn);
    setHud(seat, 'alive', snakes.filter((s) => s.alive).length);
  }

  reset();
  return { step, draw, warm: 26, every: 2 };
}

// ---------------------------------------------------------------------------
// Recorded frames (Screeps client capture, Mage Lords screenshots) step on
// the clock. A GIF swaps in for its still, and a video plays, only while lit.

function framesSim(el, seat) {
  const imgs = [...el.querySelectorAll('img')];
  let i = 0;
  imgs[0].classList.add('is-shown');
  return {
    step() {
      imgs[i].classList.remove('is-shown');
      i = (i + 1) % imgs.length;
      imgs[i].classList.add('is-shown');
      setHud(seat, 'frame', i + 1);
    },
    draw() {},
    warm: 0,
    every: Number(el.dataset.every) || 30,
  };
}

function swapSim(img) {
  const still = img.getAttribute('src');
  const anim = img.dataset.anim;
  return {
    step() {}, draw() {}, warm: 0, every: 1e9,
    setLit(on) {
      const want = on && !reduceMotion ? anim : still;
      if (img.getAttribute('src') !== want) img.setAttribute('src', want);
    },
  };
}

function videoSim(video) {
  return {
    step() {}, draw() {}, warm: 0, every: 1e9,
    setLit(on) {
      if (on && !reduceMotion) {
        const p = video.play();
        if (p && p.catch) p.catch(() => {});
      } else if (!video.paused) {
        video.pause();
      }
    },
  };
}

// ---------------------------------------------------------------------------
// Crew commits per day (from the repo's history).

const CREW = [
  ['Jul 24', 5], ['Jul 25', 20], ['Jul 26', 9], ['Jul 27', 13], ['Jul 28', 0], ['Jul 29', 1],
  ['Jul 30', 0], ['Jul 31', 0], ['Aug 1', 0], ['Aug 2', 3], ['Aug 3', 0], ['Aug 4', 76],
  ['Aug 5', 103], ['Aug 6', 3], ['Aug 7', 32], ['Aug 8', 25], ['Aug 9', 9], ['Aug 10', 0],
  ['Aug 11', 4], ['Aug 12', 9], ['Aug 13', 2],
];

function buildCrewChart() {
  const chart = document.querySelector('[data-chart="crew"]');
  const table = document.querySelector('[data-chart-table="crew"]');
  if (!chart) return;
  const max = Math.max(...CREW.map(([, n]) => n));
  CREW.forEach(([day, n]) => {
    const pct = (n / max) * 100;
    const bar = document.createElement('span');
    bar.className = 'bar' + (n === 0 ? ' zero' : '');
    bar.style.setProperty('--h', `${pct}%`);
    bar.innerHTML = `<i style="height:${pct}%"></i><span class="tip">${day}: ${n} commit${n === 1 ? '' : 's'}</span>` +
      (n === max ? `<span class="bar-label">${n}</span>` : '');
    chart.appendChild(bar);
    if (table) table.insertAdjacentHTML('beforeend', `<tr><td>${day}</td><td>${n}</td></tr>`);
  });
}

// ---------------------------------------------------------------------------
// Wiring: seats, the clock, and the sign-in sheet.

buildCrewChart();

const seats = [...document.querySelectorAll('[data-seat]')];
const rows = new Map([...document.querySelectorAll('.roster tr[data-for]')].map((tr) => [tr.dataset.for, tr]));
const sims = [];

for (const seat of seats) {
  const el = seat.querySelector('[data-sim]');
  if (!el) continue;
  const type = el.dataset.sim;
  const sim = type === 'snake' ? snakeSim(el, seat)
    : type === 'frames' ? framesSim(el, seat)
    : type === 'swap' ? swapSim(el)
    : type === 'video' ? videoSim(el)
    : null;
  if (!sim) continue;
  for (let i = 0; i < sim.warm; i++) sim.step();
  sim.draw();
  sims.push({ seat, sim });
  if (el.tagName === 'CANVAS') new ResizeObserver(() => sim.draw()).observe(el);
}

let lit = new Set();
const pointed = new Set();

function updateLit() {
  const vh = window.innerHeight;
  const next = new Set();
  let closest = null, closestD = Infinity;
  for (const seat of seats) {
    const target = seat.querySelector('.screen') || seat;
    const rect = target.getBoundingClientRect();
    const mid = rect.top + rect.height / 2;
    if (mid > vh * 0.18 && mid < vh * 0.78) next.add(seat);
    const d = Math.abs(mid - vh / 2);
    if (d < closestD) { closestD = d; closest = seat; }
  }
  if (!next.size && closest && closestD < vh * 0.6) next.add(closest);
  pointed.forEach((seat) => next.add(seat));
  lit = next;
  for (const seat of seats) {
    const on = lit.has(seat);
    seat.classList.toggle('is-on', on);
    const row = rows.get(seat.dataset.seat);
    if (row) row.classList.toggle('is-on', on);
  }
  for (const { seat, sim } of sims) if (sim.setLit) sim.setLit(lit.has(seat));
}

// Pointing at a row on the sign-in sheet lights that seat.
for (const [id, row] of rows) {
  const seat = document.querySelector(`[data-seat="${id}"]`);
  if (!seat) continue;
  const on = () => { pointed.add(seat); updateLit(); };
  const off = () => { pointed.delete(seat); updateLit(); };
  row.addEventListener('pointerenter', on);
  row.addEventListener('pointerleave', off);
  row.addEventListener('focusin', on);
  row.addEventListener('focusout', off);
}

let scheduled = false;
function onScroll() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => { scheduled = false; updateLit(); });
}
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);
updateLit();

if (!reduceMotion) {
  let tick = 0, last = performance.now(), acc = 0;
  function frame(now) {
    acc += Math.min(now - last, 500);
    last = now;
    while (acc >= TICK_MS) {
      acc -= TICK_MS;
      tick++;
      for (const { seat, sim } of sims) {
        if (!lit.has(seat) || tick % sim.every) continue;
        sim.step();
        sim.draw();
      }
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
