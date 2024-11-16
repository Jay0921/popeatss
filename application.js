(function () {
  function getRandomNumbersBetweenRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function generateFallElementsHtml(amount, imageSources) {
    let html = '';

    for (var i = 0; i < amount; i++) {
      let imageSrc = imageSources[getRandomNumbersBetweenRange(0, imageSources.length)];
      let verticalPosition = `${Math.random() * 101}%`;
      let width = `${getRandomNumbersBetweenRange(50, 80)}px`;
      let animationClass = `fall-animation-${getRandomNumbersBetweenRange(1, 3)}`
      html += `<div class="fall-element ${animationClass}" style="left: ${verticalPosition}; width: ${width};"><img src="${imageSrc}"/></div>`;
    }
    return html;
  }

  function removeFallElements() {
    setInterval(function () {
      $(".fall-element").slice(0, 1).remove();
    }, 2000);
  }

  $(document).ready(function() {
    const imageSrc1 = $('.fall-image1').children().attr('src');
    const imageSrc2 = $('.fall-image2').children().attr('src');

    const imageSources = [
      imageSrc1,
      imageSrc2
    ];

    let fallAnimationHtml = '<div class="fall-animation"></div>';
    $('body').prepend(fallAnimationHtml);

    setInterval(function () {
      let fallElementsHtml = generateFallElementsHtml(1, imageSources);
      $('.fall-animation').append(fallElementsHtml);
    }, 2000);

    setTimeout(removeFallElements, 30000);
  });
})();
