chrome.webRequest.onBeforeRequest.addListener(
	function (info) {
		console.log(info.url);
		var redirectUrl = info.url;
		if (/.+\/assets\/(?<filename>.+\.js)(?:\?.*)?$/.exec(redirectUrl)) {
			newRedirectUrl = redirectUrl.replace(/.+\/\/(beta\.)?deeeep.io\/assets/, "https://blockyfish-client.github.io/Hacked-Doc-Assets/images/misc");

			let checkRequest = new XMLHttpRequest(); // creates HTTP request
			checkRequest.open("GET", newRedirectUrl, false);
			checkRequest.send();
			if (checkRequest.status >= 200 && checkRequest.status < 300) {
				redirectUrl = newRedirectUrl;
			}
			return { redirectUrl: redirectUrl };
		}
	},
	{
		urls: ["*://*.deeeep.io/assets/*"],
		types: ["script"]
	},
	["blocking"]
);
