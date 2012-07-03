function fillWithBacon( info, tab) {	
	
	var request = new XMLHttpRequest();
	
	request.open( "GET", "http://baconipsum.com/api/?type=meat-and-filler");
	request.onreadystatechange = function() {
		if( request.readyState == 4) {
			//send responsetext to content script
			chrome.tabs.sendMessage( tab.id, JSON.parse( request.responseText), null);
			
			console.log( JSON.parse( request.responseText)); 
		}
	}
	request.send();
}

var title = "Fill with Bacon";
var id = chrome.contextMenus.create( { "title" : title, "contexts":[ 'editable'], "onclick" : fillWithBacon});
