const detailsSummary = (() => {
  const details = [...document.querySelectorAll("details")];
  let windowWidth = window.innerWidth;

  const toggleDetails = () => {
    details.forEach(detail => {
      const openAt = detail.dataset.openat && parseInt(detail.dataset.openat);
      const disableAt =
        detail.dataset.disableat && parseInt(detail.dataset.disableat);
      const summary = detail.querySelector("summary");
      if (windowWidth >= openAt) {
        detail.setAttribute("open", "open");
      } else {
        detail.removeAttribute("open");
      }

      if (windowWidth >= disableAt && summary) {
        summary.style.pointerEvents = "none";
      } else {
        summary.style.pointerEvents = "auto";
      }
    });
  };

  const init = () => {
    toggleDetails();
    window.addEventListener("resize", function(event) {
      if (windowWidth !== window.innerWidth) {
        windowWidth = window.innerWidth;
        toggleDetails();
      }
    });
  };
  return { init };
})();

export default detailsSummary;
