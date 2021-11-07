// JavaScript Document
		

	function convert()
	{
		var r = parseInt(document.getElementById("inpt1").value);
		var g = parseInt(document.getElementById("inpt2").value);
		var b = parseInt(document.getElementById("inpt3").value);
		
		/*var hex1 = r.toString(16).toUpperCase();
		if(hex1.length<2)
			{hex1 = "0" + hex1;}
		
		var hex2 = g.toString(16).toUpperCase();
		if(hex2.length<2)
			{hex2 = "0" + hex2;}
			
		var hex3 = b.toString(16).toUpperCase();
		if(hex3.length<2)
			{hex3 = "0" + hex3;}*/
			
		var color = "#" + hex(r) + hex(g) + hex(b);
			
		document.getElementById("result").value = color; /*"#" + hex1 + hex2 + hex3;*/
		
				
		
	}
	
	function hex(v)
	{
		var hex= v.toString(16);
		if(v<16)
		{
			hex= "0" + hex;
		}
		return hex;
	}
	