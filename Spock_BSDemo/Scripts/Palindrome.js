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
        //Get user input, remove spaces and make it lowercase
        var word = $("#word").val();
        var wordplus = word.replace(/\s+/g, "").toLowerCase();
        //Flip the word and check for symmetry
        for (var index = wordplus.length - 1, newword = ''; index >= 0; index--) {
            newword += wordplus.substr(index, 1);
        }
        if (wordplus == newword) {
            var palindrome = '<span class="palin">' + newword + " is a palindrome" + '</span>'
        }
        else {
            var palindrome = '<span class="nolip">' + newword + " is not a palindrome" + '</span>'
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