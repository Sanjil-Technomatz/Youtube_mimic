import { useState } from "react"
import CardModal from './CardModal'
import { getTimeOfPublish } from "../util";
import './common.css'
const CardDetail = ({ id, imgurl, title, channelName, time }) => {

  const [hoverState, setHoverState] = useState(false);

  return (
    // <>{hoverState && <CardModal ismodalOpen={hoverState} onclose={() => { setHoverState(false) }} imgurl={imgurl} title={title} channelName={channelName} time={time} />}
    <>
      <div className={hoverState ? "card cardZoom" : 'card'}>
        <div onMouseOver={() => setHoverState(true)} onMouseOut={() => setHoverState(false)} >
          <img src={imgurl} alt={id} className="imageThumb" />
        </div>
        <div>
          <span style={{ fontWeight: '600', fontSize: '16px' }}>
            {title}
          </span>
          <div style={{ fontWeight: '400', fontSize: '12px', color: '#888' }}>
            {channelName}
          </div>
          <div style={{ fontWeight: '400', fontSize: '12px', color: '#888' }}>
            {getTimeOfPublish(time)}
          </div>
          {hoverState && (
            <div className="buttonContainer">
              <button>Whatch Letter </button>
              <button>Add to playlist</button>
            </div>)
          }
        </div>
      </div>


    </>
  );
}

export default CardDetail;