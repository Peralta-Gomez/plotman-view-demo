// Auto-scale the fixed 1920x1080 dashboard to fit the browser window
// Runs on DOMContentLoaded (before charts draw on window.load) to prevent vibration
(function() {
  let lastW = 0, lastH = 0;
  function scaleDashboard() {
    if (window.innerWidth === lastW && window.innerHeight === lastH) return;
    lastW = window.innerWidth;
    lastH = window.innerHeight;
    const targetW = 1920;
    const targetH = 1080;
    const scaleX = lastW / targetW;
    const scaleY = lastH / targetH;
    const scale = Math.min(scaleX, scaleY);
    const offsetX = (lastW - targetW * scale) / 2;
    document.body.style.transformOrigin = 'top left';
    document.body.style.transform = 'translate(' + offsetX + 'px, 0) scale(' + scale + ')';
  }
  document.addEventListener('DOMContentLoaded', scaleDashboard);
  window.addEventListener('resize', scaleDashboard);
})();
