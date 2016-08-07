var contest,beta,no_div,beta_no_div;
function do_everything()
{
	var round_number = document.getElementById("round").value;
	var div_number = document.getElementById("div").value;
	
	contest=String("Codeforces Round #") + String(round_number) + String(" (Div. ") + String(div_number) + String(")");
	no_div=String("Codeforces Round #") + String(round_number);
	beta=String("Codeforces Beta Round #") + String(round_number) + String(" (Div. ") + String(div_number) + String(")");
	beta_no_div=String("Codeforces Beta Round #") + String(round_number);
	
	var xmlhttp = new XMLHttpRequest();
	var url = "http://codeforces.com/api/contest.list?gym=false";

	xmlhttp.open("GET", url, false);
	xmlhttp.send();
	//xmlhttp.onload=call(xmlhttp);
	xmlhttp.onreadystatechange = call(xmlhttp);
	
}

function myFunction(contest_id) 
{
    	var newURL = "http://codeforces.com/contest/" + String(contest_id);
    	chrome.tabs.create({ url: newURL });
}

function call(xmlhttp)
{
	if(xmlhttp.readyState==4 && xmlhttp.status==200) 
	{
        	var myArr = JSON.parse(xmlhttp.responseText).result;
			var i;
			for(i=0;i<myArr.length;i++)
			{
				if(myArr[i].name==contest || myArr[i].name==beta || myArr[i].name==no_div || myArr[i].name==beta_no_div)
				{
					myFunction(myArr[i].id);
				}
			}
    }
}

document.getElementById("done").addEventListener("click", do_everything);
