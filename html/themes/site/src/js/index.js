import domContentLoaded from 'dom-content-loaded';
import { throttle } from 'throttle-debounce';
import topPage from './top';
import navigation from './navigation';
import iconEdit from './icon-edit';
import '../scss/site.scss'; // スタイル読み込み

topPage(); // トップページ
navigation(); // ナビゲーション
iconEdit(); // アイコン選択UI

/**
 * Content Ready
 */
domContentLoaded(() => {
  // ページ上部へ戻るボタンの表示の設定
  const scrollToTopButton = document.querySelector('.page-top-btn');
  const offset = 50;

  if (scrollToTopButton) {
    window.addEventListener('scroll', throttle(300, () => {
      if ($(window).scrollTop() > offset) {
        scrollToTopButton.classList.add('page-top-btn-appear');
      } else {
        scrollToTopButton.classList.remove('page-top-btn-appear');
      }
    }));
  }

  // 郵便番号の「-」の挿入
  $('.js-insert-hyphen').blur((e) => {
    // eslint-disable-next-line max-len
    const insertStr = (str, index, insert) => str.slice(0, index) + insert + str.slice(index, str.length);
    const input = e.currentTarget;
    const zip = input.value;
    if (zip.length > 6 && !zip.match('-')) {
      input.value = insertStr(zip, 3, '-');
    }
  });
});
