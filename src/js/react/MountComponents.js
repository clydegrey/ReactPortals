import React from "react";
import ReactDOM from "react-dom";

import FormContainer from "./containers/FormContainer";
import LocationSearchContainer from "./containers/LocationSearchContainer";

const rootElements = [...document.querySelectorAll("[data-react]")];

const getJSX = tag =>
  ({
    form_container: FormContainer,
    location_search: LocationSearchContainer
    // form: <Form {...dataset} />
  }[tag]);

console.log("we are here");
console.log(rootElements);

const notFound = () => <span>Component Not found</span>;

const MountComponents = (() => {
  const init = () => {
    rootElements.forEach(root => {
      const tag = root.dataset.react;
      const Dynamic = { root: getJSX(tag) || notFound };
      console.log(Dynamic);

      ReactDOM.render(<Dynamic.root {...root.dataset} />, root);
    });
  };
  return { init };
})();

export default MountComponents;
