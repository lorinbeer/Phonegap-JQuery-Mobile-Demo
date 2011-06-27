//================================================================================================================

//================================================================================================================
function populateList() {
	$("#contentlist").empty(); //empty the list elements we've placed in the html
	//repopulate the list with data from phonegap's device api
	$("#contentlist").append("<li><a href='#'>Device Name: "     +device.name+     "</a></li>");
	$("#contentlist").append("<li><a href='#'>Device Phonegap: " +device.phonegap+ "</a></li>");
	$("#contentlist").append("<li><a href='#'>Device Platform: " +device.platform+ "</a></li>");
	$("#contentlist").append("<li><a href='#'>Device UUID: "     +device.uuid+     "</a></li>");
	$("#contentlist").append("<li><a href='#'>Device Version: "  +device.version+  "</a></li>");
	
	$("#contentlist").listview('refresh'); //must be called if you want the new list elements properly styled
}
//================================================================================================================
function beepbeep() {
    $("#mainpage").page();
	navigator.notification.alert('You totally just pressed a button!!!!111!');
	navigator.notification.beep();
}
//================================================================================================================
