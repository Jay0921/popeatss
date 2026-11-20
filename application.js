(function () {
  // Tuning knobs
  const SPAWN_INTERVAL_MS = 1500;  // one new item every 1.5s
  const MAX_ON_SCREEN = 5;         // never more than this falling at once
  const MIN_WIDTH = 28;            // px
  const MAX_WIDTH = 42;            // px
  const MIN_DURATION = 5;          // seconds to fall the full screen
  const MAX_DURATION = 7;

  function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  function spawnFallElement($container, imageSources) {
    if (document.hidden) return;
    if ($container.children().length >= MAX_ON_SCREEN) return;

    const imageSrc = imageSources[Math.floor(Math.random() * imageSources.length)];
    const left = randomBetween(0, 95).toFixed(1);
    const width = Math.round(randomBetween(MIN_WIDTH, MAX_WIDTH));
    const duration = randomBetween(MIN_DURATION, MAX_DURATION).toFixed(2);
    const animationClass = Math.random() < 0.5 ? 'fall-animation-1' : 'fall-animation-2';

    const $el = $(
      `<div class="fall-element ${animationClass}" style="left: ${left}%; width: ${width}px; animation-duration: ${duration}s;"><img src="${imageSrc}" alt=""/></div>`
    );
    $container.append($el);
    setTimeout(function () { $el.remove(); }, duration * 1000 + 200);
  }

  $(document).ready(function () {
    const imageSources = [
      $('.fall-image1').children().attr('src'),
      $('.fall-image2').children().attr('src')
    ];

    const $container = $('<div class="fall-animation"></div>');
    $('body').prepend($container);

    spawnFallElement($container, imageSources);
    setInterval(function () { spawnFallElement($container, imageSources); }, SPAWN_INTERVAL_MS);
  });
})();
