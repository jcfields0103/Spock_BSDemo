$(function () { 
    $("#code").hide();

    $("#codeBtn5").click(function () {
        $("#code").toggle();
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        }
        else {
            $(this).text("Show Code");
        }
    })
    //Get user info from the user
    $("#fearBtn").click(function () {
        var num1 = +$("#num1").val();
        var num2 = +$("#num2").val();
        var num3 = +$("#num3").val();
        var num4 = +$("#num4").val();
        var num5 = +$("#num5").val();
        var num6 = +$("#num6").val();
        var numK = +$("#numK").val();
        var checkK = false;  
        
        var output = (numK + " was not found.")
      //Search the array 
        var field = [num1, num2, num3, num4, num5, num6]
        var answer = 0
        for (var check1 = 0; check1 <= field.length - 1; check1++) {
            for (var check2 = 1; check2 <= field.length - 1; check2++) {
              

                answer = (field[check1]) + (field[check2])
                if (answer == numK && check1 !== check2) {
                    checkK = true
                    output = (   numK  + " was found by adding array members " + field[check1] + " and " + field[check2] + ".")
                    break;                    
                }                
            }            
           }       
           //Display the result to the user
        $("#K").text(output);
    })
    //clear the input and output
    $("#clearBtn5").click(function () {
        $("#num1, #num2, #num3, #num4, #num5, #num6, #numK").val("");
        $("#K").text("");
    })
});
