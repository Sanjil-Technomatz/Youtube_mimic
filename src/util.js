export const getTimeOfPublish = (publishtime) => {
  const date = new Date(publishtime)
  return (parseInt(date.getMonth()) + 1) + '/' + date.getDate() + '/' + date.getFullYear()
}