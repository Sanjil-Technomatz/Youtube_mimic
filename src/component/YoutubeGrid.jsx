import React, { useEffect, useState } from "react";
import { BaseUrl } from "../config";
import CardDetail from "./CardDetail";

const YoutubeGrid = () => {
  const [userdata, setUserdata] = useState([]);
  const getData = () => {
    fetch(BaseUrl)
      .then(result => result.json())
      .then(
        data => setUserdata(data.items)
      ).catch(err => console.error(err))

  }
  useEffect(() => {
    getData()
  }, [])

  return (<div style={{
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto',
    padding: '10px'
  }}>
    {
      userdata && userdata.map(item => {
        return (
          <CardDetail
            key={item.id.videoId}
            id={item.id.videoId}
            imgurl={item.snippet.thumbnails.medium.url}
            title={item.snippet.title}
            channelName={item.snippet.channelTitle}
            time={item.snippet.publishTime}
          />)
      })
    }
  </div >);
}

export default YoutubeGrid