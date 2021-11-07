// JavaScript Document
// JavaScript Document
function convert()
{
	var oprt = document.getElementById("operators").value;
	var slct = document.getElementById("selectors").value;
	
	if(slct==="us")
	{	var us= parseFloat(document.getElementById("inpt").value);
	
		if(oprt === "us")
		{
			document.getElementById("result").value = us;
		}
		else if(oprt === "af")
		{
			document.getElementById("result").value = us*76.7;
		}
		else if(oprt === "ar")
		{
			document.getElementById("result").value = us*68;
		}
		else if(oprt === "au")
		{
			document.getElementById("result").value = us*1.5173;
		}
		else if(oprt === "at")
		{
			document.getElementById("result").value = us*12.68;
		}
		else if(oprt === "bh")
		{
			document.getElementById("result").value = us*0.376;
		}
		else if(oprt === "bn")
		{
			document.getElementById("result").value = us*85.03;
		}
		else if(oprt === "bt")
		{
			document.getElementById("result").value = us*0.00011;
		}
		else if(oprt === "br")
		{
			document.getElementById("result").value = us*5.717;
		}
		else if(oprt === "bu")
		{
			document.getElementById("result").value = us*1.7815;
		}
		else if(oprt === "cn")
		{
			document.getElementById("result").value = us*1.3916;
		}
		else if(oprt === "ch")
		{
			document.getElementById("result").value = us*7.0928;
		}
		else if(oprt === "co")
		{
			document.getElementById("result").value = us*3775.03;
		}
		else if(oprt === "cr")
		{
			document.getElementById("result").value = us*6.9018;
		}
		else if(oprt === "dn")
		{
			document.getElementById("result").value = us*6.792;
		}
		else if(oprt === "eg")
		{
			document.getElementById("result").value = us*15.86;
		}
		else if(oprt === "eu")
		{
			document.getElementById("result").value = us*0.910888;
		}
		else if(oprt === "hn")
		{
			document.getElementById("result").value = us*318.54;
		}
		else if(oprt === "ia")
		{
			document.getElementById("result").value = us*75.572078;
		}
		else if(oprt === "id")
		{
			document.getElementById("result").value = us*14717.795;
		}
		else if(oprt === "ir")
		{
			document.getElementById("result").value = us*41823.1267;
		}
		else if(oprt === "iq")
		{
			document.getElementById("result").value = us*1190;
		}
		else if(oprt === "is")
		{
			document.getElementById("result").value = us*3.508;
		}
		else if(oprt === "j")
		{
			document.getElementById("result").value = us*107.534553;
		}
		else if(oprt === "sk")
		{
			document.getElementById("result").value = us*122.0762;
		}
		else if(oprt === "k")
		{
			document.getElementById("result").value = us*0.308825;
		}
		else if(oprt === "ma")
		{
			document.getElementById("result").value = us*4.349651;
		}
		else if(oprt === "me")
		{
			document.getElementById("result").value = us*23.2864;
		}
		else if(oprt === "mo")
		{
			document.getElementById("result").value = us*9.89;
		}
		else if(oprt === "np")
		{
			document.getElementById("result").value = us*121.48;
		}
		else if(oprt === "nz")
		{
			document.getElementById("result").value = us*1.62943;
		}
		else if(oprt === "nr")
		{
			document.getElementById("result").value = us*9.920577;
		}
		else if(oprt === "pk")
		{
			document.getElementById("result").value = us*160.6;
		}
		else if(oprt === "po")
		{
			document.getElementById("result").value = us*4.1331;
		}
		else if(oprt === "q")
		{
			document.getElementById("result").value = us*3.64;
		}
		else if(oprt === "rs")
		{
			document.getElementById("result").value = us*71.3073;
		}
		else if(oprt === "sa")
		{
			document.getElementById("result").value = us*3.75;
		}
		else if(oprt === "si")
		{
			document.getElementById("result").value = us*1.4135;
		}
		else if(oprt === "sf")
		{
			document.getElementById("result").value = us*17.9834;
		}
		else if(oprt === "sl")
		{
			document.getElementById("result").value = us*1.87079;
		}
		else if(oprt === "sw")
		{
			document.getElementById("result").value = us*9.5916;
		}
		else if(oprt === "st")
		{
			document.getElementById("result").value = us*0.6951;
		}
		else if(oprt === "th")
		{
			document.getElementById("result").value = us*31.8155;
		}
		else if(oprt === "tr")
		{
			document.getElementById("result").value = us*6.9733;
		}
		else if(oprt === "ua")
		{
			document.getElementById("result").value = us*3.67;
		}
		else if(oprt === "uk")
		{
			document.getElementById("result").value = us*0.8177366
		}
		
	}
	
		if(slct==="af")
		{	var af= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (af/76.7);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (af/76.7)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (af/76.7)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (af/76.7)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (af/76.7)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (af/76.7)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (af/76.7)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (af/76.7)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (af/76.7)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (af/76.7)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (af/76.7)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (af/76.7)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (af/76.7)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (af/76.7)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (af/76.7)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (af/76.7)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (af/76.7)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (af/76.7)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (af/76.7)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (af/76.7)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (af/76.7)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (af/76.7)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (af/76.7)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (af/76.7)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (af/76.7)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (af/76.7)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (af/76.7)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (af/76.7)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (af/76.7)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (af/76.7)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (af/76.7)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (af/76.7)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (af/76.7)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (af/76.7)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (af/76.7)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (af/76.7)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (af/76.7)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (af/76.7)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (af/76.7)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (af/76.7)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (af/76.7)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (af/76.7)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (af/76.7)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (af/76.7)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (af/76.7)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (af/76.7)*0.8177366
			}
			
		}
		
			if(slct==="ar")
		{	var ar= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (ar/68);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (ar/68)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (ar/68)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (ar/68)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (ar/68)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (ar/68)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (ar/68)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (ar/68)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (ar/68)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (ar/68)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (ar/68)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (ar/68)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (ar/68)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (ar/68)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (ar/68)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (ar/68)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (ar/68)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (ar/68)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (ar/68)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (ar/68)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (ar/68)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (ar/68)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (ar/68)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (ar/68)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (ar/68)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (ar/68)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (ar/68)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (ar/68)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (ar/68)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (ar/68)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (ar/68)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (ar/68)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (ar/68)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (ar/68)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (ar/68)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (ar/68)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (ar/68)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (ar/68)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (ar/68)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (ar/68)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (ar/68)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (ar/68)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (ar/68)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (ar/68)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (ar/68)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (ar/68)*0.8177366
			}
			
		}
		
			if(slct==="au")
		{	var au= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (au/1.5173);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (au/1.5173)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (au/1.5173)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (au/1.5173)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (au/1.5173)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (au/1.5173)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (au/1.5173)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (au/1.5173)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (au/1.5173)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (au/1.5173)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (au/1.5173)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (au/1.5173)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (au/1.5173)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (au/1.5173)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (au/1.5173)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (au/1.5173)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (au/1.5173)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (au/1.5173)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (au/1.5173)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (au/1.5173)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (au/1.5173)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (au/1.5173)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (au/1.5173)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (au/1.5173)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (au/1.5173)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (au/1.5173)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (au/1.5173)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (au/1.5173)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (au/1.5173)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (au/1.5173)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (au/1.5173)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (au/1.5173)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (au/1.5173)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (au/1.5173)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (au/1.5173)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (au/1.5173)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (au/1.5173)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (au/1.5173)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (au/1.5173)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (au/1.5173)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (au/1.5173)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (au/1.5173)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (au/1.5173)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (au/1.5173)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (au/1.5173)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (au/1.5173)*0.8177366
			}
			
		}
		
			if(slct==="at")
		{	var at= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (at/12.68);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (at/12.68)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (at/12.68)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (at/12.68)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (at/12.68)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (at/12.68)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (at/12.68)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (at/12.68)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (at/12.68)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (at/12.68)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (at/12.68)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (at/12.68)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (at/12.68)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (at/12.68)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (at/12.68)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (at/12.68)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (at/12.68)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (at/12.68)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (at/12.68)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (at/12.68)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (at/12.68)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (at/12.68)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (at/12.68)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (at/12.68)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (at/12.68)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (at/12.68)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (at/12.68)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (at/12.68)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (at/12.68)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (at/12.68)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (at/12.68)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (at/12.68)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (at/12.68)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (at/12.68)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (at/12.68)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (at/12.68)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (at/12.68)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (at/12.68)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (at/12.68)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (at/12.68)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (at/12.68)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (at/12.68)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (at/12.68)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (at/12.68)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (at/12.68)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (at/12.68)*0.8177366
			}
			
		}
		
			if(slct==="bh")
		{	var bh= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (bh/0.376);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (bh/0.376)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (bh/0.376)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (bh/0.376)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (bh/0.376)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (bh/0.376)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (bh/0.376)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (bh/0.376)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (bh/0.376)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (bh/0.376)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (bh/0.376)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (bh/0.376)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (bh/0.376)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (bh/0.376)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (bh/0.376)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (bh/0.376)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (bh/0.376)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (bh/0.376)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (bh/0.376)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (bh/0.376)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (bh/0.376)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (bh/0.376)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (bh/0.376)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (bh/0.376)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (bh/0.376)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (bh/0.376)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (bh/0.376)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (bh/0.376)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (bh/0.376)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (bh/0.376)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (bh/0.376)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (bh/0.376)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (bh/0.376)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (bh/0.376)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (bh/0.376)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (bh/0.376)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (bh/0.376)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (bh/0.376)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (bh/0.376)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (bh/0.376)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (bh/0.376)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (bh/0.376)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (bh/0.376)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (bh/0.376)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (bh/0.376)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (bh/0.376)*0.8177366
			}
			
		}
		
			if(slct==="bn")
		{	var bn= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (bn/85.03);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (bn/85.03)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (bn/85.03)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (bn/85.03)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (bn/85.03)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (bn/85.03)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (bn/85.03)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (bn/85.03)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (bn/85.03)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (bn/85.03)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (bn/85.03)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (bn/85.03)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (bn/85.03)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (bn/85.03)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (bn/85.03)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (bn/85.03)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (bn/85.03)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (bn/85.03)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (bn/85.03)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (bn/85.03)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (bn/85.03)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (bn/85.03)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (bn/85.03)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (bn/85.03)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (bn/85.03)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (bn/85.03)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (bn/85.03)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (bn/85.03)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (bn/85.03)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (bn/85.03)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (bn/85.03)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (bn/85.03)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (bn/85.03)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (bn/85.03)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (bn/85.03)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (bn/85.03)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (bn/85.03)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (bn/85.03)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (bn/85.03)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (bn/85.03)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (bn/85.03)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (bn/85.03)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (bn/85.03)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (bn/85.03)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (bn/85.03)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (bn/85.03)*0.8177366
			}
			
		}
		
			if(slct==="bt")
		{	var bt= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (bt/0.00011);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (bt/0.00011)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (bt/0.00011)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (bt/0.00011)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (bt/0.00011)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (bt/0.00011)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (bt/0.00011)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (bt/0.00011)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (bt/0.00011)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (bt/0.00011)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (bt/0.00011)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (bt/0.00011)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (bt/0.00011)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (bt/0.00011)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (bt/0.00011)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (bt/0.00011)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (bt/0.00011)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (bt/0.00011)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (bt/0.00011)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (bt/0.00011)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (bt/0.00011)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (bt/0.00011)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (bt/0.00011)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (bt/0.00011)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (bt/0.00011)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (bt/0.00011)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (bt/0.00011)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (bt/0.00011)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (bt/0.00011)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (bt/0.00011)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (bt/0.00011)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (bt/0.00011)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (bt/0.00011)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (bt/0.00011)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (bt/0.00011)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (bt/0.00011)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (bt/0.00011)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (bt/0.00011)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (bt/0.00011)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (bt/0.00011)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (bt/0.00011)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (bt/0.00011)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (bt/0.00011)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (bt/0.00011)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (bt/0.00011)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (bt/0.00011)*0.8177366
			}
			
		}
		
			if(slct==="br")
		{	var br= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (br/5.710712);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (br/5.710712)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (br/5.710712)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (br/5.710712)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (br/5.710712)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (br/5.710712)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (br/5.710712)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (br/5.710712)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (br/5.710712)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (br/5.710712)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (br/5.710712)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (br/5.710712)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (br/5.710712)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (br/5.710712)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (br/5.710712)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (br/5.710712)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (br/5.710712)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (br/5.710712)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (br/5.710712)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (br/5.710712)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (br/5.710712)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (br/5.710712)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (br/5.710712)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (br/5.710712)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (br/5.710712)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (br/5.710712)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (br/5.710712)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (br/5.710712)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (br/5.710712)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (br/5.710712)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (br/5.710712)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (br/5.710712)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (br/5.710712)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (br/5.710712)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (br/5.710712)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (br/5.710712)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (br/5.710712)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (br/5.710712)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (br/5.710712)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (br/5.710712)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (br/5.710712)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (br/5.710712)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (br/5.710712)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (br/5.710712)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (br/5.710712)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (br/5.710712)*0.8177366
			}
			
		}
		
			if(slct==="bu")
		{	var bu= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (bu/1.781542);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (bu/1.781542)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (bu/1.781542)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (bu/1.781542)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (bu/1.781542)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (bu/1.781542)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (bu/1.781542)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (bu/1.781542)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (bu/1.781542)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (bu/1.781542)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (bu/1.781542)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (bu/1.781542)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (bu/1.781542)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (bu/1.781542)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (bu/1.781542)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (bu/1.781542)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (bu/1.781542)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (bu/1.781542)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (bu/1.781542)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (bu/1.781542)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (bu/1.781542)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (bu/1.781542)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (bu/1.781542)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (bu/1.781542)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (bu/1.781542)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (bu/1.781542)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (bu/1.781542)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (bu/1.781542)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (bu/1.781542)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (bu/1.781542)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (bu/1.781542)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (bu/1.781542)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (bu/1.781542)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (bu/1.781542)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (bu/1.781542)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (bu/1.781542)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (bu/1.781542)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (bu/1.781542)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (bu/1.781542)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (bu/1.781542)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (bu/1.781542)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (bu/1.781542)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (bu/1.781542)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (bu/1.781542)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (bu/1.781542)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (bu/1.781542)*0.8177366
			}
			
		}
		
			if(slct==="cn")
		{	var cn= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (cn/1.391687);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (cn/1.391687)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (cn/1.391687)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (cn/1.391687)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (cn/1.391687)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (cn/1.391687)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (cn/1.391687)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (cn/1.391687)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (cn/1.391687)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (cn/1.391687)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (cn/1.391687)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (cn/1.391687)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (cn/1.391687)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (cn/1.391687)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (cn/1.391687)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (cn/1.391687)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (cn/1.391687)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (cn/1.391687)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (cn/1.391687)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (cn/1.391687)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (cn/1.391687)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (cn/1.391687)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (cn/1.391687)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (cn/1.391687)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (cn/1.391687)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (cn/1.391687)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (cn/1.391687)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (cn/1.391687)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (cn/1.391687)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (cn/1.391687)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (cn/1.391687)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (cn/1.391687)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (cn/1.391687)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (cn/1.391687)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (cn/1.391687)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (cn/1.391687)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (cn/1.391687)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (cn/1.391687)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (cn/1.391687)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (cn/1.391687)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (cn/1.391687)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (cn/1.391687)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (cn/1.391687)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (cn/1.391687)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (cn/1.391687)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (cn/1.391687)*0.8177366
			}
			
		}
		
			if(slct==="ch")
		{	var ch= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (ch/7.09284);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (ch/7.09284)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (ch/7.09284)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (ch/7.09284)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (ch/7.09284)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (ch/7.09284)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (ch/7.09284)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (ch/7.09284)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (ch/7.09284)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (ch/7.09284)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (ch/7.09284)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (ch/7.09284)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (ch/7.09284)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (ch/7.09284)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (ch/7.09284)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (ch/7.09284)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (ch/7.09284)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (ch/7.09284)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (ch/7.09284)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (ch/7.09284)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (ch/7.09284)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (ch/7.09284)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (ch/7.09284)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (ch/7.09284)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (ch/7.09284)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (ch/7.09284)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (ch/7.09284)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (ch/7.09284)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (ch/7.09284)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (ch/7.09284)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (ch/7.09284)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (ch/7.09284)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (ch/7.09284)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (ch/7.09284)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (ch/7.09284)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (ch/7.09284)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (ch/7.09284)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (ch/7.09284)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (ch/7.09284)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (ch/7.09284)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (ch/7.09284)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (ch/7.09284)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (ch/7.09284)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (ch/7.09284)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (ch/7.09284)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (ch/7.09284)*0.8177366
			}
			
		}
		
			if(slct==="co")
		{	var co= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (co/3808.712171);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (co/3808.712171)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (co/3808.712171)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (co/3808.712171)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (co/3808.712171)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (co/3808.712171)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (co/3808.712171)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (co/3808.712171)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (co/3808.712171)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (co/3808.712171)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (co/3808.712171)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (co/3808.712171)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (co/3808.712171)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (co/3808.712171)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (co/3808.712171)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (co/3808.712171)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (co/3808.712171)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (co/3808.712171)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (co/3808.712171)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (co/3808.712171)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (co/3808.712171)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (co/3808.712171)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (co/3808.712171)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (co/3808.712171)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (co/3808.712171)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (co/3808.712171)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (co/3808.712171)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (co/3808.712171)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (co/3808.712171)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (co/3808.712171)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (co/3808.712171)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (co/3808.712171)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (co/3808.712171)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (co/3808.712171)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (co/3808.712171)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (co/3808.712171)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (co/3808.712171)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (co/3808.712171)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (co/3808.712171)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (co/3808.712171)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (co/3808.712171)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (co/3808.712171)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (co/3808.712171)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (co/3808.712171)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (co/3808.712171)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (co/3808.712171)*0.8177366
			}
			
		}
		
			if(slct==="cr")
		{	var cr= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (cr/6.901383);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (cr/6.901383)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (cr/6.901383)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (cr/6.901383)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (cr/6.901383)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (cr/6.901383)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (cr/6.901383)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (cr/6.901383)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (cr/6.901383)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (cr/6.901383)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (cr/6.901383)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (cr/6.901383)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (cr/6.901383)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (cr/6.901383)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (cr/6.901383)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (cr/6.901383)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (cr/6.901383)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (cr/6.901383)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (cr/6.901383)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (cr/6.901383)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (cr/6.901383)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (cr/6.901383)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (cr/6.901383)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (cr/6.901383)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (cr/6.901383)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (cr/6.901383)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (cr/6.901383)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (cr/6.901383)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (cr/6.901383)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (cr/6.901383)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (cr/6.901383)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (cr/6.901383)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (cr/6.901383)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (cr/6.901383)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (cr/6.901383)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (cr/6.901383)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (cr/6.901383)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (cr/6.901383)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (cr/6.901383)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (cr/6.901383)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (cr/6.901383)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (cr/6.901383)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (cr/6.901383)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (cr/6.901383)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (cr/6.901383)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (cr/6.901383)*0.8177366
			}
			
		}
		
			if(slct==="dn")
		{	var dn= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (dn/6.792);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (dn/6.792)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (dn/6.792)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (dn/6.792)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (dn/6.792)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (dn/6.792)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (dn/6.792)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (dn/6.792)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (dn/6.792)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (dn/6.792)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (dn/6.792)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (dn/6.792)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (dn/6.792)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (dn/6.792)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (dn/6.792)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (dn/6.792)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (dn/6.792)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (dn/6.792)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (dn/6.792)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (dn/6.792)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (dn/6.792)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (dn/6.792)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (dn/6.792)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (dn/6.792)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (dn/6.792)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (dn/6.792)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (dn/6.792)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (dn/6.792)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (dn/6.792)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (dn/6.792)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (dn/6.792)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (dn/6.792)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (dn/6.792)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (dn/6.792)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (dn/6.792)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (dn/6.792)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (dn/6.792)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (dn/6.792)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (dn/6.792)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (dn/6.792)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (dn/6.792)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (dn/6.792)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (dn/6.792)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (dn/6.792)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (dn/6.792)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (dn/6.792)*0.8177366
			}
			
		}
		
			if(slct==="eg")
		{	var eg= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (eg/15.86);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (eg/15.86)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (eg/15.86)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (eg/15.86)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (eg/15.86)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (eg/15.86)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (eg/15.86)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (eg/15.86)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (eg/15.86)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (eg/15.86)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (eg/15.86)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (eg/15.86)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (eg/15.86)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (eg/15.86)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (eg/15.86)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (eg/15.86)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (eg/15.86)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (eg/15.86)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (eg/15.86)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (eg/15.86)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (eg/15.86)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (eg/15.86)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (eg/15.86)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (eg/15.86)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (eg/15.86)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (eg/15.86)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (eg/15.86)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (eg/15.86)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (eg/15.86)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (eg/15.86)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (eg/15.86)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (eg/15.86)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (eg/15.86)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (eg/15.86)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (eg/15.86)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (eg/15.86)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (eg/15.86)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (eg/15.86)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (eg/15.86)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (eg/15.86)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (eg/15.86)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (eg/15.86)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (eg/15.86)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (eg/15.86)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (eg/15.86)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (eg/15.86)*0.8177366
			}
			
		}
		
			if(slct==="eu")
		{	var eu= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (eu/0.910888);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (eu/0.910888)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (eu/0.910888)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (eu/0.910888)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (eu/0.910888)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (eu/0.910888)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (eu/0.910888)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (eu/0.910888)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (eu/0.910888)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (eu/0.910888)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (eu/0.910888)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (eu/0.910888)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (eu/0.910888)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (eu/0.910888)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (eu/0.910888)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (eu/0.910888)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (eu/0.910888)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (eu/0.910888)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (eu/0.910888)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (eu/0.910888)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (eu/0.910888)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (eu/0.910888)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (eu/0.910888)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (eu/0.910888)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (eu/0.910888)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (eu/0.910888)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (eu/0.910888)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (eu/0.910888)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (eu/0.910888)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (eu/0.910888)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (eu/0.910888)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (eu/0.910888)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (eu/0.910888)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (eu/0.910888)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (eu/0.910888)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (eu/0.910888)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (eu/0.910888)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (eu/0.910888)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (eu/0.910888)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (eu/0.910888)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (eu/0.910888)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (eu/0.910888)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (eu/0.910888)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (eu/0.910888)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (eu/0.910888)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (eu/0.910888)*0.8177366
			}
			
		}
		
			if(slct==="hn")
		{	var hn= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (hn/318.540557);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (hn/318.540557)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (hn/318.540557)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (hn/318.540557)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (hn/318.540557)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (hn/318.540557)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (hn/318.540557)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (hn/318.540557)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (hn/318.540557)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (hn/318.540557)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (hn/318.540557)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (hn/318.540557)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (hn/318.540557)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (hn/318.540557)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (hn/318.540557)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (hn/318.540557)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (hn/318.540557)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (hn/318.540557)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (hn/318.540557)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (hn/318.540557)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (hn/318.540557)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (hn/318.540557)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (hn/318.540557)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (hn/318.540557)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (hn/318.540557)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (hn/318.540557)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (hn/318.540557)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (hn/318.540557)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (hn/318.540557)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (hn/318.540557)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (hn/318.540557)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (hn/318.540557)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (hn/318.540557)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (hn/318.540557)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (hn/318.540557)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (hn/318.540557)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (hn/318.540557)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (hn/318.540557)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (hn/318.540557)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (hn/318.540557)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (hn/318.540557)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (hn/318.540557)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (hn/318.540557)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (hn/318.540557)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (hn/318.540557)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (hn/318.540557)*0.8177366
			}
			
		}
		
			if(slct==="ia")
		{	var ia= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (ia/75.572078);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (ia/75.572078)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (ia/75.572078)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (ia/75.572078)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (ia/75.572078)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (ia/75.572078)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (ia/75.572078)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (ia/75.572078)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (ia/75.572078)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (ia/75.572078)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (ia/75.572078)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (ia/75.572078)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (ia/75.572078)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (ia/75.572078)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (ia/75.572078)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (ia/75.572078)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (ia/75.572078)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (ia/75.572078)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (ia/75.572078)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (ia/75.572078)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (ia/75.572078)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (ia/75.572078)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (ia/75.572078)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (ia/75.572078)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (ia/75.572078)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (ia/75.572078)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (ia/75.572078)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (ia/75.572078)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (ia/75.572078)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (ia/75.572078)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (ia/75.572078)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (ia/75.572078)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (ia/75.572078)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (ia/75.572078)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (ia/75.572078)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (ia/75.572078)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (ia/75.572078)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (ia/75.572078)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (ia/75.572078)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (ia/75.572078)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (ia/75.572078)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (ia/75.572078)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (ia/75.572078)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (ia/75.572078)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (ia/75.572078)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (ia/75.572078)*0.8177366
			}
			
		}
		
			if(slct==="id")
		{	var id= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (id/14717.7945);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (id/14717.7945)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (id/14717.7945)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (id/14717.7945)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (id/14717.7945)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (id/14717.7945)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (id/14717.7945)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (id/14717.7945)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (id/14717.7945)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (id/14717.7945)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (id/14717.7945)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (id/14717.7945)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (id/14717.7945)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (id/14717.7945)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (id/14717.7945)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (id/14717.7945)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (id/14717.7945)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (id/14717.7945)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (id/14717.7945)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (id/14717.7945)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (id/14717.7945)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (id/14717.7945)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (id/14717.7945)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (id/14717.7945)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (id/14717.7945)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (id/14717.7945)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (id/14717.7945)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (id/14717.7945)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (id/14717.7945)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (id/14717.7945)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (id/14717.7945)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (id/14717.7945)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (id/14717.7945)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (id/14717.7945)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (id/14717.7945)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (id/14717.7945)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (id/14717.7945)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (id/14717.7945)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (id/14717.7945)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (id/14717.7945)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (id/14717.7945)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (id/14717.7945)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (id/14717.7945)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (id/14717.7945)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (id/14717.7945)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (id/14717.7945)*0.8177366
			}
			
		}
		
			if(slct==="ir")
		{	var ir= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (ir/41823.127645 );
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (ir/41823.127645 )*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (ir/41823.127645 )*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (ir/41823.127645 )*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (ir/41823.127645 )*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (ir/41823.127645 )*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (ir/41823.127645 )*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (ir/41823.127645 )*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (ir/41823.127645 )*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (ir/41823.127645 )*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (ir/41823.127645 )*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (ir/41823.127645 )*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (ir/41823.127645 )*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (ir/41823.127645 )*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (ir/41823.127645 )*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (ir/41823.127645 )*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (ir/41823.127645 )*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (ir/41823.127645 )*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (ir/41823.127645 )*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (ir/41823.127645 )*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (ir/41823.127645 )*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (ir/41823.127645 )*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (ir/41823.127645 )*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (ir/41823.127645 )*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (ir/41823.127645 )*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (ir/41823.127645 )*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (ir/41823.127645 )*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (ir/41823.127645 )*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (ir/41823.127645 )*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (ir/41823.127645 )*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (ir/41823.127645 )*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (ir/41823.127645 )*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (ir/41823.127645 )*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (ir/41823.127645 )*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (ir/41823.127645 )*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (ir/41823.127645 )*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (ir/41823.127645 )*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (ir/41823.127645 )*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (ir/41823.127645 )*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (ir/41823.127645 )*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (ir/41823.127645 )*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (ir/41823.127645 )*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (ir/41823.127645 )*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (ir/41823.127645 )*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (ir/41823.127645 )*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (ir/41823.127645 )*0.8177366
			}
			
		}
		
			if(slct==="iq")
		{	var iq= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (iq/1190);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (iq/1190)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (iq/1190)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (iq/1190)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (iq/1190)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (iq/1190)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (iq/1190)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (iq/1190)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (iq/1190)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (iq/1190)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (iq/1190)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (iq/1190)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (iq/1190)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (iq/1190)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (iq/1190)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (iq/1190)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (iq/1190)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (iq/1190)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (iq/1190)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (iq/1190)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (iq/1190)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (iq/1190)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (iq/1190)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (iq/1190)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (iq/1190)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (iq/1190)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (iq/1190)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (iq/1190)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (iq/1190)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (iq/1190)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (iq/1190)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (iq/1190)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (iq/1190)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (iq/1190)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (iq/1190)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (iq/1190)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (iq/1190)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (iq/1190)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (iq/1190)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (iq/1190)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (iq/1190)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (iq/1190)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (iq/1190)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (iq/1190)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (iq/1190)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (iq/1190)*0.8177366
			}
			
		}
		
			if(slct==="is")
		{	var is= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (is/3.507971);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (is/3.507971)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (is/3.507971)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (is/3.507971)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (is/3.507971)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (is/3.507971)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (is/3.507971)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (is/3.507971)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (is/3.507971)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (is/3.507971)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (is/3.507971)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (is/3.507971)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (is/3.507971)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (is/3.507971)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (is/3.507971)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (is/3.507971)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (is/3.507971)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (is/3.507971)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (is/3.507971)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (is/3.507971)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (is/3.507971)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (is/3.507971)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (is/3.507971)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (is/3.507971)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (is/3.507971)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (is/3.507971)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (is/3.507971)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (is/3.507971)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (is/3.507971)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (is/3.507971)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (is/3.507971)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (is/3.507971)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (is/3.507971)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (is/3.507971)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (is/3.507971)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (is/3.507971)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (is/3.507971)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (is/3.507971)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (is/3.507971)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (is/3.507971)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (is/3.507971)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (is/3.507971)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (is/3.507971)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (is/3.507971)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (is/3.507971)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (is/3.507971)*0.8177366
			}
			
		}
		
			if(slct==="j")
		{	var j= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (j/107.534553);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (j/107.534553)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (j/107.534553)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (j/107.534553)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (j/107.534553)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (j/107.534553)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (j/107.534553)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (j/107.534553)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (j/107.534553)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (j/107.534553)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (j/107.534553)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (j/107.534553)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (j/107.534553)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (j/107.534553)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (j/107.534553)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (j/107.534553)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (j/107.534553)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (j/107.534553)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (j/107.534553)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (j/107.534553)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (j/107.534553)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (j/107.534553)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (j/107.534553)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (j/107.534553)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (j/107.534553)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (j/107.534553)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (j/107.534553)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (j/107.534553)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (j/107.534553)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (j/107.534553)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (j/107.534553)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (j/107.534553)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (j/107.534553)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (j/107.534553)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (j/107.534553)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (j/107.534553)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (j/107.534553)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (j/107.534553)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (j/107.534553)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (j/107.534553)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (j/107.534553)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (j/107.534553)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (j/107.534553)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (j/107.534553)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (j/107.534553)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (j/107.534553)*0.8177366
			}
			
		}
		
			if(slct==="k")
		{	var k= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (k/0.308825);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (k/0.308825)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (k/0.308825)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (k/0.308825)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (k/0.308825)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (k/0.308825)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (k/0.308825)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (k/0.308825)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (k/0.308825)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (k/0.308825)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (k/0.308825)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (k/0.308825)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (k/0.308825)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (k/0.308825)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (k/0.308825)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (k/0.308825)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (k/0.308825)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (k/0.308825)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (k/0.308825)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (k/0.308825)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (k/0.308825)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (k/0.308825)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (k/0.308825)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (k/0.308825)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (k/0.308825)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (k/0.308825)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (k/0.308825)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (k/0.308825)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (k/0.308825)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (k/0.308825)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (k/0.308825)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (k/0.308825)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (k/0.308825)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (k/0.308825)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (k/0.308825)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (k/0.308825)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (k/0.308825)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (k/0.308825)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (k/0.308825)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (k/0.308825)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (k/0.308825)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (k/0.308825)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (k/0.308825)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (k/0.308825)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (k/0.308825)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (k/0.308825)*0.8177366
			}
			
		}
		
			if(slct==="ma")
		{	var ma= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (ma/4.349651);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (ma/4.349651)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (ma/4.349651)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (ma/4.349651)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (ma/4.349651)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (ma/4.349651)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (ma/4.349651)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (ma/4.349651)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (ma/4.349651)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (ma/4.349651)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (ma/4.349651)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (ma/4.349651)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (ma/4.349651)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (ma/4.349651)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (ma/4.349651)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (ma/4.349651)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (ma/4.349651)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (ma/4.349651)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (ma/4.349651)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (ma/4.349651)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (ma/4.349651)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (ma/4.349651)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (ma/4.349651)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (ma/4.349651)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (ma/4.349651)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (ma/4.349651)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (ma/4.349651)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (ma/4.349651)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (ma/4.349651)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (ma/4.349651)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (ma/4.349651)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (ma/4.349651)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (ma/4.349651)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (ma/4.349651)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (ma/4.349651)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (ma/4.349651)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (ma/4.349651)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (ma/4.349651)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (ma/4.349651)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (ma/4.349651)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (ma/4.349651)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (ma/4.349651)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (ma/4.349651)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (ma/4.349651)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (ma/4.349651)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (ma/4.349651)*0.8177366
			}
			
		}
		
			if(slct==="me")
		{	var me= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (me/23.286476);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (me/23.286476)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (me/23.286476)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (me/23.286476)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (me/23.286476)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (me/23.286476)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (me/23.286476)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (me/23.286476)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (me/23.286476)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (me/23.286476)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (me/23.286476)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (me/23.286476)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (me/23.286476)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (me/23.286476)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (me/23.286476)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (me/23.286476)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (me/23.286476)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (me/23.286476)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (me/23.286476)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (me/23.286476)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (me/23.286476)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (me/23.286476)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (me/23.286476)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (me/23.286476)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (me/23.286476)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (me/23.286476)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (me/23.286476)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (me/23.286476)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (me/23.286476)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (me/23.286476)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (me/23.286476)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (me/23.286476)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (me/23.286476)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (me/23.286476)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (me/23.286476)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (me/23.286476)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (me/23.286476)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (me/23.286476)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (me/23.286476)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (me/23.286476)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (me/23.286476)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (me/23.286476)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (me/23.286476)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (me/23.286476)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (me/23.286476)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (me/23.286476)*0.8177366
			}
			
		}
		
			if(slct==="mo")
		{	var mo= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (mo/9.89);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (mo/9.89)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (mo/9.89)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (mo/9.89)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (mo/9.89)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (mo/9.89)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (mo/9.89)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (mo/9.89)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (mo/9.89)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (mo/9.89)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (mo/9.89)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (mo/9.89)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (mo/9.89)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (mo/9.89)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (mo/9.89)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (mo/9.89)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (mo/9.89)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (mo/9.89)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (mo/9.89)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (mo/9.89)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (mo/9.89)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (mo/9.89)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (mo/9.89)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (mo/9.89)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (mo/9.89)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (mo/9.89)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (mo/9.89)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (mo/9.89)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (mo/9.89)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (mo/9.89)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (mo/9.89)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (mo/9.89)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (mo/9.89)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (mo/9.89)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (mo/9.89)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (mo/9.89)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (mo/9.89)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (mo/9.89)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (mo/9.89)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (mo/9.89)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (mo/9.89)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (mo/9.89)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (mo/9.89)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (mo/9.89)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (mo/9.89)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (mo/9.89)*0.8177366
			}
			
		}
		
			if(slct==="np")
		{	var np= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (np/121.4821);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (np/121.4821)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (np/121.4821)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (np/121.4821)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (np/121.4821)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (np/121.4821)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (np/121.4821)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (np/121.4821)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (np/121.4821)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (np/121.4821)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (np/121.4821)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (np/121.4821)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (np/121.4821)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (np/121.4821)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (np/121.4821)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (np/121.4821)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (np/121.4821)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (np/121.4821)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (np/121.4821)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (np/121.4821)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (np/121.4821)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (np/121.4821)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (np/121.4821)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (np/121.4821)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (np/121.4821)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (np/121.4821)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (np/121.4821)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (np/121.4821)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (np/121.4821)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (np/121.4821)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (np/121.4821)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (np/121.4821)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (np/121.4821)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (np/121.4821)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (np/121.4821)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (np/121.4821)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (np/121.4821)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (np/121.4821)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (np/121.4821)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (np/121.4821)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (np/121.4821)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (np/121.4821)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (np/121.4821)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (np/121.4821)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (np/121.4821)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (np/121.4821)*0.8177366
			}
			
		}
		
			if(slct==="nz")
		{	var nz= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (nz/1.6294);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (nz/1.6294)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (nz/1.6294)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (nz/1.6294)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (nz/1.6294)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (nz/1.6294)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (nz/1.6294)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (nz/1.6294)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (nz/1.6294)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (nz/1.6294)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (nz/1.6294)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (nz/1.6294)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (nz/1.6294)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (nz/1.6294)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (nz/1.6294)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (nz/1.6294)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (nz/1.6294)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (nz/1.6294)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (nz/1.6294)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (nz/1.6294)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (nz/1.6294)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (nz/1.6294)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (nz/1.6294)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (nz/1.6294)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (nz/1.6294)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (nz/1.6294)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (nz/1.6294)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (nz/1.6294)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (nz/1.6294)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (nz/1.6294)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (nz/1.6294)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (nz/1.6294)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (nz/1.6294)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (nz/1.6294)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (nz/1.6294)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (nz/1.6294)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (nz/1.6294)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (nz/1.6294)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (nz/1.6294)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (nz/1.6294)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (nz/1.6294)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (nz/1.6294)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (nz/1.6294)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (nz/1.6294)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (nz/1.6294)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (nz/1.6294)*0.8177366
			}
			
		}
		
			if(slct==="nr")
		{	var nr= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (nr/9.920577);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (nr/9.920577)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (nr/9.920577)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (nr/9.920577)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (nr/9.920577)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (nr/9.920577)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (nr/9.920577)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (nr/9.920577)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (nr/9.920577)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (nr/9.920577)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (nr/9.920577)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (nr/9.920577)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (nr/9.920577)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (nr/9.920577)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (nr/9.920577)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (nr/9.920577)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (nr/9.920577)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (nr/9.920577)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (nr/9.920577)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (nr/9.920577)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (nr/9.920577)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (nr/9.920577)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (nr/9.920577)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (nr/9.920577)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (nr/9.920577)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (nr/9.920577)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (nr/9.920577)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (nr/9.920577)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (nr/9.920577)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (nr/9.920577)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (nr/9.920577)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (nr/9.920577)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (nr/9.920577)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (nr/9.920577)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (nr/9.920577)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (nr/9.920577)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (nr/9.920577)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (nr/9.920577)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (nr/9.920577)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (nr/9.920577)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (nr/9.920577)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (nr/9.920577)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (nr/9.920577)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (nr/9.920577)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (nr/9.920577)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (nr/9.920577)*0.8177366
			}
			
		}
		
			if(slct==="pk")
		{	var pk= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (pk/160.6);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (pk/160.6)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (pk/160.6)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (pk/160.6)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (pk/160.6)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (pk/160.6)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (pk/160.6)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (pk/160.6)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (pk/160.6)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (pk/160.6)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (pk/160.6)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (pk/160.6)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (pk/160.6)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (pk/160.6)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (pk/160.6)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (pk/160.6)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (pk/160.6)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (pk/160.6)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (pk/160.6)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (pk/160.6)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (pk/160.6)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (pk/160.6)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (pk/160.6)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (pk/160.6)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (pk/160.6)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (pk/160.6)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (pk/160.6)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (pk/160.6)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (pk/160.6)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (pk/160.6)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (pk/160.6)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (pk/160.6)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (pk/160.6)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (pk/160.6)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (pk/160.6)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (pk/160.6)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (pk/160.6)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (pk/160.6)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (pk/160.6)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (pk/160.6)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (pk/160.6)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (pk/160.6)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (pk/160.6)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (pk/160.6)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (pk/160.6)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (pk/160.6)*0.8177366
			}
			
		}
		
			if(slct==="po")
		{	var po= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (po/4.133157);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (po/4.133157)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (po/4.133157)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (po/4.133157)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (po/4.133157)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (po/4.133157)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (po/4.133157)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (po/4.133157)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (po/4.133157)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (po/4.133157)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (po/4.133157)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (po/4.133157)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (po/4.133157)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (po/4.133157)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (po/4.133157)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (po/4.133157)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (po/4.133157)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (po/4.133157)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (po/4.133157)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (po/4.133157)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (po/4.133157)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (po/4.133157)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (po/4.133157)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (po/4.133157)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (po/4.133157)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (po/4.133157)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (po/4.133157)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (po/4.133157)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (po/4.133157)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (po/4.133157)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (po/4.133157)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (po/4.133157)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (po/4.133157)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (po/4.133157)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (po/4.133157)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (po/4.133157)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (po/4.133157)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (po/4.133157)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (po/4.133157)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (po/4.133157)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (po/4.133157)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (po/4.133157)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (po/4.133157)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (po/4.133157)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (po/4.133157)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (po/4.133157)*0.8177366
			}
			
		}
		
			if(slct==="q")
		{	var q= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (q/3.64);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (q/3.64)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (q/3.64)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (q/3.64)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (q/3.64)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (q/3.64)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (q/3.64)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (q/3.64)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (q/3.64)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (q/3.64)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (q/3.64)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (q/3.64)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (q/3.64)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (q/3.64)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (q/3.64)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (q/3.64)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (q/3.64)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (q/3.64)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (q/3.64)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (q/3.64)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (q/3.64)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (q/3.64)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (q/3.64)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (q/3.64)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (q/3.64)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (q/3.64)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (q/3.64)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (q/3.64)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (q/3.64)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (q/3.64)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (q/3.64)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (q/3.64)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (q/3.64)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (q/3.64)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (q/3.64)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (q/3.64)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (q/3.64)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (q/3.64)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (q/3.64)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (q/3.64)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (q/3.64)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (q/3.64)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (q/3.64)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (q/3.64)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (q/3.64)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (q/3.64)*0.8177366
			}
			
		}
		
			if(slct==="rs")
		{	var rs= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (rs/71.3073);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (rs/71.3073)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (rs/71.3073)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (rs/71.3073)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (rs/71.3073)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (rs/71.3073)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (rs/71.3073)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (rs/71.3073)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (rs/71.3073)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (rs/71.3073)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (rs/71.3073)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (rs/71.3073)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (rs/71.3073)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (rs/71.3073)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (rs/71.3073)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (rs/71.3073)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (rs/71.3073)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (rs/71.3073)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (rs/71.3073)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (rs/71.3073)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (rs/71.3073)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (rs/71.3073)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (rs/71.3073)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (rs/71.3073)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (rs/71.3073)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (rs/71.3073)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (rs/71.3073)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (rs/71.3073)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (rs/71.3073)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (rs/71.3073)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (rs/71.3073)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (rs/71.3073)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (rs/71.3073)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (rs/71.3073)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (rs/71.3073)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (rs/71.3073)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (rs/71.3073)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (rs/71.3073)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (rs/71.3073)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (rs/71.3073)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (rs/71.3073)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (rs/71.3073)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (rs/71.3073)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (rs/71.3073)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (rs/71.3073)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (rs/71.3073)*0.8177366
			}
			
		}
		
			if(slct==="sa")
		{	var sa= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (sa/3.75);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (sa/3.75)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (sa/3.75)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (sa/3.75)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (sa/3.75)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (sa/3.75)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (sa/3.75)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (sa/3.75)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (sa/3.75)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (sa/3.75)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (sa/3.75)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (sa/3.75)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (sa/3.75)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (sa/3.75)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (sa/3.75)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (sa/3.75)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (sa/3.75)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (sa/3.75)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (sa/3.75)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (sa/3.75)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (sa/3.75)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (sa/3.75)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (sa/3.75)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (sa/3.75)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (sa/3.75)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (sa/3.75)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (sa/3.75)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (sa/3.75)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (sa/3.75)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (sa/3.75)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (sa/3.75)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (sa/3.75)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (sa/3.75)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (sa/3.75)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (sa/3.75)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (sa/3.75)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (sa/3.75)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (sa/3.75)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (sa/3.75)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (sa/3.75)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (sa/3.75)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (sa/3.75)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (sa/3.75)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (sa/3.75)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (sa/3.75)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (sa/3.75)*0.8177366
			}
			
		}
		
			if(slct==="si")
		{	var si= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (si/1.413511);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (si/1.413511)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (si/1.413511)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (si/1.413511)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (si/1.413511)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (si/1.413511)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (si/1.413511)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (si/1.413511)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (si/1.413511)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (si/1.413511)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (si/1.413511)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (si/1.413511)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (si/1.413511)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (si/1.413511)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (si/1.413511)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (si/1.413511)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (si/1.413511)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (si/1.413511)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (si/1.413511)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (si/1.413511)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (si/1.413511)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (si/1.413511)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (si/1.413511)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (si/1.413511)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (si/1.413511)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (si/1.413511)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (si/1.413511)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (si/1.413511)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (si/1.413511)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (si/1.413511)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (si/1.413511)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (si/1.413511)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (si/1.413511)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (si/1.413511)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (si/1.413511)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (si/1.413511)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (si/1.413511)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (si/1.413511)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (si/1.413511)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (si/1.413511)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (si/1.413511)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (si/1.413511)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (si/1.413511)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (si/1.413511)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (si/1.413511)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (si/1.413511)*0.8177366
			}
			
		}
		
			if(slct==="sf")
		{	var sf= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (sf/17.9834);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (sf/17.9834)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (sf/17.9834)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (sf/17.9834)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (sf/17.9834)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (sf/17.9834)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (sf/17.9834)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (sf/17.9834)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (sf/17.9834)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (sf/17.9834)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (sf/17.9834)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (sf/17.9834)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (sf/17.9834)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (sf/17.9834)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (sf/17.9834)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (sf/17.9834)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (sf/17.9834)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (sf/17.9834)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (sf/17.9834)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (sf/17.9834)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (sf/17.9834)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (sf/17.9834)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (sf/17.9834)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (sf/17.9834)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (sf/17.9834)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (sf/17.9834)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (sf/17.9834)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (sf/17.9834)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (sf/17.9834)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (sf/17.9834)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (sf/17.9834)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (sf/17.9834)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (sf/17.9834)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (sf/17.9834)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (sf/17.9834)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (sf/17.9834)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (sf/17.9834)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (sf/17.9834)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (sf/17.9834)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (sf/17.9834)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (sf/17.9834)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (sf/17.9834)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (sf/17.9834)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (sf/17.9834)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (sf/17.9834)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (sf/17.9834)*0.8177366
			}
			
		}
		
			if(slct==="sk")
		{	var sk= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (sk/1227.076);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (sk/1227.076)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (sk/1227.076)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (sk/1227.076)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (sk/1227.076)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (sk/1227.076)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (sk/1227.076)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (sk/1227.076)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (sk/1227.076)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (sk/1227.076)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (sk/1227.076)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (sk/1227.076)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (sk/1227.076)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (sk/1227.076)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (sk/1227.076)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (sk/1227.076)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (sk/1227.076)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (sk/1227.076)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (sk/1227.076)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (sk/1227.076)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (sk/1227.076)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (sk/1227.076)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (sk/1227.076)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (sk/1227.076)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (sk/1227.076)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (sk/1227.076)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (sk/1227.076)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (sk/1227.076)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (sk/1227.076)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (sk/1227.076)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (sk/1227.076)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (sk/1227.076)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (sk/1227.076)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (sk/1227.076)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (sk/1227.076)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (sk/1227.076)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (sk/1227.076)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (sk/1227.076)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (sk/1227.076)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (sk/1227.076)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (sk/1227.076)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (sk/1227.076)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (sk/1227.076)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (sk/1227.076)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (sk/1227.076)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (sk/1227.076)*0.8177366
			}
			
		}
		
			if(slct==="sl")
		{	var sl= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (sl/187.107932);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (sl/187.107932)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (sl/187.107932)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (sl/187.107932)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (sl/187.107932)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (sl/187.107932)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (sl/187.107932)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (sl/187.107932)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (sl/187.107932)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (sl/187.107932)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (sl/187.107932)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (sl/187.107932)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (sl/187.107932)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (sl/187.107932)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (sl/187.107932)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (sl/187.107932)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (sl/187.107932)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (sl/187.107932)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (sl/187.107932)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (sl/187.107932)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (sl/187.107932)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (sl/187.107932)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (sl/187.107932)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (sl/187.107932)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (sl/187.107932)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (sl/187.107932)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (sl/187.107932)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (sl/187.107932)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (sl/187.107932)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (sl/187.107932)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (sl/187.107932)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (sl/187.107932)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (sl/187.107932)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (sl/187.107932)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (sl/187.107932)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (sl/187.107932)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (sl/187.107932)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (sl/187.107932)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (sl/187.107932)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (sl/187.107932)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (sl/187.107932)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (sl/187.107932)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (sl/187.107932)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (sl/187.107932)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (sl/187.107932)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (sl/187.107932)*0.8177366
			}
			
		}
		
			if(slct==="sw")
		{	var sw= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (sw/9.5916);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (sw/9.5916)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (sw/9.5916)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (sw/9.5916)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (sw/9.5916)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (sw/9.5916)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (sw/9.5916)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (sw/9.5916)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (sw/9.5916)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (sw/9.5916)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (sw/9.5916)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (sw/9.5916)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (sw/9.5916)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (sw/9.5916)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (sw/9.5916)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (sw/9.5916)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (sw/9.5916)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (sw/9.5916)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (sw/9.5916)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (sw/9.5916)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (sw/9.5916)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (sw/9.5916)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (sw/9.5916)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (sw/9.5916)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (sw/9.5916)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (sw/9.5916)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (sw/9.5916)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (sw/9.5916)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (sw/9.5916)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (sw/9.5916)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (sw/9.5916)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (sw/9.5916)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (sw/9.5916)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (sw/9.5916)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (sw/9.5916)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (sw/9.5916)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (sw/9.5916)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (sw/9.5916)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (sw/9.5916)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (sw/9.5916)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (sw/9.5916)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (sw/9.5916)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (sw/9.5916)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (sw/9.5916)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (sw/9.5916)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (sw/9.5916)*0.8177366
			}
			
		}
		
			if(slct==="st")
		{	var st= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (st/0.965095);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (st/0.965095)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (st/0.965095)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (st/0.965095)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (st/0.965095)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (st/0.965095)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (st/0.965095)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (st/0.965095)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (st/0.965095)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (st/0.965095)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (st/0.965095)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (st/0.965095)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (st/0.965095)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (st/0.965095)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (st/0.965095)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (st/0.965095)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (st/0.965095)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (st/0.965095)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (st/0.965095)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (st/0.965095)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (st/0.965095)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (st/0.965095)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (st/0.965095)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (st/0.965095)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (st/0.965095)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (st/0.965095)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (st/0.965095)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (st/0.965095)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (st/0.965095)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (st/0.965095)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (st/0.965095)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (st/0.965095)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (st/0.965095)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (st/0.965095)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (st/0.965095)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (st/0.965095)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (st/0.965095)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (st/0.965095)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (st/0.965095)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (st/0.965095)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (st/0.965095)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (st/0.965095)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (st/0.965095)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (st/0.965095)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (st/0.965095)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (st/0.965095)*0.8177366
			}
			
		}
		
			if(slct==="th")
		{	var th= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (th/31.815559);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (th/31.815559)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (th/31.815559)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (th/31.815559)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (th/31.815559)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (th/31.815559)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (th/31.815559)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (th/31.815559)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (th/31.815559)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (th/31.815559)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (th/31.815559)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (th/31.815559)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (th/31.815559)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (th/31.815559)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (th/31.815559)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (th/31.815559)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (th/31.815559)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (th/31.815559)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (th/31.815559)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (th/31.815559)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (th/31.815559)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (th/31.815559)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (th/31.815559)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (th/31.815559)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (th/31.815559)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (th/31.815559)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (th/31.815559)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (th/31.815559)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (th/31.815559)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (th/31.815559)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (th/31.815559)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (th/31.815559)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (th/31.815559)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (th/31.815559)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (th/31.815559)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (th/31.815559)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (th/31.815559)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (th/31.815559)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (th/31.815559)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (th/31.815559)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (th/31.815559)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (th/31.815559)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (th/31.815559)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (th/31.815559)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (th/31.815559)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (th/31.815559)*0.8177366
			}
			
		}
		
			if(slct==="tr")
		{	var tr= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (tr/6.793375);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (tr/6.793375)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (tr/6.793375)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (tr/6.793375)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (tr/6.793375)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (tr/6.793375)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (tr/6.793375)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (tr/6.793375)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (tr/6.793375)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (tr/6.793375)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (tr/6.793375)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (tr/6.793375)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (tr/6.793375)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (tr/6.793375)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (tr/6.793375)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (tr/6.793375)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (tr/6.793375)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (tr/6.793375)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (tr/6.793375)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (tr/6.793375)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (tr/6.793375)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (tr/6.793375)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (tr/6.793375)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (tr/6.793375)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (tr/6.793375)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (tr/6.793375)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (tr/6.793375)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (tr/6.793375)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (tr/6.793375)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (tr/6.793375)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (tr/6.793375)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (tr/6.793375)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (tr/6.793375)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (tr/6.793375)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (tr/6.793375)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (tr/6.793375)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (tr/6.793375)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (tr/6.793375)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (tr/6.793375)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (tr/6.793375)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (tr/6.793375)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (tr/6.793375)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (tr/6.793375)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (tr/6.793375)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (tr/6.793375)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (tr/6.793375)*0.8177366
			}
			
		}
		
			if(slct==="ua")
		{	var ua= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (ua/3.67);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (ua/3.67)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (ua/3.67)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (ua/3.67)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (ua/3.67)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (ua/3.67)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (ua/3.67)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (ua/3.67)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (ua/3.67)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (ua/3.67)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (ua/3.67)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (ua/3.67)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (ua/3.67)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (ua/3.67)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (ua/3.67)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (ua/3.67)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (ua/3.67)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (ua/3.67)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (ua/3.67)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (ua/3.67)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (ua/3.67)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (ua/3.67)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (ua/3.67)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (ua/3.67)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (ua/3.67)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (ua/3.67)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (ua/3.67)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (ua/3.67)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (ua/3.67)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (ua/3.67)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (ua/3.67)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (ua/3.67)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (ua/3.67)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (ua/3.67)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (ua/3.67)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (ua/3.67)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (ua/3.67)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (ua/3.67)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (ua/3.67)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (ua/3.67)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (ua/3.67)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (ua/3.67)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (ua/3.67)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (ua/3.67)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (ua/3.67)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (ua/3.67)*0.8177366
			}
			
		}
		
			if(slct==="uk")
		{	var uk= parseFloat(document.getElementById("inpt").value);
		
			if(oprt === "us")
			{
				document.getElementById("result").value = (uk/0.817366);
			}
			else if(oprt === "af")
			{
				document.getElementById("result").value = (uk/0.817366)*76.7;
			}
			else if(oprt === "ar")
			{
				document.getElementById("result").value = (uk/0.817366)*68;
			}
			else if(oprt === "au")
			{
				document.getElementById("result").value = (uk/0.817366)*1.5173;
			}
			else if(oprt === "at")
			{
				document.getElementById("result").value = (uk/0.817366)*12.68;
			}
			else if(oprt === "bh")
			{
				document.getElementById("result").value = (uk/0.817366)*0.376;
			}
			else if(oprt === "bn")
			{
				document.getElementById("result").value = (uk/0.817366)*85.03;
			}
			else if(oprt === "bt")
			{
				document.getElementById("result").value = (uk/0.817366)*0.00011;
			}
			else if(oprt === "br")
			{
				document.getElementById("result").value = (uk/0.817366)*5.717;
			}
			else if(oprt === "bu")
			{
				document.getElementById("result").value = (uk/0.817366)*1.7815;
			}
			else if(oprt === "cn")
			{
				document.getElementById("result").value = (uk/0.817366)*1.3916;
			}
			else if(oprt === "ch")
			{
				document.getElementById("result").value = (uk/0.817366)*7.0928;
			}
			else if(oprt === "co")
			{
				document.getElementById("result").value = (uk/0.817366)*3775.03;
			}
			else if(oprt === "cr")
			{
				document.getElementById("result").value = (uk/0.817366)*6.9018;
			}
			else if(oprt === "dn")
			{
				document.getElementById("result").value = (uk/0.817366)*6.792;
			}
			else if(oprt === "eg")
			{
				document.getElementById("result").value = (uk/0.817366)*15.86;
			}
			else if(oprt === "eu")
			{
				document.getElementById("result").value = (uk/0.817366)*0.910888;
			}
			else if(oprt === "hn")
			{
				document.getElementById("result").value = (uk/0.817366)*318.54;
			}
			else if(oprt === "ia")
			{
				document.getElementById("result").value = (uk/0.817366)*75.572078;
			}
			else if(oprt === "id")
			{
				document.getElementById("result").value = (uk/0.817366)*14717.795;
			}
			else if(oprt === "ir")
			{
				document.getElementById("result").value = (uk/0.817366)*41823.1267;
			}
			else if(oprt === "iq")
			{
				document.getElementById("result").value = (uk/0.817366)*1190;
			}
			else if(oprt === "is")
			{
				document.getElementById("result").value = (uk/0.817366)*3.508;
			}
			else if(oprt === "j")
			{
				document.getElementById("result").value = (uk/0.817366)*107.534553;
			}
			else if(oprt === "sk")
			{
				document.getElementById("result").value = (uk/0.817366)*122.0762;
			}
			else if(oprt === "k")
			{
				document.getElementById("result").value = (uk/0.817366)*0.308825;
			}
			else if(oprt === "ma")
			{
				document.getElementById("result").value = (uk/0.817366)*4.349651;
			}
			else if(oprt === "me")
			{
				document.getElementById("result").value = (uk/0.817366)*23.2864;
			}
			else if(oprt === "mo")
			{
				document.getElementById("result").value = (uk/0.817366)*9.89;
			}
			else if(oprt === "np")
			{
				document.getElementById("result").value = (uk/0.817366)*121.48;
			}
			else if(oprt === "nz")
			{
				document.getElementById("result").value = (uk/0.817366)*1.62943;
			}
			else if(oprt === "nr")
			{
				document.getElementById("result").value = (uk/0.817366)*9.920577;
			}
			else if(oprt === "pk")
			{
				document.getElementById("result").value = (uk/0.817366)*160.6;
			}
			else if(oprt === "po")
			{
				document.getElementById("result").value = (uk/0.817366)*4.1331;
			}
			else if(oprt === "q")
			{
				document.getElementById("result").value = (uk/0.817366)*3.64;
			}
			else if(oprt === "rs")
			{
				document.getElementById("result").value = (uk/0.817366)*71.3073;
			}
			else if(oprt === "sa")
			{
				document.getElementById("result").value = (uk/0.817366)*3.75;
			}
			else if(oprt === "si")
			{
				document.getElementById("result").value = (uk/0.817366)*1.4135;
			}
			else if(oprt === "sf")
			{
				document.getElementById("result").value = (uk/0.817366)*17.9834;
			}
			else if(oprt === "sl")
			{
				document.getElementById("result").value = (uk/0.817366)*1.87079;
			}
			else if(oprt === "sw")
			{
				document.getElementById("result").value = (uk/0.817366)*9.5916;
			}
			else if(oprt === "st")
			{
				document.getElementById("result").value = (uk/0.817366)*0.6951;
			}
			else if(oprt === "th")
			{
				document.getElementById("result").value = (uk/0.817366)*31.8155;
			}
			else if(oprt === "tr")
			{
				document.getElementById("result").value = (uk/0.817366)*6.9733;
			}
			else if(oprt === "ua")
			{
				document.getElementById("result").value = (uk/0.817366)*3.67;
			}
			else if(oprt === "uk")
			{
				document.getElementById("result").value = (uk/0.817366)*0.8177366
			}
			
		}
}