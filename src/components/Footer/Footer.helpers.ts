/* =========================================================
   CURRENT YEAR
========================================================= */

export function getCurrentYear() {
  return new Date().getFullYear()
}

/* =========================================================
   SCROLL TO TOP
========================================================= */

export function scrollToPageTop() {
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  window.scrollTo({
    top: 0,
    behavior: reduceMotion ? 'auto' : 'smooth',
  })
}