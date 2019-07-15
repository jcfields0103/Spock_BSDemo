$(function () {
    $("#code1").hide();

    $("#codeBtn1").click(function () {
        $("#code1").toggle();
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        }
        else {
            $(this).text("Show Code");
        }
    })
    $("#mathBtn").click(function () {
        //Step 1: Get the user data
        var num1 = Number($("#mathnum1").val());
        var num2 = Number($("#mathnum2").val());
        var num3 = Number($("#mathnum3").val());
        var num4 = Number($("#mathnum4").val());
        var num5 = Number($("#mathnum5").val());

        //Step 2: Make the calculations with the given data
        var smallest = Math.min(num1, num2, num3, num4, num5);
        var largest = Math.max(num1, num2, num3, num4, num5);
        var sum = num1 + num2 + num3 + num4 + num5;
        var product = num1 * num2 * num3 * num4 * num5;
        var average = sum / 5;


        //Step 3: Display the results
        $("#smallest").text("The smallest number is: " + smallest);
        $("#largest").text("The largest number is: " + largest);
        $("#sum").text("The sum of the numbers is: " + sum);
        $("#product").text("The product of the numbers is: " + product);
        $("#average").text("The average of the numbers is: " + average);
    });
    //Clear Input and Output
    $("#clearBtn").click(function () {
        $("#mathnum1, #mathnum2, #mathnum3, #mathnum4, #mathnum5").val("");
        $("#smallest, #largest, #sum, #product, #average").text("");
    })
})    
