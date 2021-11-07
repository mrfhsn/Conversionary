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
		else if(oprt === "nm")
		{
			document.getElementById("result").value = m*1000000000;
		}
		else if(oprt === "mcm")
		{
			document.getElementById("result").value = m*1000000;
		}
		else if(oprt === "mm")
		{
			document.getElementById("result").value = m*1000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = m*100;
		}
		else if(oprt === "dm")
		{
			document.getElementById("result").value = m*10;
		}
		else if(oprt === "dcm")
		{
			document.getElementById("result").value = m/10;
		}
		else if(oprt === "hm")
		{
			document.getElementById("result").value = m/100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = m/1000;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = m*10000000000;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = m/9460730473000000;
		}
	}
	
	if(slct==="nm")
	{	var nm= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = nm/1000000000;
		}
		else if(oprt === "nm")
		{
			document.getElementById("result").value = (nm/1000000000)*1000000000;
		}
		else if(oprt === "mcm")
		{
			document.getElementById("result").value = (nm/1000000000)*1000000;
		}
		else if(oprt === "mm")
		{
			document.getElementById("result").value = (nm/1000000000)*1000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (nm/1000000000)*100;
		}
		else if(oprt === "dm")
		{
			document.getElementById("result").value = (nm/1000000000)*10;
		}
		else if(oprt === "dcm")
		{
			document.getElementById("result").value = (nm/1000000000)/10;
		}
		else if(oprt === "hm")
		{
			document.getElementById("result").value = (nm/1000000000)/100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = (nm/1000000000)/1000;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (nm/1000000000)*10000000000;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = (nm/1000000000)*9460730473000000;
		}
	}
	
	if(slct==="mcm")
	{	var mcm= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = m/1000000;
		}
		else if(oprt === "nm")
		{
			document.getElementById("result").value = (mcm/1000000)*1000000000;
		}
		else if(oprt === "mcm")
		{
			document.getElementById("result").value = (mcm/1000000)*1000000;
		}
		else if(oprt === "mm")
		{
			document.getElementById("result").value = (mcm/1000000)*1000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (mcm/1000000)*100;
		}
		else if(oprt === "dm")
		{
			document.getElementById("result").value = (mcm/1000000)*10;
		}
		else if(oprt === "dcm")
		{
			document.getElementById("result").value = (mcm/1000000)/10;
		}
		else if(oprt === "hm")
		{
			document.getElementById("result").value = (mcm/1000000)/100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = (mcm/1000000)/1000;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (mcm/1000000)*10000000000;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = (mcm/1000000)*9460730473000000;
		}
	}
	
	if(slct==="mm")
	{	var mm= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = mm/1000;
		}
		else if(oprt === "nm")
		{
			document.getElementById("result").value = (mm/1000)*1000000000;
		}
		else if(oprt === "mcm")
		{
			document.getElementById("result").value = (mm/1000)*1000000;
		}
		else if(oprt === "mm")
		{
			document.getElementById("result").value = (mm/1000)*1000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (mm/1000)*100;
		}
		else if(oprt === "dm")
		{
			document.getElementById("result").value = (mm/1000)*10;
		}
		else if(oprt === "dcm")
		{
			document.getElementById("result").value = (mm/1000)/10;
		}
		else if(oprt === "hm")
		{
			document.getElementById("result").value = (mm/1000)/100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = (mm/1000)/1000;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (mm/1000)*10000000000;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = (mm/1000)*9460730473000000;
		}
	}
	
	if(slct==="cm")
	{	var cm= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = cm/100;
		}
		else if(oprt === "nm")
		{
			document.getElementById("result").value = (cm/100)*1000000000;
		}
		else if(oprt === "mcm")
		{
			document.getElementById("result").value = (cm/100)*1000000;
		}
		else if(oprt === "mm")
		{
			document.getElementById("result").value = (cm/100)*1000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (cm/100)*100;
		}
		else if(oprt === "dm")
		{
			document.getElementById("result").value = (cm/100)*10;
		}
		else if(oprt === "dcm")
		{
			document.getElementById("result").value = (cm/100)/10;
		}
		else if(oprt === "hm")
		{
			document.getElementById("result").value = (cm/100)/100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = (cm/100)/1000;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (cm/100)*10000000000;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = (cm/100)*9460730473000000;
		}
	}
	
	if(slct==="dm")
	{	var dm= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = dm/10;
		}
		else if(oprt === "nm")
		{
			document.getElementById("result").value = (dm/10)*1000000000;
		}
		else if(oprt === "mcm")
		{
			document.getElementById("result").value = (dm/10)*1000000;
		}
		else if(oprt === "mm")
		{
			document.getElementById("result").value = (dm/10)*1000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (dm/10)*100;
		}
		else if(oprt === "dm")
		{
			document.getElementById("result").value = (dm/10)*10;
		}
		else if(oprt === "dcm")
		{
			document.getElementById("result").value = (dm/10)/10;
		}
		else if(oprt === "hm")
		{
			document.getElementById("result").value = (dm/10)/100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = (dm/10)/1000;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (dm/10)*10000000000;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = (dm/10)*9460730473000000;
		}
	}
	
	if(slct==="dcm")
	{	var dcm= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = dcm*10;
		}
		else if(oprt === "nm")
		{
			document.getElementById("result").value = (dcm*10)*1000000000;
		}
		else if(oprt === "mcm")
		{
			document.getElementById("result").value = (dcm*10)*1000000;
		}
		else if(oprt === "mm")
		{
			document.getElementById("result").value = (dcm*10)*1000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (dcm*10)*100;
		}
		else if(oprt === "dm")
		{
			document.getElementById("result").value = (dcm*10)*10;
		}
		else if(oprt === "dcm")
		{
			document.getElementById("result").value = (dcm*10)/10;
		}
		else if(oprt === "hm")
		{
			document.getElementById("result").value = (dcm*10)/100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = (dcm*10)/1000;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (dcm*10)*10000000000;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = (dcm*10)*9460730473000000;
		}
	}
	
	if(slct==="hm")
	{	var hm= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = hm*100;
		}
		else if(oprt === "nm")
		{
			document.getElementById("result").value = (hm*100)*1000000000;
		}
		else if(oprt === "mcm")
		{
			document.getElementById("result").value = (hm*100)*1000000;
		}
		else if(oprt === "mm")
		{
			document.getElementById("result").value = (hm*100)*100;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (hm*100)*100;
		}
		else if(oprt === "dm")
		{
			document.getElementById("result").value = (hm*100)*10;
		}
		else if(oprt === "dcm")
		{
			document.getElementById("result").value = (hm*100)/10;
		}
		else if(oprt === "hm")
		{
			document.getElementById("result").value = (hm*100)/100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = (hm*100)/100;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (hm*100)*10000000000;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = (hm*100)*9460730473000000;
		}
	}
	
	if(slct==="km")
	{	var km= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = km*1000;
		}
		else if(oprt === "nm")
		{
			document.getElementById("result").value = (km*1000)*1000000000;
		}
		else if(oprt === "mcm")
		{
			document.getElementById("result").value = (km*1000)*1000000;
		}
		else if(oprt === "mm")
		{
			document.getElementById("result").value = (km*1000)*1000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (km*1000)*100;
		}
		else if(oprt === "dm")
		{
			document.getElementById("result").value = (km*1000)*10;
		}
		else if(oprt === "dcm")
		{
			document.getElementById("result").value = (km*1000)/10;
		}
		else if(oprt === "hm")
		{
			document.getElementById("result").value = (km*1000)/100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = (km*1000)/1000;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (km*1000)*10000000000;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = (km*1000)*9460730473000000;
		}
	}
	
	if(slct==="a")
	{	var a= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = a/10000000000;
		}
		else if(oprt === "nm")
		{
			document.getElementById("result").value = (a/10000000000)*1000000000;
		}
		else if(oprt === "mcm")
		{
			document.getElementById("result").value = (a/10000000000)*1000000;
		}
		else if(oprt === "mm")
		{
			document.getElementById("result").value = (a/10000000000)*1000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (a/10000000000)*100;
		}
		else if(oprt === "dm")
		{
			document.getElementById("result").value = (a/10000000000)*10;
		}
		else if(oprt === "dcm")
		{
			document.getElementById("result").value = (a/10000000000)/10;
		}
		else if(oprt === "hm")
		{
			document.getElementById("result").value = (a/10000000000)/100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = (a/10000000000)/1000;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = a;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = (a/10000000000)*9460730473000000;
		}
	}
	
	if(slct==="l")
	{	var l= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = l*9460730473000000;
		}
		else if(oprt === "nm")
		{
			document.getElementById("result").value = (l*9460730473000000)*1000000000;
		}
		else if(oprt === "mcm")
		{
			document.getElementById("result").value = (l*9460730473000000)*1000000;
		}
		else if(oprt === "mm")
		{
			document.getElementById("result").value = (l*9460730473000000)*1000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (l*9460730473000000)*100;
		}
		else if(oprt === "dm")
		{
			document.getElementById("result").value = (l*9460730473000000)*10;
		}
		else if(oprt === "dcm")
		{
			document.getElementById("result").value = (l*9460730473000000)/10;
		}
		else if(oprt === "hm")
		{
			document.getElementById("result").value = (l*9460730473000000)/100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = (l*9460730473000000)/1000;
		}
		else if(oprt === "a")
		{
			document.getElementById("result").value = (l*9460730473000000)*10000000000;
		}
		else if(oprt === "l")
		{
			document.getElementById("result").value = l;
		}
	}
}