$(document).ready(function() {
    // Retrieve the PokemonGO Pokedex dataset using AJAX
    $.ajax({
        url: "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json",
        dataType: "json",
        success: function(data) {
            // Display the data on the webpage
            displayPokedex(data);
            // Apply the jQuery plugin to the data displayed on the webpage
            $(".pokemon-tile").click(function() {
                $(this).toggleClass("expand");
            });
        },
        error: function(error) {
            console.log("Error retrieving PokemonGO Pokedex dataset: " + error);
        }
    });
});

function displayPokedex(data) {
    var html = "<div id='pokedex'>";
    for (var i = 0; i < data.pokemon.length; i++) {
        if (i % 3 == 0) {
            html += "<div class='row'>";
        }
        html += "<div class='col-sm-4 pokemon-tile'>";
        html += "<div class='pokemon-image-container'><img src='" + data.pokemon[i].img + "' alt='" + data.pokemon[i].name + "' class='pokemon-image'></div>";
        html += "<div class='pokemon-details'>";
        html += "<span class='name'>" + data.pokemon[i].name + "</span><br>";
        html += "<span class='type'><strong>Type:</strong> " + data.pokemon[i].type.join(", ") + "</span><br>";
        html += "<span class='weight'><strong>Weight:</strong> " + data.pokemon[i].weight + "</span><br>";
        html += "<span class='height'><strong>Height:</strong> " + data.pokemon[i].height + "</span><br>";
        html += "</div></div>";
        if ((i+1) % 3 == 0) {
            html += "</div>";
        }
    }
    if (data.pokemon.length % 3 != 0) {
        html += "</div>";
    }
    html += "</div>";

    $("#pokedex").html(html);
    $(".pokemon-tile").css({
        "background-color": "white",
        "border-radius": "10px",
        "margin": "10px",
        "box-shadow": "0px 0px 5px 0px rgba(0,0,0,0.75)",
        "text-align": "center"
    });
    $(".pokemon-image-container").css({
        "border-radius": "50%",
        "border": "5px solid white",
        "margin": "10px",
        "background-color": "#eee",
        "padding": "5px"
    });
    $(".pokemon-image").css({
        "max-height": "100px",
        "max-width": "100px"
    });
    $(".pokemon-details").css({
        "margin": "10px",
        "font-size": "14px"
    });
}
