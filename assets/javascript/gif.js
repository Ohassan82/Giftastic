$(function () {
    populateButtons(searchArray, 'searchButton', '#topButtons');
    console.log("page loaded");
})

var searchArray = ['Dunk', 'alleyoop', 'freethrow'];

function populateButtons(searchArray, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();
    for (var i = 0; i < searchArray.length; i++) {
        var a = $('<button>');
        a.addClass(classToAdd);
        a.attr('data-type', searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);

    }



}

$(document).on('click','.searchButton',function(){
    var move= $(this).data('move');
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q'+move+'&api_key=LpVrOSwi9J91ZiRnd5KVdE56clEx49Cx&limit=10';
    $.ajax({url:queryURL,method:'GET'})
        .done(function(response){
           for (var i=0;i<response.data.length;i++){
                var searchDiv

           }


        })


})