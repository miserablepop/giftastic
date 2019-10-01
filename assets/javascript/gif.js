$(document).ready(function(){

    // VARIABLES
    ////////////////////////////////////////////////////////////////////////////////
    
    // Array to store player's names to generate buttons
    var players = ['Messi', "Cristano Ronaldo", "Robert Lewandowski",'Eden Hazard', 'Neymar', 'Raheem Sterling',
                    'Kevin de Bruyne', 'Kylian Mbappe', 'Mohamed Salah', 'Virgil van Dijk'];

    
    // FUNCTIONS
    ////////////////////////////////////////////////////////////////////////////////


    // Function to loop through the players array to generate buttons

    function renderButtons(player){
        
        // Empty div for the generate buttons
        $('#buttons-view').empty();
        
        for (var i = 0; i < players.length; i++){

            var playerBtn = $('<button>');
            playerBtn.addClass('btn btn-secondary player');
            playerBtn.attr('data-name', players[i]);
            playerBtn.text(players[i]);
            $('#buttons-view').append(playerBtn);
        }

    }


    // Function to handle the event once the submit button is clicked
    
    $('#add-player').on('click', function(event){
        console.log(this);
        event.preventDefault();

        var player = $('#player-input').val().trim();
        console.log(player);
        players.push(player);

        renderButtons();

    });


    // Function to handle once a topic button is clicked

    $('#buttons-view').on('click','.player', function(){

        $('#gifs-view').empty();

        var player = $(this).attr('data-name');
        console.log(player);

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        player + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response){

            var responseBody = response.data;
            console.log(responseBody);

            for (var i = 0; i < responseBody.length; i++) {

                var gifDiv = $("<div>");
    
                var rating = responseBody[i].rating;
    
                var p = $("<p>").text("Rating: " + rating);
    
                var playerImage = $("<img>");
                playerImage.addClass('gif');
                playerImage.attr("src", responseBody[i].images.fixed_height_still.url);
                
    
                gifDiv.prepend(p);
                gifDiv.prepend(playerImage);
    
                $("#gifs-view").prepend(gifDiv);
              }

        });
        
    });


    // Function to play still GIF on click

    $('body').on('click', '.gif', function() {
        var src = $(this).attr("src");
      if($(this).hasClass('playing')){
         //stop
         $(this).attr('src', src.replace(/\.gif/i, "_s.gif"))
         $(this).removeClass('playing');
      } else {
        //play
        $(this).addClass('playing');
        $(this).attr('src', src.replace(/\_s.gif/i, ".gif"))
      }
    });
    
    // Call to render the buttons

    renderButtons();

});