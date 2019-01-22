window.onload = function () {
	var buyButton = document.getElementsByClassName("buy-item");
	if (buyButton) {
		for (var i = 0; i < buyButton.length; i++) {
			buyButton[i].addEventListener('mouseover', function() {
				var openOverlay = document.getElementsByClassName("open-overlay");
				for (var i = 0; i < openOverlay.length; i++) {
					if (!openOverlay.classList.contains("active-item")) {
					openOverlay.className += " active-item";
					} else {
						openOverlay.className = openOverlay[i].className.replace("active-item", " ");
					}
				}
			}, false);

		}
	}
	
}