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
		else if(oprt === "d")
		{
			document.getElementById("result").value = m*1000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = m*1000000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = m*1000000000;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = m*1000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = m*1000000;
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = m*6.28981077;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = m*35195.079728;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = m*7039.0159456;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = m*1759.7539864;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = m*879.8769932;
		}
		else if(oprt === "ga")
		{
			document.getElementById("result").value = m*219.9692483;
		}
		
	}
	
	
	if(slct==="d")
	{	var d= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = d/1000;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (d/1000)*1000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (d/1000)*1000000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (d/1000)*1000000000;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = (d/1000)*1000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (d/1000)*1000000;
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (d/1000)*6.28981077;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (d/1000)*35195.079728;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (d/1000)*7039.0159456;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (d/1000)*1759.7539864;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = (d/1000)*879.8769932;
		}
		else if(oprt === "ga")
		{
			document.getElementById("result").value = (d/1000)*219.9692483;
		}
		
	}
	
	if(slct==="c")
	{	var c= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = c/1000000;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (c/1000000)*1000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (c/1000000)*1000000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (c/1000000)*1000000000;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = (c/1000000)*1000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (c/1000000)*1000000;
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (c/1000000)*6.28981077;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (c/1000000)*35195.079728;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (c/1000000)*7039.0159456;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (c/1000000)*1759.7539864;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = (c/1000000)*879.8769932;
		}
		else if(oprt === "ga")
		{
			document.getElementById("result").value = (c/1000000)*219.9692483;
		}
		
	}
	
	if(slct==="cm")
	{	var cm= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = cm/1000000000;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (cm/1000000000)*1000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (cm/1000000000)*1000000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (cm/1000000000)*1000000000;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = (cm/1000000000)*1000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (cm/1000000000)*1000000;
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (cm/1000000000)*6.28981077;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (cm/1000000000)*35195.079728;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (cm/1000000000)*7039.0159456;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (cm/1000000000)*1759.7539864;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = (cm/1000000000)*879.8769932;
		}
		else if(oprt === "ga")
		{
			document.getElementById("result").value = (cm/1000000000)*219.9692483;
		}
		
	}
	
	if(slct==="l")
	{	var l= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = l/1000;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (l/1000)*1000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (l/1000)*1000000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (l/1000)*1000000000;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = (l/1000)*1000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (l/1000)*1000000;
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (l/1000)*6.28981077;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (l/1000)*35195.079728;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (l/1000)*7039.0159456;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (l/1000)*1759.7539864;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = (l/1000)*879.8769932;
		}
		else if(oprt === "ga")
		{
			document.getElementById("result").value = (l/1000)*219.9692483;
		}
		
	}
	
	if(slct==="ml")
	{	var ml= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = ml/1000000;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (ml/1000000)*1000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (ml/1000000)*1000000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (ml/1000000)*1000000000;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = (ml/1000000)*1000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (ml/1000000)*1000000;
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (ml/1000000)*6.28981077;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (ml/1000000)*35195.079728;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (ml/1000000)*7039.0159456;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (ml/1000000)*1759.7539864;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = (ml/1000000)*879.8769932;
		}
		else if(oprt === "ga")
		{
			document.getElementById("result").value = (ml/1000000)*219.9692483;
		}
		
	}
	
	if(slct==="b")
	{	var b= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = b/6.28981077;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (b/6.28981077)*1000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (b/6.28981077)*1000000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (b/6.28981077)*1000000000;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = (b/6.28981077)*1000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (b/6.28981077)*1000000;
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (b/6.28981077)*6.28981077;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (b/6.28981077)*35195.079728;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (b/6.28981077)*7039.0159456;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (b/6.28981077)*1759.7539864;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = (b/6.28981077)*879.8769932;
		}
		else if(oprt === "ga")
		{
			document.getElementById("result").value = (b/6.28981077)*219.9692483;
		}
		
	}
	
	if(slct==="f")
	{	var f= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = f/35195.079728;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (f/35195.079728)*1000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (f/35195.079728)*1000000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (f/35195.079728)*1000000000;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = (f/35195.079728)*1000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (f/35195.079728)*1000000;
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (f/35195.079728)*6.28981077;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (f/35195.079728)*35195.079728;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (f/35195.079728)*7039.0159456;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (f/35195.079728)*1759.7539864;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = (f/35195.079728)*879.8769932;
		}
		else if(oprt === "ga")
		{
			document.getElementById("result").value = (f/35195.079728)*219.9692483;
		}
		
	}
	
	
	if(slct==="g")
	{	var g= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = g/7039.0159456;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (g/7039.0159456)*1000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (g/7039.0159456)*1000000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (g/7039.0159456)*1000000000;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = (g/7039.0159456)*1000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (g/7039.0159456)*1000000;
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (g/7039.0159456)*6.28981077;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (g/7039.0159456)*35195.079728;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (g/7039.0159456)*7039.0159456;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (g/7039.0159456)*1759.7539864;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = (g/7039.0159456)*879.8769932;
		}
		else if(oprt === "ga")
		{
			document.getElementById("result").value = (g/7039.0159456)*219.9692483;
		}
		
	}
	
	if(slct==="p")
	{	var p= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = p/1759.7539864;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (p/1759.7539864)*1000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (p/1759.7539864)*1000000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (p/1759.7539864)*1000000000;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = (p/1759.7539864)*1000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (p/1759.7539864)*1000000;
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (p/1759.7539864)*6.28981077;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (p/1759.7539864)*35195.079728;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (p/1759.7539864)*7039.0159456;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (p/1759.7539864)*1759.7539864;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = (p/1759.7539864)*879.8769932;
		}
		else if(oprt === "ga")
		{
			document.getElementById("result").value = (p/1759.7539864)*219.9692483;
		}
		
	}
	
	if(slct==="q")
	{	var q= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = q/879.8769932;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (q/879.8769932)*1000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (q/879.8769932)*1000000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (q/879.8769932)*1000000000;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = (q/879.8769932)*1000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (q/879.8769932)*1000000;
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (q/879.8769932)*6.28981077;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (q/879.8769932)*35195.079728;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (q/879.8769932)*7039.0159456;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (q/879.8769932)*1759.7539864;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = (q/879.8769932)*879.8769932;
		}
		else if(oprt === "ga")
		{
			document.getElementById("result").value = (q/879.8769932)*219.9692483;
		}
		
	}
	
	if(slct==="ga")
	{	var ga= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = ga/219.9692483;
		}
		else if(oprt === "d")
		{
			document.getElementById("result").value = (ga/219.9692483)*1000;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (ga/219.9692483)*1000000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (ga/219.9692483)*1000000000;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = (ga/219.9692483)*1000;
		}
		else if(oprt === "ml")
		{
			document.getElementById("result").value = (ga/219.9692483)*1000000;
		}
		else if(oprt === "b")
		{
			document.getElementById("result").value = (ga/219.9692483)*6.28981077;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (ga/219.9692483)*35195.079728;
		}
		else if(oprt === "g")
		{
			document.getElementById("result").value = (ga/219.9692483)*7039.0159456;
		}
		else if(oprt === "p")
		{
			document.getElementById("result").value = (ga/219.9692483)*1759.7539864;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = (ga/219.9692483)*879.8769932;
		}
		else if(oprt === "ga")
		{
			document.getElementById("result").value = (ga/219.9692483)*219.9692483;
		}
		
	}
}