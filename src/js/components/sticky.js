import Stickyfill from "stickyfilljs";

const sticky = (() => {
  const elements = document.querySelectorAll(".sticky");
  const init = () => {
    Stickyfill.add(elements);
  };

  return { init };
})();

export default sticky;
