(self.webpackChunkacmsWebpackJsonp=self.webpackChunkacmsWebpackJsonp||[]).push([[250],{2117:function(n,e,t){var a=t(95318);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(t(87757)),s=a(t(48926));t(88674),t(41539);var r=t(74928),c=function(n){return'\n  <div class="acms-admin-modal" role="dialog" style="background-color: rgba(0, 0, 0, 0.5); display: block;">\n    <div class="acms-admin-modal-dialog" style="max-width: 360px; margin-top: 100px;">\n      <div class="acms-admin-modal-content">\n        <div class="acms-admin-modal-header">\n          <div class="acms-admin-title-wrapper">\n            <h3 class="acms-admin-modal-heading">Twitter ログイン認証画面</h3>\n          </div>\n        </div>\n        <div class="adcms-admin-modal-body">\n          <div class="acms-admin-padding-small acms-admin-form">\n            <h2>PINコードを取得して、認証してください。</h2>\n            <p class="js-before-pin">\n              '.concat(n?'<input type="hidden" name="type" value="'.concat(n,'" />'):"",'\n              <button name="ACMS_POST_Api_Twitter_OAuth_Login" class="js-pin acms-admin-btn acms-admin-btn-large acms-admin-btn-flat-primary acms-admin-btn-block">Twitter認証画面へ</button>\n            </p>\n            <div class="js-after-pin" style="display:none">\n              <p>取得したPINコードを以下の入力欄に記入し、認証してください。</p>\n              <input type="text" class="acms-admin-form-width-full js-twitter-pin" name="oauth_verifier"/>\n              <div class="acms-admin-margin-top-small">\n                <input type="submit" class="acms-admin-btn acms-admin-btn-large acms-admin-btn-flat-primary acms-admin-btn-block" name="ACMS_POST_Api_Twitter_OAuth_LoginWithPin" value="認証">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n')},d=function(){return new Promise((function(n){requestAnimationFrame((function(){n()}))}))},l=function(n){return new Promise((function(e){setTimeout((function(){e()}),n)}))};e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";n.addEventListener("click",(0,s.default)(i.default.mark((function t(){var a,o,m,u,p,f,v,b,h,y;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=(0,r.findAncestor)(n,"form")).setAttribute("target","_blank"),(o=document.createElement("div")).innerHTML=c(e),(m=(0,r.findAncestor)(n,".js-twitter-login-parent")).appendChild(o),u=o.firstElementChild,p=o.querySelector(".js-pin"),f=o.querySelector(".js-before-pin"),v=o.querySelector(".js-after-pin"),t.next=12,d();case 12:return u.style.display="block",t.next=15,d();case 15:(0,r.addClass)(u,"in"),l(500),b=function(){var n=(0,s.default)(i.default.mark((function n(){return i.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.removeAttribute("target"),(0,r.removeClass)(u,"in"),(0,r.addClass)(u,"out"),n.next=5,l(500);case 5:m.removeChild(o);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){setTimeout((function(){f&&(f.style.display="none"),v&&(v.style.display="block"),a.removeAttribute("target")}),1e3)},y=function(n){n.target===u&&b(),u.removeEventListener("click",y),null==p||p.removeEventListener("click",h)},u.addEventListener("click",y),null==p||p.addEventListener("click",h);case 22:case"end":return t.stop()}}),t)}))))}}}]);