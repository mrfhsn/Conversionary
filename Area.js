// JavaScript Document
// JavaScript Document
function convert()
{
	var oprt = document.getElementById("operators").value;
	var slct = document.getElementById("selectors").value;
	
	if(slct==="m")
	{	var m= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = m;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = m/1000000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = m*10000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = m*1000000;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = m/10000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = m/2589988.1103;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = m*1.195990046;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = m*10.763910417;
		}
		else if(oprt === "i")
		{
			document.getElementById("result").value = m*15500.0031;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = m*0.000247105;
		}
	}
	
	if(slct==="k")
	{	var k= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = k*1000000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = k;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (k*1000000)*10000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (k*1000000)*1000000;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (k*1000000)/10000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (k*1000000)/2589988.1103;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (k*1000000)*1.195990046;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (k*1000000)*10.763910417;
		}
		else if(oprt === "i")
		{
			document.getElementById("result").value = (k*1000000)*15500.0031;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (k*1000000)*0.000247105;
		}
	}
	
	if(slct==="c")
	{	var c= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = c/10000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (c/10000)/1000000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (c/10000)*10000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (c/10000)*1000000;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (c/10000)/10000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (c/10000)/2589988.1103;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (c/10000)*1.195990046;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (c/10000)*10.763910417;
		}
		else if(oprt === "i")
		{
			document.getElementById("result").value = (c/10000)*15500.0031;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (c/10000)*0.000247105;
		}
	}
	
	if(slct==="ml")
	{	var ml= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = ml/1000000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (ml/1000000)/1000000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (ml/1000000)*10000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (ml/1000000)*1000000;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (ml/1000000)/10000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (ml/1000000)/2589988.1103;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (ml/1000000)*1.195990046;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (ml/1000000)*10.763910417;
		}
		else if(oprt === "i")
		{
			document.getElementById("result").value = (ml/1000000)*15500.0031;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (ml/1000000)*0.000247105;
		}
	}
	
	if(slct==="h")
	{	var h= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = h*10000;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (h*10000)/1000000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (h*10000)*10000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (h*10000)*1000000;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (h*10000)/10000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (h*10000)/2589988.1103;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (h*10000)*1.195990046;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (h*10000)*10.763910417;
		}
		else if(oprt === "i")
		{
			document.getElementById("result").value = (h*10000)*15500.0031;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (h*10000)*0.000247105;
		}
	}
	
	if(slct==="mi")
	{	var mi= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = mi*2589988.1103;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (mi*2589988.1103)/1000000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (mi*2589988.1103)*10000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (mi*2589988.1103)*1000000;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (mi*2589988.1103)/10000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (mi*2589988.1103)/2589988.1103;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (mi*2589988.1103)*1.195990046;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (mi*2589988.1103)*10.763910417;
		}
		else if(oprt === "i")
		{
			document.getElementById("result").value = (mi*2589988.1103)*15500.0031;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (mi*2589988.1103)*0.000247105;
		}
	}
	
	if(slct==="y")
	{	var y= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = y/1.195990046;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (y/1.195990046)/1000000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (y/1.195990046)*10000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (y/1.195990046)*1000000;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (y/1.195990046)/10000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (y/1.195990046)/2589988.1103;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (y/1.195990046)*1.195990046;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (y/1.195990046)*10.763910417;
		}
		else if(oprt === "i")
		{
			document.getElementById("result").value = (y/1.195990046)*15500.0031;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (y/1.195990046)*0.000247105;
		}
	}
	
	if(slct==="i")
	{	var i= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = i/15500.0031;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (i/15500.0031)/1000000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (i/15500.0031)*10000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (i/15500.0031)*1000000;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (i/15500.0031)/10000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (i/15500.0031)/2589988.1103;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (i/15500.0031)*1.195990046;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (i/15500.0031)*10.763910417;
		}
		else if(oprt === "i")
		{
			document.getElementById("result").value = (i/15500.0031)*15500.0031;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (i/15500.0031)*0.000247105;
		}
	}
	
	if(slct==="a")
	{	var a= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = a/0.000247105;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (a/0.000247105)/1000000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (a/0.000247105)*10000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (a/0.000247105)*1000000;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (a/0.000247105)/10000;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (a/0.000247105)/2589988.1103;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (a/0.000247105)*1.195990046;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (a/0.000247105)*10.763910417;
		}
		else if(oprt === "i")
		{
			document.getElementById("result").value = (a/0.000247105)*15500.0031;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (a/0.000247105)*0.000247105;
		}
	}
}