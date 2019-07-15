$(function (){
    $("#fearBtn").click(function () {
        var num1 = +$("#num1").val();
        var num2 = +$("#num2").val();
        var num3 = +$("#num3").val();
        var num4 = +$("#num4").val();
        var num5 = +$("#num5").val();
        var num6 = +$("#num6").val();
        var numK = +$("#numK").val();
        var checkK = false;
        var output = ""

        var field = [num1, num2, num3, num4, num5, num6]
        var answer = 0
        for (var check1 = 0; check1 <= field.length - 1; check1++) {
            for (var check2 = 1; check2 <= field.length - 1; check2++) {
                console.log(field[check1], field[check2]);

                answer = (field[check1]) + (field[check2])
                if (answer == numK && field[check1] !== field[check2]) {
                    checkK = true
                    output = (numK + " was found by adding array members " + field[check1] + " and " + field[check2] + ".")
                    break;
                }
            }
            if (checkK = false) {
                output = (numK + "was not found.")
        }
       
        }
        $("#K").text(output);
    })                
   
    $("#clearBtn5").click(function () {
        $("#num1, #num2, #num3, #num4, #num5, #num6, #numK").val("");
        $("#K").text("");
    })
        });
    
