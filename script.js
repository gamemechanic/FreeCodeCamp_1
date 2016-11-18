$(document).ready(function() {
  $("#generate").on("click", function() {
   $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json){   $("#quote_par").html(JSON.stringify(json.quoteText));                         $("#who").html(JSON.stringify(json.quoteAuthor));
   }); 
  });
});