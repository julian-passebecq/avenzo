(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const vehicles = [...document.querySelectorAll('.route-vehicle')];
  if (!vehicles.length) return;

  const states = vehicles.map((el, index) => {
    const path = document.getElementById(el.dataset.routeId);
    const direction = Number(el.dataset.direction || (index % 2 ? -1 : 1));
    return {
      el,
      path,
      length: path ? path.getTotalLength() : 0,
      p: index % 2 ? 0.78 : 0.34,
      direction,
      speed: Number(el.dataset.speed || 16000),
      last: performance.now()
    };
  }).filter(state => state.path && state.length);

  const render = state => {
    const point = state.path.getPointAtLength(state.length * state.p);
    const sample = Math.max(0, Math.min(1, state.p + 0.002 * state.direction));
    const next = state.path.getPointAtLength(state.length * sample);
    let angle = Math.atan2(next.y - point.y, next.x - point.x) * 180 / Math.PI;
    if (!Number.isFinite(angle)) angle = 0;
    state.el.setAttribute('transform', `translate(${point.x} ${point.y}) rotate(${angle})`);
  };

  states.forEach(state => {
    render(state);
    const reverse = event => {
      if (event.type === 'keydown' && !['Enter', ' '].includes(event.key)) return;
      event.preventDefault();
      state.direction *= -1;
      state.el.classList.add('route-vehicle-active');
      window.setTimeout(() => state.el.classList.remove('route-vehicle-active'), 360);
    };
    state.el.addEventListener('click', reverse);
    state.el.addEventListener('keydown', reverse);
  });

  if (prefersReducedMotion) return;

  let raf = 0;
  const tick = now => {
    states.forEach(state => {
      const delta = Math.min(64, now - state.last);
      state.last = now;
      const oneWay = Math.max(6000, state.speed);
      state.p += state.direction * delta / oneWay;

      if (state.p >= 1) {
        state.p = 2 - state.p;
        state.direction = -1;
      } else if (state.p <= 0) {
        state.p = -state.p;
        state.direction = 1;
      }
      render(state);
    });
    raf = requestAnimationFrame(tick);
  };

  raf = requestAnimationFrame(tick);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
    } else {
      const now = performance.now();
      states.forEach(state => { state.last = now; });
      raf = requestAnimationFrame(tick);
    }
  });
})();
