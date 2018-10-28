//created function to eventually load buttons
$(function() {
    populateButtons(searchArray, 'searchButton', '#topButtons');
    console.log("page loaded");
})
//array of buttons
var searchArray = ['3pointer', 'alleyoop', 'rebound'];

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
//when the buoons are clicked, gather images from giphy api
$(document).on('click', '.searchButton', function() {
    $('#searches').empty();
    var type = $(this).data('type');
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + type + '&api_key=LpVrOSwi9J91ZiRnd5KVdE56clEx49Cx&limit=10';
    $.ajax({ url: queryURL, method: 'GET' })
        .done(function(response) {
 // ratings and what not for the images           
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

  //animattion for the gifs     

    })

    $(document).on('click','.searchImage',function(){
        var state = $(this).data('state');

        if(state=='still'){
            $(this).attr('src',$(this).data('animated'));
            $(this).attr('data-state','animated');

        } else {
            $(this).attr('src',$(this).data('still'));
            $(this).attr('data-state','still');
        }


    })
// I was unable to get the new buttons to appear at the top

    $('#addSearch').on('click',function(){
        var newSearch = $('input').eq(0).val();
        searchArray.push(newSearch);
        populateButtons(searchArray,'searchButton','#topButtons');
        return false;
    })
    



        


    

