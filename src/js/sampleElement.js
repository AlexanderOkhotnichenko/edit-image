export function sampleElement(tag, classis = [], text) {
  const element = document.createElement(tag);

  if (classis.length) {
    element.classList.add(...classis);
  }
  if (text) {
    element.textContent = text;
  }

  return element
}