window.onload = fc_1;

function fc_1 () {
	var btn = document.getElementById("bt");
	var timer;
	btn.onclick = fc_2;
}

function fc_2 () {
	timer = setInterval(updateTime, 1000);
	this.value = "暂停"
	this.onclick = fc_3;
}

function fc_3 () {
	clearInterval(timer);
	this.value = "开始"
	this.onclick = fc_2;
}

function updateTime () {
	var sp = document.getElementsByTagName("span");

	if (sp[0].innerHTML == "0" && sp[1].innerHTML == "0") {
		clearInterval(timer);
		alert("times up!");
		btn.value = "开始";
	};
	if (sp[0].innerHTML != "0" && sp[1].innerHTML == "0"){
		sp[0].innerHTML = parseInt(sp[0].innerHTML) - 1;
		sp[1].innerHTML = 60;
	};
	if (sp[0].innerHTML != "0" || sp[1].innerHTML != "0") {
		sp[1].innerHTML = parseInt(sp[1].innerHTML) - 1;
	};
}