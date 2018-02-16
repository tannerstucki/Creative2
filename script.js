$(document).ready(function() {
    //console.log("hello world");
    $("#itemSubmit").click(function(e) {
        e.preventDefault();
        var value = $("#itemInput").val();
        //console.log(value);
        var myurl = "http://www.themealdb.com/api/json/v1/1/search.php?s=" + value;
        
        $.ajax({
            url: myurl,
            dataType : "json",
            /*data: {method: "getQuote", format: "jsonp", lang: "en"},
            dataType: 'JSONP',
            jsonp: "jsonp",
            jsonCallback: 'myJsonMethod',
            type: 'GET',*/
            success: function(info) {
                console.log(info);
                if (info.meals === null){
                    var header = "<h2><u><b>Nothing found for \"" + value + "\"</h2></u></b>";
                    header += "<br><h3>Please try a different search. :)</h3>";
                    header += "<br><h6>Try something like \"Chicken\"";
                    var results = "";
                }
                else {
                var header = "";
                var results = "";
                header += "<h2><u><b>" + info.meals.length + " recipe(s) found for \"" + value + "\"</u></h2><br>";
                for (var i = 0; i<info.meals.length; i++){
                    results += "<h3><u>" + info.meals[i].strMeal + "</u></h3>";
                    results += "<h4>Ingredients:</h4>"
                    if (info.meals[i].strIngredient1 !== "" && info.meals[i].strIngredient1 !== null){ 
                    results += "<ul><li>" + info.meals[i].strMeasure1 + " " + info.meals[i].strIngredient1 + "</li>";
                    }
                    if (info.meals[i].strIngredient2 !== "" && info.meals[i].strIngredient2 !== null){ 
                    results += "<li>" + info.meals[i].strMeasure2 + " " + info.meals[i].strIngredient2 + "</li>";
                    }
                    if (info.meals[i].strIngredient3 !== "" && info.meals[i].strIngredient3 !== null){ 
                    results += "<li>" + info.meals[i].strMeasure3 + " " + info.meals[i].strIngredient3 + "</li>";
                    }
                    if (info.meals[i].strIngredient4 !== "" && info.meals[i].strIngredient4 !== null){ 
                    results += "<li>" + info.meals[i].strMeasure4 + " " + info.meals[i].strIngredient4 + "</li>";
                    }
                    if (info.meals[i].strIngredient5 !== "" && info.meals[i].strIngredient5 !== null){ 
                    results += "<li>" + info.meals[i].strMeasure5 + " " + info.meals[i].strIngredient5 + "</li>";
                    }
                    if (info.meals[i].strIngredient6 !== "" && info.meals[i].strIngredient6 !== null){ 
                    results += "<li>" + info.meals[i].strMeasure6 + " " + info.meals[i].strIngredient6 + "</li>";
                    }
                    if (info.meals[i].strIngredient7 !== "" && info.meals[i].strIngredient7 !== null){ 
                    results += "<li>" + info.meals[i].strMeasure7 + " " + info.meals[i].strIngredient7 + "</li>";
                    }
                    if (info.meals[i].strIngredient8 !== "" && info.meals[i].strIngredient8 !== null){ 
                    results += "<li>" + info.meals[i].strMeasure8 + " " + info.meals[i].strIngredient8 + "</li>";
                    }
                    if (info.meals[i].strIngredient9 !== "" && info.meals[i].strIngredient9 !== null){ 
                    results += "<li>" + info.meals[i].strMeasure9 + " " + info.meals[i].strIngredient9 + "</li>";
                    }
                    if (info.meals[i].strIngredient10 !== "" && info.meals[i].strIngredient10 !== null){ 
                    results += "<li>" + info.meals[i].strMeasure10 + " " + info.meals[i].strIngredient10 + "</li>";
                    }
                    if (info.meals[i].strIngredient11 !== "" && info.meals[i].strIngredient11 !== null){ 
                    results += "<li>" + info.meals[i].strMeasure11 + " " + info.meals[i].strIngredient11 + "</li>";
                    }
                    if (info.meals[i].strIngredient12 !== "" && info.meals[i].strIngredient12 !== null){ 
                    results += "<li>" + info.meals[i].strMeasure12 + " " + info.meals[i].strIngredient12 + "</li>";
                    }
                    if (info.meals[i].strIngredient13 !== "" && info.meals[i].strIngredient13 !== null){ 
                    results += "<li>" + info.meals[i].strMeasure13 + " " + info.meals[i].strIngredient13 + "</li>";
                    }
                    if (info.meals[i].strIngredient14 !== "" && info.meals[i].strIngredient14 !== null){ 
                    results += "<li>" + info.meals[i].strMeasure14 + " " + info.meals[i].strIngredient14 + "</li>";
                    }
                    if (info.meals[i].strIngredient15 !== "" && info.meals[i].strIngredient15 !== null){ 
                    results += "<li>" + info.meals[i].strMeasure15 + " " + info.meals[i].strIngredient15 + "</li>";
                    }
                    if (info.meals[i].strIngredient16 !== "" && info.meals[i].strIngredient16 !== null){ 
                    results += "<li>" + info.meals[i].strMeasure16 + " " + info.meals[i].strIngredient16 + "</li>";
                    }
                    if (info.meals[i].strIngredient17 !== "" && info.meals[i].strIngredient17 !== null){ 
                    results += "<li>" + info.meals[i].strMeasure17 + " " + info.meals[i].strIngredient17 + "</li>";
                    }
                    if (info.meals[i].strIngredient18 !== "" && info.meals[i].strIngredient18 !== null){ 
                    results += "<li>" + info.meals[i].strMeasure18 + " " + info.meals[i].strIngredient18 + "</li>";
                    }
                    if (info.meals[i].strIngredient19 !== "" && info.meals[i].strIngredient19 !== null){ 
                    results += "<li>" + info.meals[i].strMeasure19 + " " + info.meals[i].strIngredient19 + "</li>";
                    }
                    if (info.meals[i].strIngredient20 !== "" && info.meals[i].strIngredient20 !== null){ 
                    results += "<li>" + info.meals[i].strMeasure20 + " " + info.meals[i].strIngredient20 + "</li></ul>";
                    }
                    results += "</ul>"
                    results += "<h4>Instructions:</h4>"
                    results += "<p>&#8195" + info.meals[i].strInstructions + "</p>";
                    if (info.meals[i].strSource !== "" && info.meals[i].strSource !== null && info.meals[i].strSource !== "none"){
                    results += "<p>Source:<a target='_blank' href='"+ info.meals[i].strSource.split('href=')+"'> " + info.meals[i].strSource + "</a></p>";
                    }
                    else{
                        results += "<p>No source link provided.</p>"
                    }
                    if (info.meals[i].strYoutube !== "" && info.meals[i].strYoutube !== null && info.meals[i].strYoutube !== "none"){
                    results += "<p>Youtube:<a target='_blank' href='"+ info.meals[i].strYoutube.split('href=')+"'> " + info.meals[i].strYoutube + "</a></p>";
                    }
                    else{
                        results += "<p>No Youtube link provided.</p>"
                    }
                    results += "<br><hr>";
                }
                }
                $("#header").html(header);
                $("#results").html(results);    
            }
        })
    });
});