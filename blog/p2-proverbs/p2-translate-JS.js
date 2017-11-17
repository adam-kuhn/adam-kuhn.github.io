
window.onload = function(){
document.getElementById("ajaxButton").addEventListener('click', makeRequest);
//document.getElementById("twitter").addEventListener('click', makeTweet);
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

/* example code pen tweet code. Can't make it work
function makeTweet(){

    var getPostTitle = document.getElementById("blog-post-title").innerHTML,
      linkElement = document.getElementById("tweet-this-post"),
      getPostLink = window.location.href;

    linkElement.setAttribute("href", getPostLink);

    $(linkElement).on("click", function(event) {

      event.preventDefault();

      var tweetedLink = this.getAttribute("href");

      window.open( + tweetedLink + "&text=" + getPostTitle + "&via=kaidez&", "twitterwindow", "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");

    });

  };*/
