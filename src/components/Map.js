import React from "react";
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      to: this.props.to
    };
  }

  render() {
    var landmark = this.state.to;
    console.log("${landmark}");
    if (this.props.isOpen === true) {
      return (
        <iframe
          src="http://127.0.0.1:8887/landmark.html?landmark=Taj Mahal"
          style={{ width: "100%", height: 400 }}
        />
      );
    } else {
      return null;
    }
  }
}
export default Map;
