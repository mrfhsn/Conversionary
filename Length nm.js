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
		else if(oprt === "cm")
		{
			document.getElementById("result").value = m*100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = m/1000;
		}
		else if(oprt === "i")
		{
			document.getElementById("result").value = m*39.37;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = m*3.280839895;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = m*1.0936133;
		}
		else if(oprt === "fu")
		{
			document.getElementById("result").value = m*0.00497097;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = m*0.049709695;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = m*0.000621371;
		}
		else if(oprt === "nm")
		{
			document.getElementById("result").value = m*0.000539957;
		}
		else if(oprt === "fa")
		{
			document.getElementById("result").value = m*0.546805556;
		}
		else if(oprt === "cl")
		{
			document.getElementById("result").value = m*3937.007874;
		}
	}
	
	if(slct==="cm")
	{	var cm= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = cm/100;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (cm/100)*100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = (cm/100)/1000;
		}
		else if(oprt === "i")
		{
			document.getElementById("result").value = (cm/100)*39.37;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (cm/100)*3.280839895;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (cm/100)*1.0936133;
		}
		else if(oprt === "fu")
		{
			document.getElementById("result").value = (cm/100)*0.00497097;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (cm/100)*0.049709695;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (cm/100)*0.000621371;
		}
		else if(oprt === "nm")
		{
			document.getElementById("result").value = (cm/100)*0.000539612;
		}
		else if(oprt === "fa")
		{
			document.getElementById("result").value = (cm/100)*0.546805556;
		}
		else if(oprt === "cl")
		{
			document.getElementById("result").value = (cm/100)*3937.007874;
		}
	}
	
	if(slct==="km")
	{	var km= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = m*1000;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (km*1000)*100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = (km*1000)/1000;
		}
		else if(oprt === "i")
		{
			document.getElementById("result").value = (km*1000)*39.37;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (km*1000)*3.280839895;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (km*1000)*1.0936133;
		}
		else if(oprt === "fu")
		{
			document.getElementById("result").value = (km*1000)*0.00497097;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (km*1000)*0.049709695;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (km*1000)*0.000621371;
		}
		else if(oprt === "nm")
		{
			document.getElementById("result").value = (km*1000)*0.000539612;
		}
		else if(oprt === "fa")
		{
			document.getElementById("result").value = (km*1000)*0.546805556;
		}
		else if(oprt === "cl")
		{
			document.getElementById("result").value = (km*1000)*3937.007874;
		}
	}
	
	if(slct==="i")
	{	var i= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = i*0.0254;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (i*0.0254)*100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = (i*0.0254)/1000;
		}
		else if(oprt === "i")
		{
			document.getElementById("result").value = (i*0.0254)*39.37;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (i*0.0254)*3.280839895;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (i*0.0254)*1.0936133;
		}
		else if(oprt === "fu")
		{
			document.getElementById("result").value = (i*0.0254)*0.00497097;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (i*0.0254)*0.049709695;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (i*0.0254)*0.000621371;
		}
		else if(oprt === "nm")
		{
			document.getElementById("result").value = (i*0.0254)*0.000539612;
		}
		else if(oprt === "fa")
		{
			document.getElementById("result").value = (i*0.0254)*0.546805556;
		}
		else if(oprt === "cl")
		{
			document.getElementById("result").value = (i*0.0254)*3937.007874;
		}
	}
	
	if(slct==="f")
	{	var f= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = f*0.3048;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (f*0.3048)*100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = (f*0.3048)/1000;
		}
		else if(oprt === "i")
		{
			document.getElementById("result").value = (f*0.3048)*39.37;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (f*0.3048)*3.280839895;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (f*0.3048)*1.0936133;
		}
		else if(oprt === "fu")
		{
			document.getElementById("result").value = (f*0.3048)*0.00497097;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (f*0.3048)*0.049709695;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (f*0.3048)*0.000621371;
		}
		else if(oprt === "nm")
		{
			document.getElementById("result").value = (f*0.3048)*0.000539612;
		}
		else if(oprt === "fa")
		{
			document.getElementById("result").value = (f*0.3048)*0.546805556;
		}
		else if(oprt === "cl")
		{
			document.getElementById("result").value = (f*0.3048)*3937.007874;
		}
	}
	
	if(slct==="y")
	{	var y= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = y*0.9144;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (y*0.9144)*100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = (y*0.9144)/1000;
		}
		else if(oprt === "i")
		{
			document.getElementById("result").value = (y*0.9144)*39.37;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (y*0.9144)*3.280839895;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (y*0.9144)*1.0936133;
		}
		else if(oprt === "fu")
		{
			document.getElementById("result").value = (y*0.9144)*0.00497097;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (y*0.9144)*0.049709695;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (y*0.9144)*0.000621371;
		}
		else if(oprt === "nm")
		{
			document.getElementById("result").value = (y*0.9144)*0.000539612;
		}
		else if(oprt === "fa")
		{
			document.getElementById("result").value = (y*0.9144)*0.546805556;
		}
		else if(oprt === "cl")
		{
			document.getElementById("result").value = (y*0.9144)*3937.007874;
		}
	}
	
	if(slct==="c")
	{	var c= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = c*20.1168;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (c*20.1168)*100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = (c*20.1168)/1000;
		}
		else if(oprt === "i")
		{
			document.getElementById("result").value = (c*20.1168)*39.37;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (c*20.1168)*3.280839895;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (c*20.1168)*1.0936133;
		}
		else if(oprt === "fu")
		{
			document.getElementById("result").value = (c*20.1168)*0.00497097;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (c*20.1168)*0.049709695;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (c*20.1168)*0.000621371;
		}
		else if(oprt === "nm")
		{
			document.getElementById("result").value = (c*20.1168)*0.000539612;
		}
		else if(oprt === "fa")
		{
			document.getElementById("result").value = (c*20.1168)*0.546805556;
		}
		else if(oprt === "cl")
		{
			document.getElementById("result").value = (c*20.1168)*3937.007874;
		}
	}
	
	if(slct==="fu")
	{	var fu= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = fu*201.168;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (fu*201.168)*100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = (fu*201.168)/1000;
		}
		else if(oprt === "i")
		{
			document.getElementById("result").value = (fu*201.168)*39.37;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (fu*201.168)*3.280839895;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (fu*201.168)*1.0936133;
		}
		else if(oprt === "fu")
		{
			document.getElementById("result").value = (fu*201.168)*0.00497097;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (fu*201.168)*0.049709695;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (fu*201.168)*0.000621371;
		}
		else if(oprt === "nm")
		{
			document.getElementById("result").value = (fu*201.168)*0.000539612;
		}
		else if(oprt === "fa")
		{
			document.getElementById("result").value = (fu*201.168)*0.546805556;
		}
		else if(oprt === "cl")
		{
			document.getElementById("result").value = (fu*201.168)*3937.007874;
		}
	}
	
	if(slct==="mi")
	{	var mi= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = mi*1609.344;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (mi*1609.344)*100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = (mi*1609.344)/1000;
		}
		else if(oprt === "i")
		{
			document.getElementById("result").value = (mi*1609.344)*39.37;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (mi*1609.344)*3.280839895;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (mi*1609.344)*1.0936133;
		}
		else if(oprt === "fu")
		{
			document.getElementById("result").value = (mi*1609.344)*0.00497097;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (mi*1609.344)*0.049709695;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (mi*1609.344)*0.000621371;
		}
		else if(oprt === "nm")
		{
			document.getElementById("result").value = (mi*1609.344)*0.000539612;
		}
		else if(oprt === "fa")
		{
			document.getElementById("result").value = (mi*1609.344)*0.546805556;
		}
		else if(oprt === "cl")
		{
			document.getElementById("result").value = (mi*1609.344)*3937.007874;
		}
	}
	
	if(slct==="nm")
	{	var nm= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = nm*1852;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (nm*1852)*100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = (nm*1852)/1000;
		}
		else if(oprt === "i")
		{
			document.getElementById("result").value = (nm*1852)*39.37;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (nm*1852)*3.280839895;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (nm*1852)*1.0936133;
		}
		else if(oprt === "fu")
		{
			document.getElementById("result").value = (nm*1852)*0.00497097;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (nm*1852)*0.049709695;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (nm*1852)*0.000621371;
		}
		else if(oprt === "nm")
		{
			document.getElementById("result").value = (nm*1852)*0.000539612;
		}
		else if(oprt === "fa")
		{
			document.getElementById("result").value = (nm*1852)*0.546805556;
		}
		else if(oprt === "cl")
		{
			document.getElementById("result").value = (nm*1852)*3937.007874;
		}
	}
	
	if(slct==="fa")
	{	var fa= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = fa*1.8288;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (fa*1.8288)*100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = (fa*1.8288)/1000;
		}
		else if(oprt === "i")
		{
			document.getElementById("result").value = (fa*1.8288)*39.37;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (fa*1.8288)*3.280839895;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (fa*1.8288)*1.0936133;
		}
		else if(oprt === "fu")
		{
			document.getElementById("result").value = (fa*1.8288)*0.00497097;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (fa*1.8288)*0.049709695;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (fa*1.8288)*0.000621371;
		}
		else if(oprt === "nm")
		{
			document.getElementById("result").value = (fa*1.8288)*0.000539612;
		}
		else if(oprt === "fa")
		{
			document.getElementById("result").value = (fa*1.8288)*0.546805556;
		}
		else if(oprt === "cl")
		{
			document.getElementById("result").value = (fa*1.8288)*3937.007874;
		}
	}
	
	if(slct==="cl")
	{	var cl= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "m")
		{
			document.getElementById("result").value = cl*0.000254;
		}
		else if(oprt === "cm")
		{
			document.getElementById("result").value = (cl*0.000254)*100;
		}
		else if(oprt === "km")
		{
			document.getElementById("result").value = (cl*0.000254)/1000;
		}
		else if(oprt === "i")
		{
			document.getElementById("result").value = (cl*0.000254)*39.37;
		}
		else if(oprt === "f")
		{
			document.getElementById("result").value = (cl*0.000254)*3.280839895;
		}
		else if(oprt === "y")
		{
			document.getElementById("result").value = (cl*0.000254)*1.0936133;
		}
		else if(oprt === "fu")
		{
			document.getElementById("result").value = (cl*0.000254)*0.00497097;
		}
		else if(oprt === "c")
		{
			document.getElementById("result").value = (cl*0.000254)*0.049709695;
		}
		else if(oprt === "mi")
		{
			document.getElementById("result").value = (cl*0.000254)*0.000621371;
		}
		else if(oprt === "nm")
		{
			document.getElementById("result").value = (cl*0.000254)*0.000539612;
		}
		else if(oprt === "fa")
		{
			document.getElementById("result").value = (cl*0.000254)*0.546805556;
		}
		else if(oprt === "cl")
		{
			document.getElementById("result").value = (cl*0.000254)*3937.007874;
		}
	}
}