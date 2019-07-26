import React from "react";
import ReactDOM from "react-dom";

const remoteRoot = document.getElementById("remote-filters-root");

class RemoteFilters extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    remoteRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    remoteRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default RemoteFilters;
