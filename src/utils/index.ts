export function numberToTime(seconds:number){
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return (hours>=1 ?  [hours, minutes, secs] : [ minutes, secs])
      .map(num => num < 10 ? '0' + num : num)
      .filter(num => num)
      .join(':');
  
}
