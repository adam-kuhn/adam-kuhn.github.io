
window.onload = function(){
document.getElementById("ajaxButton").addEventListener('click', makeRequest);
}

/*
.ajax({
   url: 'https://eda-te-reo.herokuapp.com/api/whakatauki',
   data: {
      format: 'json'
   },
   error: function() {
      $('#info').html('<p>An error has occurred</p>');
   },
   dataType: 'jsonp',
   success: function(data) {
      var $title = $('<h1>').text(data.talks[0].talk_title);
      var $description = $('<p>').text(data.talks[0].talk_description);
      $('#info')
         .append($title)
         .append($description);
   },
   type: 'GET'
});
*/


// Request Works - but not JSON
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
        var quotes = document.getElementById("quotes");
        quotes.innerHTML = httpRequest.responseText;
        //quotes(httpRequest.responseText);
        //document.getElementById("quotes").println(httpRequest.response.Text);
        //alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
}





/*function() {
  var httpRequest;
  document.getElementById("ajaxButton").addEventListener('click', makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'https://eda-te-reo.herokuapp.com/api/whakatauki', true);
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
}*/
