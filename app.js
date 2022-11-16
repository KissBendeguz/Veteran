function changeTimeZone(date, timeZone) {
    if (typeof date === 'string') {
      return new Date(
        new Date(date).toLocaleString('en-US', {
          timeZone,
        }),
      );
    }
  
    return new Date(
      date.toLocaleString('en-US', {
        timeZone,
      }),
    );
  }
function clock() {
    if (!document.layers && !document.all && !document.getElementById)
        return
    var Digital = new Date( new Date().toLocaleString('en-US',{timeZone: 'CET'}))
    var hours = Digital.getHours()
    var minutes = Digital.getMinutes()
    var seconds = Digital.getSeconds()
    
    if (hours == 0)
        hours = 12
    if (minutes <= 9)
        minutes = "0" + minutes
    if (seconds <= 9)
        seconds = "0" + seconds

    myclock = hours + ":" + minutes

    if (document.layers) {
        document.layers.liveclock.document.write(myclock)
        document.layers.liveclock.document.close()
    }
    else if (document.all){
        liveclock.innerHTML = myclock
    }else if (document.getElementById)
        document.getElementById("clock").innerHTML = myclock
    setTimeout("clock()", 1000)
}