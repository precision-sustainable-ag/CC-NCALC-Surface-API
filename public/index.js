window.addEventListener('load', () => {
  if (location.origin.includes('localhost')) {
    document.querySelectorAll('a').forEach(obj => {
      obj.textContent = obj.textContent.replace('https://api.precisionsustainableag.org/cc-ncalc', location.origin);
      obj.href = obj.href.replace('https://api.precisionsustainableag.org/cc-ncalc', location.origin);
    });
  }
});