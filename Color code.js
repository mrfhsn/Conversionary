function convert()
	{
		//document.getElementById("inpt").value = "#";
		var hex = parseInt((document.getElementById("inpt").value),16);
		
		/*var bigint= parseInt(hex,16);*/
		var r= (hex >> 16) & 255;
		var g= (hex >> 8) & 255;
		var b= hex & 255;
		
		/*alert("The num is " + r +","+ g +","+ b);*/
		document.getElementById("result1").value = r;
		document.getElementById("result2").value = g;
		document.getElementById("result3").value = b;
		
	}