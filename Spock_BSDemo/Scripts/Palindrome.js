$(function () {
    $("#code3").hide();

    $("#codeBtn3").click(function () {
        $("#code3").toggle();
        if ($(this).text() == "Show Code") {
            $(this).text("Hide Code");
        }
        else {
            $(this).text("Show Code");
        }
    })
    $("#palinBtn").click(function () {
        //Get user input
        var word = $("#word").val();
        
        //Flip the word and check for symmetry
        for (var index = word.length - 1, newword = ''; index >= 0; index--) {
            newword += word.substr(index, 1);
        }
        if (word == newword) {
            var palindrome = '<span class="palin">' + newword + '</span>'
        }
        else {
            var palindrome = '<span class="nolip">' + newword + '</span>'
        }
        //Show user the Results
        $("#reverse").html(palindrome);

    });
    //Clear input and output
    $("#clearBtn3").click(function () {
        $("#word").val("");
        $("#reverse").text("");
    });
})