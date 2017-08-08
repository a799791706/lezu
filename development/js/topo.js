function change(){
 	document.documentElement.style.fontSize=14 * document.documentElement.clientWidth / 280+"px"
}change();
window.addEventListener('resize',change,false);
//
window.PointerEvent = void 0;