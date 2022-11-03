
const elem = document.getElementById('searchinput')

function Search(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
        window.location = 'search=network.html#gsc.tab=0&gsc.q=' + elem.value;

    }
  }
function SearchBtn(){
    if(!elem.value) return;
    window.location = 'search=network.html#gsc.tab=0&gsc.q=' + elem.value;

}
function SearchBtnmapy(){
    window.location = 'https://www.google.com/maps/search/' + elem.value;
}
function SearchBtngrafika(){
    window.location = './search=graphics.html#gsc.tab=1&gsc.q=' + elem.value;
}
function SearchBtngrafikahome(){
  if(!elem.value) return;
  window.location = './search=graphics.html#gsc.tab=1&gsc.q=' + elem.value;
}
elem.addEventListener("keyup", Search); 
