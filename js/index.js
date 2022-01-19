$(".toggle").on("click", function() {
    $(this).find("p").slideToggle();
    var siblings = $(this).siblings("h3").find("p");
    for (let i = 0; i < siblings.length; i++) {
        const element = siblings[i];
        if ($(element).css("display") == "block") {
            $(element).slideToggle();
        }
    }
})

$("#myID").on("click", function(){
    console.log("You clicked on #myID");
})

$("#myID").on("click", function(){
    $("#myID").fadeToggle("slow");
})