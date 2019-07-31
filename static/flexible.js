(function(doc, win) {
  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          if(clientWidth <= 768){
            docEl.style.fontSize = 37.5 * (clientWidth / 375) + 'px';
          }else{
            clientWidth = 768
            docEl.style.fontSize = 37.5 * (clientWidth / 375) + 'px';
          }
      };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);