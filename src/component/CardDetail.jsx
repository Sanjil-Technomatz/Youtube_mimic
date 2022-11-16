const CardDetail = ({ id, imgurl, title, channelName, time }) => {
  const getTimeOfPublish = (publishtime) => {
    const date = new Date(publishtime)
    console.log(date);
    return (parseInt(date.getMonth()) + 1) + '/' + date.getDate() + '/' + date.getFullYear()
  }
  return (<div style={{
    padding: '20px',
    textAlign: 'left'
  }} >
    <div >
      <img src={imgurl} alt={id} style={{ borderRadius: '2px' }} />
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
  </div>);
}

export default CardDetail;