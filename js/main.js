
const elem = document.getElementById('searchinput')

function Search(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
        window.location = 'szukaj.html#gsc.tab=0&gsc.q=' + elem.value;
    }
  }
function SearchBtn(){
    if(!elem.value) return;
    window.location = 'szukaj.html#gsc.tab=0&gsc.q=' + elem.value;

}

elem.addEventListener("keyup", Search); 
