!function(){"use strict";var e,t={1339:function(e,t,n){n(7042),n(4916),n(4723);var s=n(2285),a=n.n(s),i=n(1084),o=n(9755),r=n.n(o);n(9154),n(9826),a()((function(){var e=r()(".js-slider");e.slick({accessibility:!0,dots:!0,arrows:!0,prevArrow:'<button type="button" class="slick-prev">前へ</button>',nextArrow:'<button type="button" class="slick-next">次へ</button>',autoplay:!0,autoplaySpeed:3e3,pauseOnHover:!1,responsive:[{breakpoint:480,settings:{arrows:!1}}]});var t=r()(".slick-list");t.removeAttr("aria-live"),t.on("focus",(function(){t.attr("aria-live","polite")})),t.on("blur",(function(){t.removeAttr("aria-live","polite")}));var n=r()('<button type="button" id="autoplay-btn" aria-live="polite"><span class="js-slider-text acms-hide-visually">スライダーを自動再生を停止する</span></button>');n.prependTo(e);var s=r()(".js-slider-text");r()(".autoplay-btn-play:first-child").hide();var a=!0;r()("#autoplay-btn").click((function(){n.toggleClass("active"),!0===a?(r()(".js-slider").slick("slickPause"),s.text("スライダーを自動再生する"),a=!1):(r()(".js-slider").slick("slickPlay"),s.text("スライダーの自動再生を停止する"),a=!0)}))})),ACMS.Ready((function(){ACMS.Library.lozad(".js-animation",{rootMargin:"-30% 0px",threshold:.1,loaded:function(e){e.classList.add("is-show")}}).observe()})),$.fn.delayAddClass=function(e,t){return $(this).delay(t).queue((function(t){$(this).addClass(e),t()}))},$.fn.delayRemoveClass=function(e,t){return $(this).delay(t).queue((function(t){$(this).removeClass(e),t()}))},a()((function(){var e=$(".js-mobile-nav-btn"),t=$(".js-mobile-nav");$(e).click((function(){$("body").toggleClass("is-locked"),"true"===$(e).attr("aria-expanded")?($(e).attr("aria-expanded",!1),$(t).delayRemoveClass("is-opened",1).delayRemoveClass("is-active",100)):($(e).attr("aria-expanded",!0),$(t).delayAddClass("is-active",1).delayAddClass("is-opened",100)),$(t).find('[href*="#"]').click((function(){$(e).attr("aria-expanded",!1),$(t).delayRemoveClass("is-opened",1).delayRemoveClass("is-active",100),$("body").removeClass("is-locked")}))}))})),a()((function(){$(document).on("click",".js-select-icon-start",(function(){var e=$("#selected-icon").attr("class");$(".js-select-icon li").each((function(){var t=$(this).children().attr("class");e===t&&$(this).children().addClass("selected")}))})),$(document).on("click",".js-select-icon a",(function(e){e.preventDefault();var t=$(this).attr("class");$(".js-select-icon a").removeClass("selected"),$(this).addClass("selected"),$("#selected-icon").removeClass().addClass(t),$("#js-insert-icon").val(t)})),$(document).on("click",".js-delete-icon",(function(e){e.preventDefault(),$("#selected-icon").removeClass(),$("#js-insert-icon").val("")}))})),a()((function(){var e=document.querySelector(".page-top-btn");e&&window.addEventListener("scroll",(0,i.P)(300,(function(){$(window).scrollTop()>50?e.classList.add("page-top-btn-appear"):e.classList.remove("page-top-btn-appear")}))),$(".js-insert-hyphen").blur((function(e){var t,n=e.currentTarget,s=n.value;s.length>6&&!s.match("-")&&(n.value=(3,"-",(t=s).slice(0,3)+"-"+t.slice(3,t.length)))}))}))}},n={};function s(e){var a=n[e];if(void 0!==a)return a.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,s),i.exports}s.m=t,e=[],s.O=function(t,n,a,i){if(!n){var o=1/0;for(c=0;c<e.length;c++){n=e[c][0],a=e[c][1],i=e[c][2];for(var r=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(s.O).every((function(e){return s.O[e](n[l])}))?n.splice(l--,1):(r=!1,i<o&&(o=i));r&&(e.splice(c--,1),t=a())}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,a,i]},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={296:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,i,o=n[0],r=n[1],l=n[2],c=0;for(a in r)s.o(r,a)&&(s.m[a]=r[a]);for(l&&l(s),t&&t(n);c<o.length;c++)i=o[c],s.o(e,i)&&e[i]&&e[i][0](),e[o[c]]=0;s.O()},n=self.webpackChunksite=self.webpackChunksite||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=s.O(void 0,[736],(function(){return s(1339)}));a=s.O(a)}();