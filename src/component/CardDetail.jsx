import { useState } from "react";
import { getTimeOfPublish } from "../util";
import "./common.css";
const CardDetail = ({ id, imgurl, title, channelName, time }) => {
  const [hoverState, setHoverState] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  return (
    // <>{hoverState && <CardModal ismodalOpen={hoverState} onclose={() => { setHoverState(false) }} imgurl={imgurl} title={title} channelName={channelName} time={time} />}
    <>
      <div className={hoverState ? "card cardZoom" : "card"}>
        <div
          onMouseOver={() => setHoverState(true)}
          onMouseOut={() => setHoverState(false)}
        >
          <img src={imgurl} alt={id} className="imageThumb" />
        </div>
        <div>
          <span style={{ fontWeight: "600", fontSize: "14px" }}>{title}</span>
          {tooltip && <div className="tooltip">{channelName}</div>}
          1<br />
          <span
            style={{ fontWeight: "500", fontSize: "14px", color: "#606060" }}
            onMouseOver={() => {
              setTooltip(true);
            }}
            onMouseOut={() => {
              setTooltip(false);
            }}
          >
            {channelName}
          </span>
          <div
            style={{ fontWeight: "400", fontSize: "15px", color: "#606060" }}
          >
            {getTimeOfPublish(time)}
          </div>
          {hoverState && (
            <div className="buttonContainer">
              <button>Whatch Letter </button>
              <button>Add to playlist</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardDetail;
