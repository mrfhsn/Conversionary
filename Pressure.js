// JavaScript Document
// JavaScript Document
function convert()
{
	var oprt = document.getElementById("operators").value;
	var slct = document.getElementById("selectors").value;
	
	if(slct==="p")
	{	var p= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "p")
		{
			document.getElementById("result").value = p;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = p/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = p/1000000;
		}
		else if(oprt === "mh")
		{
			document.getElementById("result").value = p*0.007500638;
		}
		else if(oprt === "ch")
		{
			document.getElementById("result").value = p*0.0007500638;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = p*0.000009869;
		}
		else if(oprt === "ps")
		{
			document.getElementById("result").value = p*0.000145038;
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = p*0.00001;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = p*0.007500617;
		}
		
	}
	
	if(slct==="k")
	{	var k= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "p")
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
		else if(oprt === "mh")
		{
			document.getElementById("result").value = (k*1000)*0.007500638;
		}
		else if(oprt === "ch")
		{
			document.getElementById("result").value = (k*1000)*0.0007500638;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (k*1000)*0.000009869;
		}
		else if(oprt === "ps")
		{
			document.getElementById("result").value = (k*1000)*0.000145038;
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (k*1000)*0.00001;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = (k*1000)*0.007500617;
		}
		
	}
	
	if(slct==="m")
	{	var m= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "p")
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
		else if(oprt === "mh")
		{
			document.getElementById("result").value = (m*1000000)*0.007500638;
		}
		else if(oprt === "ch")
		{
			document.getElementById("result").value = (m*1000000)*0.0007500638;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (m*1000000)*0.000009869;
		}
		else if(oprt === "ps")
		{
			document.getElementById("result").value = (m*1000000)*0.000145038;
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (m*1000000)*0.00001;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = (m*1000000)*0.007500617;
		}
		
	}
	
	if(slct==="mh")
	{	var mh= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "p")
		{
			document.getElementById("result").value = mh/0.007500638;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (mh/0.007500638)/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (mh/0.007500638)/1000000;
		}
		else if(oprt === "mh")
		{
			document.getElementById("result").value = (mh/0.007500638)*0.007500638;
		}
		else if(oprt === "ch")
		{
			document.getElementById("result").value = (mh/0.007500638)*0.0007500638;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (mh/0.007500638)*0.000009869;
		}
		else if(oprt === "ps")
		{
			document.getElementById("result").value = (mh/0.007500638)*0.000145038;
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (mh/0.007500638)*0.00001;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = (mh/0.007500638)*0.007500617;
		}
		
	}
	
	if(slct==="ch")
	{	var ch= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "p")
		{
			document.getElementById("result").value = ch/0.0007500638;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (ch/0.0007500638)/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (ch/0.0007500638)/1000000;
		}
		else if(oprt === "mh")
		{
			document.getElementById("result").value = (ch/0.0007500638)*0.007500638;
		}
		else if(oprt === "ch")
		{
			document.getElementById("result").value = (ch/0.0007500638)*0.0007500638;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (ch/0.0007500638)*0.000009869;
		}
		else if(oprt === "ps")
		{
			document.getElementById("result").value = (ch/0.0007500638)*0.000145038;
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (ch/0.0007500638)*0.00001;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = (ch/0.0007500638)*0.007500617;
		}
		
	}
	
	if(slct==="a")
	{	var a= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "p")
		{
			document.getElementById("result").value = a/0.000009869;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (a/0.000009869)/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (a/0.000009869)/1000000;
		}
		else if(oprt === "mh")
		{
			document.getElementById("result").value = (a/0.000009869)*0.007500638;
		}
		else if(oprt === "ch")
		{
			document.getElementById("result").value = (a/0.000009869)*0.0007500638;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (a/0.000009869)*0.000009869;
		}
		else if(oprt === "ps")
		{
			document.getElementById("result").value = (a/0.000009869)*0.000145038;
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (a/0.000009869)*0.00001;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = (a/0.000009869)*0.007500617;
		}
		
	}
	
	if(slct==="ps")
	{	var ps= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "p")
		{
			document.getElementById("result").value = ps/0.000145038;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (ps/0.000145038)/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (ps/0.000145038)/1000000;
		}
		else if(oprt === "mh")
		{
			document.getElementById("result").value = (ps/0.000145038)*0.007500638;
		}
		else if(oprt === "ch")
		{
			document.getElementById("result").value = (ps/0.000145038)*0.0007500638;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (ps/0.000145038)*0.000009869;
		}
		else if(oprt === "ps")
		{
			document.getElementById("result").value = (ps/0.000145038)*0.000145038;
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (ps/0.000145038)*0.00001;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = (ps/0.000145038)*0.007500617;
		}
		
	}
	
	if(slct=="b")
	{	var b= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "p")
		{
			document.getElementById("result").value = b/0.00001;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (b/0.00001)/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (b/0.00001)/1000000;
		}
		else if(oprt === "mh")
		{
			document.getElementById("result").value = (b/0.00001)*0.007500638;
		}
		else if(oprt === "ch")
		{
			document.getElementById("result").value = (b/0.00001)*0.0007500638;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (b/0.00001)*0.000009869;
		}
		else if(oprt === "ps")
		{
			document.getElementById("result").value = (b/0.00001)*0.000145038;
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (b/0.00001)*0.00001;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = (b/0.00001)*0.007500617;
		}
		
	}
	
	if(slct==="t")
	{	var t= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "p")
		{
			document.getElementById("result").value = t/0.007500617;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = (t/0.007500617)/1000;
		}
		else if(oprt === "m")
		{
			document.getElementById("result").value = (t/0.007500617)/1000000;
		}
		else if(oprt === "mh")
		{
			document.getElementById("result").value = (t/0.007500617)*0.007500638;
		}
		else if(oprt === "ch")
		{
			document.getElementById("result").value = (t/0.007500617)*0.0007500638;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (t/0.007500617)*0.000009869;
		}
		else if(oprt === "ps")
		{
			document.getElementById("result").value = (t/0.007500617)*0.000145038;
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (t/0.007500617)*0.00001;
		}
		else if(oprt === "t")
		{
			document.getElementById("result").value = (t/0.007500617)*0.007500617;
		}
		
	}
}