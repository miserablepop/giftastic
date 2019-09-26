$(document).ready(function(){

    // VARIABLES
    ////////////////////////////////////////////////////////////////////////////////
    
    // Array to store topics to generate buttons
    var topics = ['Messi', "Cristano Ronaldo", "Robert Lewandowski",'Eden Hazard', 'Neymar', 'Raheem Sterling',
                    'Kevin de Bruyne', 'Kylian Mbappe', 'Mohamed Salah', 'Virgil van Dijk'];

    
    // FUNCTIONS
    ////////////////////////////////////////////////////////////////////////////////

    function renderButtons(topic){
        
        // Empty div for the generate buttons
        $('#buttons-view').empty();
        
        for (var i = 0; i < topics.length; i++){
            $('#buttons-view').append('<button>' + topics[i] + '</button>');
        }

    }



    renderButtons();

});