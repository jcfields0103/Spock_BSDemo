$(function () { 
    $("#code2").hide();

    $("#codeBtn2").click(function () {
        $("#code2").toggle();
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        }
        else {
            $(this).text("Show Code");
        }
    })
$("#mathBtn2").click(function () {
    
    //Get user input
    var num6 = +$("#mathnum6").val();
    //Do the calculation
    if (num6 > 170) {
        alert("Please enter a positive number less than 171.");
        $("#mathnum6").val("");
        $("#output").text("");
        return;
    }
    for (var fact = num6 - 1; fact > 1; fact--) {
        num6 *= fact;
    }
    //Display results to the User
    $("#output").text("The factorial of your number is " + num6 + ".");
});

//Clear the input and display
$("#clearBtn2").click(function () {
    $("#mathnum6").val("");
    $("#output").text("");
});
})