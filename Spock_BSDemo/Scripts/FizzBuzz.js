$(function () {
    $("#code4").hide();

    $("#codeBtn4").click(function () {
        $("#code4").toggle();
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        }
        else {
            $(this).text("Show Code");
        }

    })
    //Get input from user
    $("#fizzBtn").click(function () {
        var fizz = +$("#fizz").val();
        var buzz = +$("#buzz").val();
        var output = "";
        //Perform the Function
        for (var counter = 1; counter <= 100; counter++)
            if (counter % fizz == 0 && counter % buzz == 0) {
                output += ("<span class='fizzbuzz'>FizzBuzz, </span>")
            }
            else if (counter % fizz == 0) {
                output += ("<span class='fizz'>Fizz, </span>")
            }
            else if (counter % buzz == 0) {
                output += ("<span class='buzz'>Buzz, </span>")
            }
            else {
                output += counter + ("<span class='whir'>, </span>")
            }
        output = output.substr(0, output.length -9 )
        //Display the results to the user
        $("#fizzbuzz").html(output);
    })
    //Clear the input and output
    $("#clearBtn4").click(function () {
        $("#fizz, #buzz").val("");
        $("#fizzbuzz").text("");
    })
})