var clickedEl = null;

document.addEventListener( 'mousedown', function( event) {
	if( event.button == 2) {
		clickedEl = event.target;
	}
}, true);

chrome.extension.onMessage.addListener(
	function( request, sender, senderResponse) {
		clickedEl.value = request[0];
	}
);
