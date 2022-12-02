chrome.webRequest.onBeforeRequest.addListener(
	function (info) {
		console.log(info.url);
		var redirectUrl = info.url;
		if (/.+\/assets\/(?<filename>.+\.js)(?:\?.*)?$/.exec(redirectUrl)) {
			newRedirectUrl = redirectUrl.replace(/.+\/\/(beta\.)?deeeep.io\/assets/, "https://hacked-doc-assets.netlify.app/images/misc");
			return { redirectUrl: newRedirectUrl };
		}
	},
	{
		urls: ["*://*.deeeep.io/assets/*"],
		types: ["script"]
	},
	["blocking"]
);
