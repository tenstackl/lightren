
const elem = document.getElementById('searchinput')

function Search(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
        window.location = 'https://www.google.com/maps/search/' + elem.value;
    }
  }
function SearchBtn(){
    if(!elem.value) return;
    window.location = 'https://www.google.com/maps/search/' + elem.value;

}
elem.addEventListener("keyup", Search); 
