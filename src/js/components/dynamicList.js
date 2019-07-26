const dynamicList = (() => {
  const lists = [
    ...document.querySelectorAll("ul[data-dynamicListInitialQty]")
  ];

  const button = textContent =>
    Object.assign(document.createElement("button"), {
      textContent,
      className: "button button-round"
    });

  const icon = i =>
    Object.assign(document.createElement("i"), {
      className: `fa fa-${i}`
    });

  const getAlign = align =>
    ({ left: "flex-start", center: "center", right: "flex-end" }[align]);

  const buttonContainer = align =>
    Object.assign(document.createElement("div"), {
      style: `display:flex; justify-content: ${align}`,
      className: "has-margin"
    });

  const handleClick = items => {
    // const ul = items[0].parentNode;
    // ul.classList.add('green-border');
    // setTimeout(()=>{
    //   ul.classList.remove('green-border');
    // },1000)
    items.forEach(item => {
      // item.style.display = "list-item";
      item.style.visibility = "visible";
      item.style.maxHeight = `${item.dataset.max}px`;
      item.style.opacity = "1";
    });
  };

  const getMaxHeight = item => {
    item.style.maxWidth = "250px";
    const height = item.clientHeight;
    item.style.maxWidth = "";
    return height;
  };

  return {
    init: () => {
      lists.forEach(list => {
        const {
          dynamiclistinitialqty: qty,
          dynamiclistbtntext: textContent,
          dynamiclistalign: align = "center"
        } = list.dataset;
        const trigger = button(textContent);
        const iconEl = icon("angle-down");
        trigger.prepend(iconEl);
        const listItems = [...list.querySelectorAll("li")];
        const hiddenItems = listItems.slice(qty);
        hiddenItems.forEach((item, i) => {
          item.setAttribute("data-max", getMaxHeight(item));
          item.style.maxHeight = "0";
          item.style.visibility = "hidden";
          item.style.opacity = "0";
          item.style.oveflow = "hidden";
          item.style.transition = `max-height 200ms ease-out, opacity 1000ms ${i *
            30}ms ease`;
        });

        trigger.addEventListener("click", function fn1(e) {
          e.preventDefault();
          handleClick(hiddenItems);
          trigger.removeEventListener("click", fn1);
          trigger.classList.add("fade-out-up");

          hiddenItems[hiddenItems.length - 1].addEventListener(
            "transitionend",
            function fn2() {
              const pn = trigger.parentNode;
              pn.parentNode.removeChild(pn);
              hiddenItems[hiddenItems.length - 1].removeEventListener(
                "transitionend",
                fn2
              );
            }
          );
        });
        const buttons = buttonContainer(getAlign(align));
        buttons.appendChild(trigger);
        list.parentNode.appendChild(buttons);
      });
    }
  };
})();

export default dynamicList;
