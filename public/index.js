window.addEventListener('load', () => {
  if (location.origin.includes('localhost')) {
    document.querySelectorAll('a').forEach(obj => {
      obj.textContent = obj.textContent.replace('https://develop.covercrop-ncalc.org/cc-ncalc', location.origin);
      obj.href = obj.href.replace('https://develop.covercrop-ncalc.org/cc-ncalc', location.origin);
    });
  }
});