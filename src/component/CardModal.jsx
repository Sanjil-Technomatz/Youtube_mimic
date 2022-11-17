import React, { useState } from "react";
import Modal from 'react-modal';
import { getTimeOfPublish } from "../util";
const CardModal = ({ ismodalOpen, onclose, imgurl, title, channelName, time }) => {
  const customStyles = {

    content: {
      width: '320px',
      height: 'fitContent',

    },
  };
  return (
    <Modal
      isOpen={ismodalOpen}
      onRequestClose={onclose}
      style={customStyles}
      contentLabel="Example Modal"

    >
      <button onClick={onclose}>close</button>
      <div>
        <img src={imgurl} alt={'thumb'} style={{ borderRadius: '10px' }} />
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
      </div>
    </Modal>
  );
}

export default CardModal;

