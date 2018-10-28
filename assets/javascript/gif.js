$(function () {
    populateButtons(searchArray, 'searchButton', '#topButtons');
    console.log("page loaded");
})

var searchArray = ['dunk', 'alleyoop', 'freethrow'];

function populateButtons(searchArray,classToAdd,areaToAddTo) {
    $(areaToAddTo).empty();
    for (var i=0; i<searchArray.length;i++) {
        var a = $('<button>');
        a.addClass(classToAdd);
        a.attr('data-type', searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);

    }



}

$(document).on('click', '.searchButton', function() {
    $('#searches').empty();
    var move = $(this).data('searchArray[i]');
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + move + '&api_key=LpVrOSwi9J91ZiRnd5KVdE56clEx49Cx&limit=10';
    $.ajax({ url: queryURL, method: 'GET' })
        .done(function(response) {
            for (var i = 0; i<response.data.length; i++) {
                var searchDiv = $('<div class="search-item">');
                var rating = response.data[i].rating;
                var p = $('<p>').text('Rating: ' + rating);
                var animated = response.data[i].images.fixed_height.url;
                var still = response.data[i].images.fixed_height_still.url;
                var image = $('<img>');
                image.attr('src', still);
                image.attr('data-still', still);
                image.attr('data-animated', animated);
                image.attr('data-state', 'still');
                image.addClass('searchImage');
                searchDiv.append(p);
                searchDiv.append(image);
                $('#searches').append(searchDiv);
            }

        })

    })

    $('#addSearch').on('click',function(){
        var newSearch = $('input').eq(0).val();
        searchArray.push(newSearch);
        populateButtons(searchArray,'searchButton','#topButtons');
        return false;
    })
    



        


    

