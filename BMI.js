// JavaScript Document
function convert() {
    /*var oprt = document.getElementById("operators").value;*/
    var slct1 = document.getElementById("selectors1").value;
    var slct2 = document.getElementById("selectors2").value;

    if (slct1 === "k") {
        var k = parseFloat(document.getElementById("inpt1").value);

    }
    if (slct1 === "p") {
        var p = parseFloat(document.getElementById("inp1t").value);

        var k = p * 0.454;
    }


    if (slct2 === "m") {
        var m = parseFloat(document.getElementById("inpt2").value);

    }
    if (slct2 === "c") {
        var c = parseFloat(document.getElementById("inpt2").value);

        var m = c / 100;
    }
    if (slct2 === "i") {
        var i = parseFloat(document.getElementById("inpt2").value);

        var m = i * 0.0254;
    }

    var r = document.getElementById("result").value = k / (m * m);
	
	
    if (r > 70) {
        document.getElementById("result2").value = "Are you kidding!!!"
    } else if (r > 50) {
        document.getElementById("result2").value = "Morbid obesity"
    } else if (r > 40) {
        document.getElementById("result2").value = "Class 3 obesity."
    } else if (r > 35) {
        document.getElementById("result2").value = "Class 2 obesity"
    } else if (r > 30) {
        document.getElementById("result2").value = "Class 1 obesity"
    } else if (r > 25) {
        document.getElementById("result2").value = "Your have overweight"
    } else if (r > 18.5) {
        document.getElementById("result2").value = "You have normal weight"
    } else if (r < 18.5) {
        document.getElementById("result2").value = "You are underweight"
    }

}