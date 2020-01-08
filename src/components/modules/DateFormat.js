export function convertDate(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}

export function getTime(str){
  let day = new Date(str)
  let time = day.getHours() + ':' + day.getMinutes() + ":" + day.getSeconds()
  return(time)
}