var w = document.documentElement.clientWidth;
w = w > 750 ? 750 : w;
var ele = document.getElementsByTagName('html')[0], size = w / 750 * 100;
ele.style.fontSize = size + 'px';
window.onresize = function () {
	w = document.documentElement.clientWidth;
	w = w > 750 ? 750 : w;
	size = w / 750 * 100;
	ele.style.fontSize = size + 'px';
}