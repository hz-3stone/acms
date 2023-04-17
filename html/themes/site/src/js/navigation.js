import domContentLoaded from 'dom-content-loaded';

/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: 0 */

export default () => {
  $.fn.delayAddClass = function (className, delay) {
    return $(this).delay(delay).queue(function (next) {
      $(this).addClass(className);
      next();
    });
  };
  $.fn.delayRemoveClass = function (className, delay) {
    return $(this).delay(delay).queue(function (next) {
      $(this).removeClass(className);
      next();
    });
  };
  domContentLoaded(() => {
    const $mobileNavTrigger = $('.js-mobile-nav-btn');
    const $mobileNavContents = $('.js-mobile-nav');

    $($mobileNavTrigger).click(function () {
      $('body').toggleClass('is-locked');
      const $mobileNavAttr = $($mobileNavTrigger).attr('aria-expanded');
      if ($mobileNavAttr === 'true') {
        $($mobileNavTrigger).attr('aria-expanded', false);
        $($mobileNavContents).delayRemoveClass('is-opened', 1).delayRemoveClass('is-active', 100);
      } else {
        $($mobileNavTrigger).attr('aria-expanded', true);
        $($mobileNavContents).delayAddClass('is-active', 1).delayAddClass('is-opened', 100);
      }
      $($mobileNavContents).find('[href*="#"]').click(function () {
        $($mobileNavTrigger).attr('aria-expanded', false);
        $($mobileNavContents).delayRemoveClass('is-opened', 1).delayRemoveClass('is-active', 100);
        $('body').removeClass('is-locked');
      });
    });
  });
};
