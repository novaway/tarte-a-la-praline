const showElement = (elementId: string, display: "block" | "none") => {
  const $element = document.getElementById(elementId);

  if ($element) {
    $element.style.display = display;
  }
};

export default showElement;
