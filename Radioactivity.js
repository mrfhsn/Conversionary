// JavaScript Document
function convert()
{
	var oprt = document.getElementById("operators").value;
	var slct = document.getElementById("selectors").value;
	
	if(slct==="b")
	{	var b= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "b")
		{
			document.getElementById("result").value = b;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = b/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = b/1000000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = b/37000000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = b/37000000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = b/37000;
		}
		else if(oprt === "r")
		{
			document.getElementById("result").value = b/1000000;
		}
	}
	
	if(slct==="k")
	{	var k= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "b")
		{
			document.getElementById("result").value = k*1000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (k*1000)/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (k*1000)/1000000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (k*1000)/37000000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (k*1000)/37000000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (k*1000)/37000;
		}
		else if(oprt === "r")
		{
			document.getElementById("result").value = (k*1000)/1000000;
		}
	}
	
	if(slct==="m")
	{	var m= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "b")
		{
			document.getElementById("result").value = m*1000000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (m*1000000)/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (m*1000000)/1000000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (m*1000000)/37000000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (m*1000000)/37000000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (m*1000000)/37000;
		}
		else if(oprt === "r")
		{
			document.getElementById("result").value = (m*1000000)/1000000;
		}
	}
	
	if(slct==="c")
	{	var c= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "b")
		{
			document.getElementById("result").value = c*37000000000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (c*37000000000)/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (c*37000000000)/1000000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (c*37000000000)/37000000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (c*37000000000)/37000000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (c*37000000000)/37000;
		}
		else if(oprt === "r")
		{
			document.getElementById("result").value = (c*37000000000)/1000000;
		}
	}
	
	if(slct==="ml")
	{	var ml= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "b")
		{
			document.getElementById("result").value = ml*37000000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (ml*37000000)/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (ml*37000000)/1000000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (ml*37000000)/37000000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (ml*37000000)/37000000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (ml*37000000)/37000;
		}
		else if(oprt === "r")
		{
			document.getElementById("result").value = (ml*37000000)/1000000;
		}
	}
	
	if(slct==="mi")
	{	var mi= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "b")
		{
			document.getElementById("result").value = mi*37000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (mi*37000)/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (mi*37000)/1000000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (mi*37000)/37000000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (mi*37000)/37000000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (mi*37000)/37000;
		}
		else if(oprt === "r")
		{
			document.getElementById("result").value = (mi*37000)/1000000;
		}
	}
	
	if(slct==="r")
	{	var r= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "b")
		{
			document.getElementById("result").value = r*1000000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (r*1000000)/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (r*1000000)/1000000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (r*1000000)/37000000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (r*1000000)/37000000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (r*1000000)/37000;
		}
		else if(oprt === "r")
		{
			document.getElementById("result").value = (r*1000000)/1000000;
		}
	}
	
}