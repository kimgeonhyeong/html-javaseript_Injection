var test_type = 0;
var count = 0;

function jstalktheme_addmsg(type, name, time, msg, count)
{
	var ocontainer = document.getElementById("jstalktheme_test");
	var ocontainer_msg = ocontainer.getElementsByClassName("msg")[0];

	var onewmsg = document.createElement("div");
	var onewblank = document.createElement("div");

	 if(type==1)
	{
		onewmsg.className="othertalk";
		onewmsg.innerHTML =
		"<div class=\"profile_image\" style=\"background: url(./profile_image.png) no-repeat;\">\n"+
		"</div>\n"+
		"<div class=\"box\">\n"+
		"<div class=\"profile_name\">\n"+
		"관제 챗봇"+"\n"+
		"</div>\n"+
		"<div class=\"a\">\n"+
		"</div>\n"+
		"<div class=\"b\">\n"+
		"<iframe src='https://www.wpws.kr/hangang/'' width='200pxpx' height='500px'></iframe>"+"\n"+
		"</div>\n" +
		"<div class=\"time\">\n"+
		time+"\n"+
		"</div>\n"+
		"</div>\n";
	}else if(type==2){
		onewmsg.className="othertalk";
		onewmsg.innerHTML =
		"<div class=\"profile_image\" style=\"background: url(./profile_image.png) no-repeat;\">\n"+
		"</div>\n"+
		"<div class=\"box\">\n"+
		"<div class=\"profile_name\">\n"+
		"관제 챗봇"+"\n"+
		"</div>\n"+
		"<div class=\"a\">\n"+
		"</div>\n"+
		"<div class=\"b\">\n"+
		"www.hsoc.kr"+"\n"+
		"</div>\n" +
		"<div class=\"time\">\n"+
		time+"\n"+
		"</div>\n"+
		"</div>\n";
	}
	else if(type==3){
		onewmsg.className="othertalk";
		onewmsg.innerHTML =
		"<div class=\"profile_image\" style=\"background: url(./profile_image.png) no-repeat;\">\n"+
		"</div>\n"+
		"<div class=\"box\">\n"+
		"<div class=\"profile_name\">\n"+
		"관제 챗봇"+"\n"+
		"</div>\n"+
		"<div class=\"a\">\n"+
		"</div>\n"+
		"<div class=\"b\">\n"+
		"I want to read txt."+"\n"+
		"</div>\n" +
		"<div class=\"time\">\n"+
		time+"\n"+
		"</div>\n"+
		"</div>\n";

		}
	else {
		alert("관리자 권한이 필요합니다.");
		location.replace("login.html");
	}


	onewmsg.innerHTML +=
    "<div class=\"clear\">\n"+
    "</div>";

	onewblank.className="blank";

	ocontainer_msg.appendChild(onewmsg);
	ocontainer_msg.appendChild(onewblank);

	ocontainer_msg.scrollTop = ocontainer_msg.scrollHeight;
}


function jstalktheme_testfunc()
{
	var otxtmsg = document.getElementById("jstalktheme_testmsg");

	var d = new Date();
	var ampm = (d.getHours()>12 ?  "PM" : "AM");
	var h = (d.getHours()>12 ? d.getHours()-12 : d.getHours());
	var m = d.getMinutes();
 	console.log("lD= 'noob' ");
	test_type = 1;
	jstalktheme_addmsg(test_type, "아무개", ampm+" "+h+":"+m, otxtmsg.value.replace("\n","<br />\n"));
}

function jstalktheme_testfunc3()
{
	var otxtmsg = document.getElementById("jstalktheme_testmsg");
	var div = document.getElementById("RE_ID");

	var d = new Date();
	var ampm = (d.getHours()>12 ?  "PM" : "AM");
	var h = (d.getHours()>12 ? d.getHours()-12 : d.getHours());
	var m = d.getMinutes();
	test_type = 3;
	jstalktheme_addmsg(test_type, "아무개", ampm+" "+h+":"+m, otxtmsg.value.replace("\n","<br />\n"));
	++count;
	if(count==40)
	{
		div.innerHTML="<p style='display:none;'>down_{RGB}</p>";
	}


}

function jstalktheme_testfunc4()
{
	var otxtmsg = document.getElementById("jstalktheme_testmsg");

	var d = new Date();
	var ampm = (d.getHours()>12 ?  "PM" : "AM");
	var h = (d.getHours()>12 ? d.getHours()-12 : d.getHours());
	var m = d.getMinutes();

	test_type = 4;
	jstalktheme_addmsg(test_type, "아무개", ampm+" "+h+":"+m, otxtmsg.value.replace("\n","<br />\n"));
}
