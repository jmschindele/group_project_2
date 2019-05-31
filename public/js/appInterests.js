var $like = $('#like');
var $dislike = $('#dislike');

$.get("/api/interest/" + getCurrentSpouse, function(res) {
    console.log("Resonse: ", res);
    console.log(res);

});