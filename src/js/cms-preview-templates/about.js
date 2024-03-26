import React from "react";

import Jumbotron from "./components/jumbotron";

export default class AboutPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    const image = getAsset(entry.getIn(["data", "image"]));

    return <div>
      <Jumbotron image={image} title={entry.getIn(["data", "title"])} />

      <div className="bg-off-white pv4">
        <div className="ph3 mw7 center">
          <div className="flex-ns flex-wrap mhn2-ns mb3">
            {(entry.getIn(["data", "body"]) || []).map((body, index) => <div className="ph2-ns w-50-ns mb4" key={index}>
              <img src={body.get("image") && getAsset(body.get("image"))} alt="" className="center db mb3" style={{width: "240px"}}/>
              <p>{body.get("markdown")}</p>
            </div>)}
          </div>
        </div>
      </div>
    </div>;
  }
}