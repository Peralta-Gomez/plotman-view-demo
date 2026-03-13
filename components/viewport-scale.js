// Auto-scale the fixed 1920x1080 dashboard to fit the browser window
(function() {
  function scaleDashboard() {
    const targetW = 1920;
    const targetH = 1080;
    const scaleX = window.innerWidth / targetW;
    const scaleY = window.innerHeight / targetH;
    const scale = Math.min(scaleX, scaleY);
    document.body.style.transformOrigin = 'top left';
    document.body.style.transform = 'scale(' + scale + ')';
  }
  window.addEventListener('load', scaleDashboard);
  window.addEventListener('resize', scaleDashboard);
})();
