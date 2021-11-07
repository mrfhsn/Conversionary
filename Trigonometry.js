// JavaScript Document
function convert()
{
	var oprt = document.getElementById("operators").value;
	var slct = document.getElementById("selectors").value;
	
	if(slct==="d")
	{	var d= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "s")
		{
			document.getElementById("result").value = Math.sin(d*(3.14159265358979/180));
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = Math.cos(d*(3.14159265358979/180));
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = Math.tan(d*(Math.PI/180));
		}
		else if(oprt === "cs")
		{
			document.getElementById("result").value = 1/(Math.sin(d*(3.14159265358979323846264338328/180)));
		}
		else if(oprt === "sc")
		{
			document.getElementById("result").value = 1/(Math.cos(d*(3.14159265358979323846264338328/180)));
		}
		else if(oprt === "ct")
		{
			document.getElementById("result").value = 1/(Math.tan(d*(3.1415926535897932384626433832799/180)));
		}
		
	}
	
	if(slct==="r")
	{	var r= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "s")
		{
			document.getElementById("result").value = Math.sin(r);
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = Math.cos(r);
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = Math.tan(r);
		}
		
	}
	
	if(slct==="g")
	{	var g= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "s")
		{
			document.getElementById("result").value = Math.sin(g*0.9)*(3.14159265358979323846264338328/180);
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = Math.cos(g*0.9)*(3.14159265358979323846264338328/180);
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = Math.tan(g*0.9)*(3.14159265358979323846264338328/180);
		}
		
	}
}