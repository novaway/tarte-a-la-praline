const setDisplay = (id: string, status: string) => {
  const $element = document.getElementById(id);
  if ($element) {
    $element.style.display = status;
  }
};

export default setDisplay;
