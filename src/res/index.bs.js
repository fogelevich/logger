// Generated by ReScript, PLEASE EDIT WITH CARE


function padding(n) {
  if (n < 10) {
    return "0" + String(n);
  } else {
    return "" + String(n);
  }
}

function ts(param) {
  var date = new Date();
  return [
            padding(date.getMinutes() | 0),
            padding(date.getSeconds() | 0)
          ].join(":") + "." + String(date.getMilliseconds());
}

function prefixFn(logLevelsType, name) {
  return "[" + logLevelsType + "] " + ts(undefined) + " " + name;
}

export {
  padding ,
  ts ,
  prefixFn ,
  
}
/* No side effect */
