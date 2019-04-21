(function () {
	var media = new Audio(chrome.runtime.getURL("assets/song.mp3"));
	var div = document.createElement('div');
	const playPromise = media.play();
	var func = function () {
		alert("Success!");
	};


	if (playPromise !== null) {
		playPromise.catch(() => { media.play(); })
	}

	chrome.runtime.onMessage.addListener(
		function (request) {
			if (request.msg === "startFunc") func();
		});
	while (true) {

		//append all elements
		document.body.appendChild(div);
		//set attributes for div
		div.id = 'myDivId';
		div.style.position = 'fixed';
		div.style.top = '50%';
		div.style.left = '50%';
		div.style.width = '100%';
		div.style.height = '100%';
		div.style.backgroundColor = 'red';
		div.style.position = 'fixed';
		div.style.top = 0;
		div.style.right = 0;
		div.textContent = 'Injected!';
		document.body.appendChild(div);

	}


	//Below this line is the injected script
	//you can edit easily as an usual javascript on website

	// just place a div at top right
	//var data = []

  /*alert('inserted self... giggity');
	var cSite = window.location.href;
	var img = document.getElementsByTagName("img, a, i");
	var data = []

	function checkURL(currentSite) {
		var hostName = window.location.hostname.split('.');
		currentSite = currentSite.split('.');

		for (var x in currentSite) {
			if (currentSite[x] == "") {
				currentSite.splice(x, 1);
			}
		}
		var j = hostName.length - currentSite.length
		for (var i in currentSite) {
			if (!hostName[j] || hostName[j].toLowerCase() != currentSite[i].toLowerCase()) {
				return false;
			}
			j++;
		}
		return true;
	}

	if (checkURL("facebook.com") === true) {
		alert("Yay it's facebook")
		for (var i = 0; i < img.length; i++) {
			data.push(img[i].src);
		}
		console.log('Facebook:' + data[1])
	}

	if (checkURL("instagram.com") === true) {
		alert(" Yay it's instagram")
		for (var i = 0; i < img.length; i++) {
			data.push(img[i].src);
		}
		console.log('Instagram:' + data[1])
	}
	//not tested yet
	if (checkURL("twitter.com") === true) {
		alert("Yay it's twitter")
		for (var i = 0; i < img.length; i++) {
			data.push(img[i].src);
		}
		console.log('twitter:' + data[1])
	}
	*/

	//test script
	//document.querySelectorAll("img")[1].getAttribute("src")
})();
