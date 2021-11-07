// JavaScript Document
// JavaScript Document
function convert()
{
	var oprt = document.getElementById("operators").value;
	var slct = document.getElementById("selectors").value;
	
	if(slct==="w")
	{	var w= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "w")
		{
			document.getElementById("result").value = w
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = w*0.001;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = w*0.000001;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = w*0.000000001;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = w*0.0013404830
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = w*3.412141633;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = w*859.854227860;
		}
		else if(oprt === "kc")
		{
			document.getElementById("result").value = w*0.8594528;
		}
		else if(oprt === "e")
		{
			document.getElementById("result").value = w*10000000;
		}
	
	}
	
	if(slct==="k")
	{	var k= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "w")
		{
			document.getElementById("result").value = k/0.001;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = k;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (k/0.001)*0.000001;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (k/0.001)*0.000000001;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (k/0.001)*0.0013404830
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (k/0.001)*3.412141633;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (k/0.001)*859.854227860;
		}
		else if(oprt === "kc")
		{
			document.getElementById("result").value = (k/0.001)*0.8594528;
		}
		else if(oprt === "e")
		{
			document.getElementById("result").value = (k/0.001)*10000000;
		}
	
	}
	
	if(slct==="m")
	{	var m= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "w")
		{
			document.getElementById("result").value = m/0.000001;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (m/0.000001)*0.001;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (m/0.000001)*0.000001;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (m/0.000001)*0.000000001;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (m/0.000001)*0.0013404830
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (m/0.000001)*3.412141633;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (m/0.000001)*859.854227860;
		}
		else if(oprt === "kc")
		{
			document.getElementById("result").value = (m/0.000001)*0.8594528;
		}
		else if(oprt === "e")
		{
			document.getElementById("result").value = (m/0.000001)*10000000;
		}
	
	}
	
	if(slct==="g")
	{	var g= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "w")
		{
			document.getElementById("result").value = g/0.000000001;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (g/0.000000001)*0.001;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (g/0.000000001)*0.000001;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (g/0.000000001)*0.000000001;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (g/0.000000001)*0.0013404830
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (g/0.000000001)*3.412141633;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (g/0.000000001)*859.854227860;
		}
		else if(oprt === "kc")
		{
			document.getElementById("result").value = (g/0.000000001)*0.8594528;
		}
		else if(oprt === "e")
		{
			document.getElementById("result").value = (g/0.000000001)*10000000;
		}
	
	}
	
	if(slct==="h")
	{	var h= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "w")
		{
			document.getElementById("result").value = h/0.0013404830
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (h/0.0013404830)*0.001;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (h/0.0013404830)*0.000001;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (h/0.0013404830)*0.000000001;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (h/0.0013404830)*0.0013404830
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (h/0.0013404830)*3.412141633;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (h/0.0013404830)*859.854227860;
		}
		else if(oprt === "kc")
		{
			document.getElementById("result").value = (h/0.0013404830)*0.8594528;
		}
		else if(oprt === "e")
		{
			document.getElementById("result").value = (h/0.0013404830)*10000000;
		}
	
	}
	
	if(slct==="b")
	{	var b= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "w")
		{
			document.getElementById("result").value = b/3.412141633
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (b/3.412141633)*0.001;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (b/3.412141633)*0.000001;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (b/3.412141633)*0.000000001;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (b/3.412141633)*0.0013404830
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (b/3.412141633)*3.412141633;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (b/3.412141633)*859.854227860;
		}
		else if(oprt === "kc")
		{
			document.getElementById("result").value = (b/3.412141633)*0.8594528;
		}
		else if(oprt === "e")
		{
			document.getElementById("result").value = (b/3.412141633)*10000000;
		}
	
	}
	
	if(slct==="c")
	{	var c= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "w")
		{
			document.getElementById("result").value = c/859.854227860;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (c/859.854227860)*0.001;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (c/859.854227860)*0.000001;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (c/859.854227860)*0.000000001;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (c/859.854227860)*0.0013404830
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (c/859.854227860)*3.412141633;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (c/859.854227860)*859.854227860;
		}
		else if(oprt === "kc")
		{
			document.getElementById("result").value = (c/859.854227860)*0.8594528;
		}
		else if(oprt === "e")
		{
			document.getElementById("result").value = (c/859.854227860)*10000000;
		}
	
	}
	
	if(slct==="kc")
	{	var kc= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "w")
		{
			document.getElementById("result").value = kc/0.8594528
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (kc/0.8594528)*0.001;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (kc/0.8594528)*0.000001;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (kc/0.8594528)*0.000000001;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (kc/0.8594528)*0.0013404830
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (kc/0.8594528)*3.412141633;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (kc/0.8594528)*859.854227860;
		}
		else if(oprt === "kc")
		{
			document.getElementById("result").value = (kc/0.8594528)*0.8594528;
		}
		else if(oprt === "e")
		{
			document.getElementById("result").value = (kc/0.8594528)*10000000;
		}
	
	}

	
	if(slct==="e")
	{	var e= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "w")
		{
			document.getElementById("result").value = e/10000000
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (e/10000000)*0.001;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (e/10000000)*0.000001;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (e/10000000)*0.000000001;
		}
		else if(oprt === "h")
		{
			document.getElementById("result").value = (e/10000000)*0.0013404830
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (e/10000000)*3.412141633;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (e/10000000)*859.854227860;
		}
		else if(oprt === "kc")
		{
			document.getElementById("result").value = (e/10000000)*0.8594528;
		}
		else if(oprt === "e")
		{
			document.getElementById("result").value = (e/10000000)*10000000;
		}
	
	}

}