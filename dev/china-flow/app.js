(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const vehicles = [...document.querySelectorAll('.route-vehicle')];
  if (!vehicles.length) return;

  const states = vehicles.map((el, index) => {
    const path = document.getElementById(el.dataset.routeId);
    if (!path) return null;
    return {
      el,
      path,
      channel: path.closest('.route-channel'),
      flow: path.closest('.route-channel')?.querySelector('.route-flow') || null,
      length: path.getTotalLength(),
      p: index % 2 ? 0.80 : 0.27,
      direction: Number(el.dataset.direction || (index % 2 ? -1 : 1)),
      scale: Number(el.dataset.scale || .62),
      duration: Math.max(8000, Number(el.dataset.speed || 18000)),
      pauseUntil:0,
      last:performance.now()
    };
  }).filter(Boolean);

  const syncFlowDirection = state => {
    if (!state.flow) return;
    state.flow.style.animationDirection = state.direction > 0 ? 'normal' : 'reverse';
  };

  const render = state => {
    const point = state.path.getPointAtLength(state.length * state.p);
    const lookAhead = Math.max(0, Math.min(1, state.p + .0025 * state.direction));
    const next = state.path.getPointAtLength(state.length * lookAhead);
    let angle = Math.atan2(next.y - point.y, next.x - point.x) * 180 / Math.PI;
    if (!Number.isFinite(angle)) angle = state.direction > 0 ? 0 : 180;
    state.el.setAttribute(
      'transform',
      `translate(${point.x} ${point.y}) rotate(${angle}) scale(${state.scale})`
    );
  };

  const flash = state => {
    state.el.classList.remove('route-vehicle-active');
    state.channel?.classList.remove('is-active');
    void state.el.getBoundingClientRect();
    state.el.classList.add('route-vehicle-active');
    state.channel?.classList.add('is-active');
    window.setTimeout(() => {
      state.el.classList.remove('route-vehicle-active');
      state.channel?.classList.remove('is-active');
    }, 520);
  };

  const reverse = state => {
    state.direction *= -1;
    state.pauseUntil = 0;
    syncFlowDirection(state);
    flash(state);
  };

  states.forEach(state => {
    syncFlowDirection(state);
    render(state);

    const onReverse = event => {
      if (event.type === 'keydown' && !['Enter', ' '].includes(event.key)) return;
      event.preventDefault();
      reverse(state);
    };
    state.el.addEventListener('click', onReverse);
    state.el.addEventListener('keydown', onReverse);
  });

  if (reduceMotion) return;

  let raf = 0;
  const tick = now => {
    states.forEach(state => {
      const delta = Math.min(48, now - state.last);
      state.last = now;

      if (now < state.pauseUntil) {
        render(state);
        return;
      }

      state.p += state.direction * delta / state.duration;

      if (state.p >= 1) {
        state.p = 1;
        state.direction = -1;
        state.pauseUntil = now + 650;
        syncFlowDirection(state);
        flash(state);
      } else if (state.p <= 0) {
        state.p = 0;
        state.direction = 1;
        state.pauseUntil = now + 650;
        syncFlowDirection(state);
        flash(state);
      }

      render(state);
    });

    raf = requestAnimationFrame(tick);
  };

  raf = requestAnimationFrame(tick);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
      return;
    }
    const now = performance.now();
    states.forEach(state => { state.last = now; });
    raf = requestAnimationFrame(tick);
  });
})();
