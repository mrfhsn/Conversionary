// JavaScript Document
// JavaScript Document
function convert()
{
	var oprt = document.getElementById("operators").value;
	var slct = document.getElementById("selectors").value;
	
	if(slct==="f")
	{	var f= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "f")
		{
			document.getElementById("result").value = f;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = f*1000000000000;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = f*1000000000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = f*1000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = f*1000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = f/1000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = f;
		}
	}
	
	if(slct==="p")
	{	var p= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "f")
		{
			document.getElementById("result").value = p/1000000000000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = p;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = p/100;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = p/1000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = p/1000000000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = p/1000000000000000000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = p/1000000000000;
		}
	}
	
	if(slct==="n")
	{	var n= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "f")
		{
			document.getElementById("result").value = n/1000000000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = n*1000;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = n;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (n/1000000000)*1000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (n/1000000000)*1000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (n/1000000000)/1000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (n/1000000000);
		}
	}
	
	if(slct==="m")
	{	var m= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "f")
		{
			document.getElementById("result").value = m/1000000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (m/1000000)*1000000000000;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = (m/1000000)*1000000000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (m/1000000)*1000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (m/1000000)*1000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (m/1000000)/1000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (m/1000000);
		}
	}
	
	if(slct==="ml")
	{	var ml= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "f")
		{
			document.getElementById("result").value = ml/1000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (ml/1000)*1000000000000;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = (ml/1000)*1000000000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (ml/1000)*1000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (ml/1000)*1000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (ml/1000)/1000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (ml/1000);
		}
	}
	
	if(slct==="k")
	{	var k= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "f")
		{
			document.getElementById("result").value = k*1000;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (k*1000)*1000000000000;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = (k*1000)*1000000000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (k*1000)*1000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (k*1000)*1000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (k*1000)/1000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (k*1000);
		}
	}
	
	if(slct==="c")
	{	var c= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "f")
		{
			document.getElementById("result").value = c;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = c*1000000000000;
		}
		else if(oprt === "n")
		{
			document.getElementById("result").value = c*1000000000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = c*1000000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = c*1000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = c/1000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = c;
		}
	}
}