
window.onload = function(){
document.getElementById("ajaxButton").addEventListener('click', makeRequest);
makeRequest();
}



function makeRequest() {
  var httpRequest = new XMLHttpRequest();
  if (!httpRequest){
    alert('Can not create XMLHTTP instace');
    return false;
  }

  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET', 'https://eda-te-reo.herokuapp.com/api/whakatauki', true);
  httpRequest.send();

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE){
      if (httpRequest.status === 200) {

        var quotes = JSON.parse(this.responseText);
        //split source and translation
        document.getElementById("maori").innerHTML = quotes.source;
        document.getElementById("english").innerHTML = quotes.translation;

      } else {
        alert('There was a problem with the request.');
      }
    }
  }
}
