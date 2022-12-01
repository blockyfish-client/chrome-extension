chrome.webRequest.onBeforeRequest.addListener(
	function (info) {
		console.log(info.url);
		var redirectUrl = info.url;
		if (/.+\/assets\/(?<filename>.+\.js)(?:\?.*)?$/.exec(redirectUrl)) {
			newRedirectUrl = redirectUrl.replace(/.+\/\/(beta\.)?deeeep.io\/assets/, "https://blockyfish-client.github.io/Hacked-Doc-Assets/images/misc");

			var xhr = new XMLHttpRequest();
			xhr.open("HEAD", newRedirectUrl, false);
			xhr.send();
			if (!xhr.status == "404") {
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
