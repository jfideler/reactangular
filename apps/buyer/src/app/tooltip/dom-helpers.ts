export function offset(nativeEl: HTMLElement | any) {
  const boundingClientRect = nativeEl.getBoundingClientRect();
  return {
    width: boundingClientRect.width || nativeEl.offsetWidth,
    height: boundingClientRect.height || nativeEl.offsetHeight,
    top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
    left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft)
  };
}
