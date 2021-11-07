// JavaScript Document
function convert()
{
	var oprt = document.getElementById("operators").value;
	var slct = document.getElementById("selectors").value;
	
	if(slct==="d")
	{	var d= parseInt(document.getElementById("inpt").value);
	
		if(oprt === "d")
		{
			document.getElementById("result").value = d;
		}
		else if(oprt === "b")
		{
			var b1=  d.toString(2);			
			document.getElementById("result").value = b1;			
		}
		else if(oprt === "o")
		{
			var o1=  d.toString(8);			
			document.getElementById("result").value = o1;			
		}
		else if(oprt === "h")
		{
			var h1=  d.toString(16).toUpperCase();			
			document.getElementById("result").value = h1;					
		}
	}
			
	if(slct==="b")
	{	var b= document.getElementById("inpt").value;
	
		if(oprt === "d")
		{
			var d1= parseInt(b,2);
			document.getElementById("result").value = d1;
		}
		else if(oprt === "b")
		{
			/*var b1=  d.toString(2);*/			
			document.getElementById("result").value = b;			
		}
		else if(oprt === "o")
		{
			var o1=  parseInt(b,2).toString(8);			
			document.getElementById("result").value = o1;			
		}
		else if(oprt === "h")
		{
			var h1=  parseInt(b,2).toString(16).toUpperCase();			
			document.getElementById("result").value = h1;					
		}
	}
	
	if(slct==="o")
	{	var o= document.getElementById("inpt").value;
	
		if(oprt === "d")
		{
			var d1= parseInt(o,8).toString(10);
			document.getElementById("result").value = d1;
		}
		else if(oprt === "b")
		{
			var b1=   parseInt(o,8).toString(2);			
			document.getElementById("result").value = b1;			
		}
		else if(oprt === "o")
		{
			/*var o1=  parseInt(o,2).toString(8);	*/		
			document.getElementById("result").value = o;			
		}
		else if(oprt === "h")
		{
			var h1=  parseInt(o,8).toString(16).toUpperCase();			
			document.getElementById("result").value = h1;					
		}
	}
	
	// There were some problems with Hex.........
	// They were removed by changing the type....
	
	if(slct==="h")
	{	var h= document.getElementById("inpt").value;
	
		if(oprt === "d")
		{
			var d1= parseInt(h,16).toString(10);
			document.getElementById("result").value = d1;
		}
		else if(oprt === "b")
		{
			var b1=   parseInt(h,16).toString(2);			
			document.getElementById("result").value = b1;			
		}
		else if(oprt === "o")
		{
			var o1=  parseInt(h,16).toString(8);			
			document.getElementById("result").value = o1;			
		}
		else if(oprt === "h")
		{
			/*var h1=  parseInt(o,8).toString(16).toUpperCase();*/			
			document.getElementById("result").value = h;					
		}
	}
}