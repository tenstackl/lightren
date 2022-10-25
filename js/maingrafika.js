
const elem = document.getElementById('searchinput')

function Search(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
        window.location = 'szukaj=grafika.html#gsc.tab=1&gsc.q=' + elem.value;
    }
  }
function SearchBtn(){
    if(!elem.value) return;
    window.location = 'szukaj=grafika.html#gsc.tab=1&gsc.q=' + elem.value;

}
function SearchBtnmapy(){
  window.location = 'https://www.google.com/maps/search/' + elem.value;
}
function SearchBtnsiec(){
  window.location = './szukaj.html#gsc.tab=0&gsc.q=' + elem.value;
}
elem.addEventListener("keyup", Search); 
