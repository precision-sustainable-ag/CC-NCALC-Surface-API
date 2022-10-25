window.addEventListener('load', () => {
  if (location.origin.includes('localhost')) {
    document.querySelectorAll('a').forEach(obj => {
      obj.textContent = obj.textContent.replace('https://developapi.covercrop-ncalc.org', location.origin);
      obj.href = obj.href.replace('https://developapi.covercrop-ncalc.org', location.origin);
    });
  }
});