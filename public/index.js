window.addEventListener('load', () => {
  console.log(location.origin);
  document.querySelectorAll('a').forEach(obj => {
    obj.textContent = obj.textContent.replace('https://api.covercrop-ncalc.org', location.origin);
    obj.href = obj.href.replace('https://api.covercrop-ncalc.org', location.origin);
  });
});