// LEAVE CONFIRMATION
window.onbeforeunload = function () {
	if (document.contains(document.querySelector(".playing"))) {
		return "Do you want to exit this page?";
	}
};

// BLOCKS BROWSER KEYBOARD SHORTCUTS
document.onkeydown = function (e) {
	if ((e.ctrlKey || e.altKey) && !(e.ctrlKey && e.key.toLowerCase() == ("backspace" || "c" || "v" || "a")) && !(e.ctrlKey && e.shiftKey && (e.key.toLowerCase() == "i" || "c"))) return false;
};

// DEVTOOLS WARNING
var devToolsOpen = true;
var oldDtState = false;
var isMac = navigator.platform.toLowerCase().indexOf("mac") > -1,
	openedRatio = isMac ? 1.6 : 1.5,
	startedOpenedRatio = isMac ? 0.5 : 0.8,
	firstTest,
	inter;
window.addEventListener("load", function () {
	setTimeout(init, 1000);
});
function init() {
	firstTest = testDevTools();
	startCheck();
}
function testDevTools() {
	var t = performance.now();
	for (var i = 0; i < 100; i++) {
		console.debug(1);
	}
	return performance.now() - t;
}
function startCheck() {
	stopCheck();
	inter = setInterval(function () {
		var test = testDevTools(),
			ratio = test / firstTest,
			opened = ratio > openedRatio;
		devToolsOpen = opened;
		if (ratio < startedOpenedRatio) {
			firstTest = test;
		}
		if (oldDtState != devToolsOpen) {
			oldDtState = devToolsOpen;
			if (devToolsOpen == true) {
				big_style = ["color: #ef7c8e", "-webkit-text-stroke: 1px black", "font-size: 75px", "font-family: system-ui", "padding: 10px"].join(";");
				console.log("%cStop!", big_style);
				text_style = ["color: white", "font-size: 20px", "font-family: system-ui"].join(";");
				console.log("%cThis is a browser feature intended for developers. If someone told you to copy and paste something here, there is a 420.69% chance that they are trying to hack your account.", text_style);
				console.log("%cUnless you know EXACTLY what you're doing, please close DevTools", text_style);
				note_style = ["color: #7ab5e6", "font-size: 10px", "font-family: system-ui"].join(";");
				console.log("%cIf you know how to do trolling on Deeeep.io with Devtools, please join the Discord server listed at https://blockyfish.netlify.app and help me with the development of this browser extension.", note_style);
			}
		}
	}, 1000);
}
function stopCheck() {
	clearInterval(inter);
}

const brand_css = document.createElement("style");
document.querySelector("head").appendChild(brand_css);
brand_css.outerHTML = '<link rel="stylesheet" href="https://blockyfish.netlify.app/themes/branding.css">';

const custom_css = document.createElement("style");
document.querySelector("body").appendChild(custom_css);
custom_css.outerHTML = '<link id="customcss" rel="stylesheet" href="https://blockyfish.netlify.app/themes/reefpenguin/theme.css">';

// HALLOWEEN THEME - OCTOBER
var snow_style = document.createElement("style");
document.querySelector("head").appendChild(snow_style);
snow_style.innerHTML =
	'@import url(https://fonts.googleapis.com/css?family=Muli&display=swap);*{box-sizing:border-box}body{overflow:hidden;}#snow_container{background-color:#fff0;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Muli,sans-serif;height:100vh;overflow:hidden;margin:0;text-align:center}.fa-snowflake{z-index:999999999999999999;color:#fff;position:absolute;top:-20px;animation:linear forwards fall}.fa-snowflake::before{content:""}@keyframes fall{to{transform:translateY(105vh) rotate(360deg)}}';
var month = new Date().getMonth();
if (9 == month) {
	setInterval(t, 400);
	let e = document.createElement("div");
	function t() {
		let e = document.createElement("p"),
			t = Math.round(3 * Math.random());
		(e.innerText = 0 == t ? "🎃" : 1 == t ? "💀" : 2 == t ? "🦇" : "🕷️"), e.classList.add("fa-snowflake"), (e.style.left = Math.random() * window.innerWidth + "px"), (e.style.animationDuration = 3 * Math.random() + 5 + "s");
		let n = Math.random();
		(e.style.opacity = n + 0.2),
			(e.style.fontSize = 10 * n + 10 + "px"),
			(e.style.filter = "blur(" + (2 - 3 * n) + "px)"),
			document.getElementById("snow_container").appendChild(e),
			"none" == document.querySelector(".home-page").style.display
				? e.remove()
				: setTimeout(() => {
						e.remove();
				  }, 8e3);
	}
	document.body.appendChild(e), (e.id = "snow_container");
}

// SNOW THEME - DECEMBER AND JANUARY
var snow_style = document.createElement("style");
document.querySelector("head").appendChild(snow_style);
snow_style.innerHTML =
	'@import url(https://fonts.googleapis.com/css?family=Muli&display=swap);*{box-sizing:border-box}body{overflow:hidden;}#snow_container{background-color:#fff0;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Muli,sans-serif;height:100vh;overflow:hidden;margin:0;text-align:center}.fa-snowflake{z-index:999999999999999999;color:#fff;position:absolute;top:-20px;animation:linear forwards fall}.fa-snowflake::before{content:""}@keyframes fall{to{transform:translateY(105vh) rotate(180deg)}}';
var month = new Date().getMonth();
if (11 == month || 0 == month) {
	setInterval(t, 400);
	let e = document.createElement("div");
	function t() {
		let e = document.createElement("p");
		(e.innerText = "❄"), e.classList.add("fa-snowflake"), (e.style.left = Math.random() * window.innerWidth + "px"), (e.style.animationDuration = 3 * Math.random() + 5 + "s");
		let t = Math.random();
		(e.style.opacity = t + 0.2),
			(e.style.fontSize = 10 * t + 10 + "px"),
			(e.style.filter = "blur(" + (2 - 3 * t) + "px)"),
			document.getElementById("snow_container").appendChild(e),
			"none" == document.querySelector(".home-page").style.display
				? e.remove()
				: setTimeout(() => {
						e.remove();
				  }, 8e3);
	}
	document.body.appendChild(e), (e.id = "snow_container");
}

// HAHA RICKROLL - APR 1
var month = new Date().getMonth().toString() + new Date().getDate().toString();
if (31 == month) {
	let e = document.createElement("div");
	document.body.appendChild(e),
		(e.innerHTML = "<video id='video1'><source src='https://blockyfish.netlify.app/assets/get_rickrolled_lol360P.mp4' type='video/mp4'></video>"),
		(e.style.zIndex = "99999999999999999999999999"),
		(e.style.bottom = "0"),
		(e.style.position = "fixed"),
		(e.style.display = "none"),
		(e.style.width = "100vw"),
		(e.style.height = "100vh"),
		(document.getElementById("video1").style.display = "block"),
		(document.getElementById("video1").style.margin = "auto"),
		(document.getElementById("video1").style.width = "100vw"),
		(document.getElementById("video1").style.height = "100vh"),
		document.addEventListener("mouseup", function t() {
			(e.style.display = "block"),
				document.getElementById("video1").play(),
				setTimeout(() => {
					e.remove(), this.removeEventListener("mouseup", arguments.callee, !1);
				}, 7100);
		});
}

// BUILD EVO BUTTON
const button_clone = document.querySelector("div.p-2.sidebar.right.space-y-2 > div.container > div > div").cloneNode(true);
document.querySelector("div.p-2.sidebar.right.space-y-2 > div.container > div").appendChild(button_clone);
button = button_clone.firstElementChild;
button.classList.remove("pink");
button.classList.add("blue", "evo", "evo-close");
const evoText = document.querySelector("button.evo > span:nth-child(1) > span:nth-child(2)");
evoText.innerHTML = "Evo Tree";
const evoIcon = document.querySelector("button.evo > span:nth-child(1) > svg:nth-child(1)");
evoIcon.outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-diagram-3-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1z"/></svg>`;

// BUILD EVO MODAL
const style = document.createElement("style");
document.querySelector("head").appendChild(style);
style.innerHTML =
	".button{display:inline-flex;justify-content:center;align-items:center;line-height:1;height:32px;white-space:nowrap;cursor:pointer;text-align:center;box-sizing:border-box;outline:0;transition:.1s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;-webkit-appearance:none;min-height:2.5rem;border-radius:.25rem;padding:.75rem 1.25rem;font-size:.875rem}.box-x-close{position:absolute;top:.3rem;right:.5rem}.evo-red{background-color:#ef4444;border-color:#dc2626}.evo-red:hover{background-color:#dc2626;border-color:#b91c1c}.evo-black{background-color:#6b7280;border-color:#4b5563}.evo-black:hover{background-color:#4b5563;border-color:#374151}body .evo-button{border-bottom-width:4px;border-radius:1rem}.evo-box.active{outline:white solid 2px;filter:brightness(100%)}.evo-modal{background-color:#1f2937;border:2px solid #374151;border-radius:.75rem;width:100vh}.evo-core{top:5px;right:5px;border:1px solid #fff;border-radius:25px;font-size:14px}#evo-main{flex-wrap:wrap;width:88%;margin:auto;gap:15px}.evo-hidden{opacity: 0;pointer-events: none;}#evo-modal{transition: 0.2s opacity;}";
const div = document.createElement("div");
document.getElementById("app").appendChild(div);
div.outerHTML =
	'<div style="z-index: 100;" class="w-screen h-screen absolute" id="evo-modal"> <div style="background-color: rgba(0,0,0,.5);" class="w-full h-full absolute"></div><div class="w-full h-full absolute flex justify-center items-center"> <div class="flex flex-col evo-modal relative"> <div style="font-size: 1.3rem" class="text-center py-2">Evo Tree</div><button class="evo-close box-x-close"><svg width="1.125em" height="1.125em" viewBox="0 0 24 24" class="svg-icon" color="gray" style="--sx:1; --sy:1; --r:0deg;"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" fill="currentColor"></path></svg></button> <div style="flex: 1;" class="text-center"> <div class="p-4 flex" id="evo-main"></div></div><div class="text-center py-4"> <div class="button evo-button evo-black evo-close">Close</div></div></div></div></div>';
const evoMain = document.getElementById("evo-main");
const evoBox = document.createElement("div");
evoMain.appendChild(evoBox);
evoBox.outerHTML = '<img draggable="false" src="https://raw.githubusercontent.com/blockyfish-client/Desktop-Client/master/img/evolution_tree_themed.png">';
const evoCloses = document.getElementsByClassName("evo-close");
const evoModal = document.getElementById("evo-modal");
evoModal.classList.toggle("evo-hidden");
for (const evoClose of evoCloses) {
	evoClose.addEventListener("click", () => {
		evoModal.classList.toggle("evo-hidden");
	});
}

// BLOCKYFISH FEED
if (window.innerWidth > 800) {
	const left_widget_container = document.querySelector("div.p-2.sidebar.left.space-y-2");
	left_widget_container.style.maxWidth = "30vw";
	left_widget_container.style.width = "21rem";

	const tutorial_box = document.querySelector("div.p-2.sidebar.right.space-y-2 > div:nth-child(3)").cloneNode(true);
	left_widget_container.insertBefore(tutorial_box, left_widget_container.firstChild);
	document.querySelector("div.p-2.sidebar.left.space-y-2 > div > div.title").innerText = "How to play";
	document.querySelector("div.p-2.sidebar.left.space-y-2 > div > div:nth-child(2)").outerHTML = '<div id="tutorial"></div>';
	const tutorial = document.getElementById("tutorial");
	tutorial.style.maxHeight = "30vh";
	tutorial.style.overflow = "scroll";
	tutorial.style.overflowX = "hidden";
	tutorial.style.padding = "10px";
	tutorial.style.fontSize = "small";

	const news_feed_box = document.querySelector("div.p-2.sidebar.right.space-y-2 > div:nth-child(3)").cloneNode(true);
	left_widget_container.insertBefore(news_feed_box, left_widget_container.firstChild);
	document.querySelector("div.p-2.sidebar.left.space-y-2 > div > div.title").innerText = "Blockyfish News";
	document.querySelector("div.p-2.sidebar.left.space-y-2 > div > div:nth-child(2)").outerHTML = '<div id="blockyfish-news"></div>';
	const blockyfish_news = document.getElementById("blockyfish-news");
	blockyfish_news.style.maxHeight = "30vh";
	blockyfish_news.style.overflow = "scroll";
	blockyfish_news.style.overflowX = "hidden";
	blockyfish_news.style.padding = "10px";
	blockyfish_news.style.fontSize = "small";

	async function getBlockyfishTutorial() {
		let tut = await (await fetch("https://blockyfish.netlify.app/blockyfishfeed/tutorial")).text();
		tutorial.innerHTML = tut;
	}
	getBlockyfishTutorial();
	async function getBlockyfishNews() {
		let news = await (await fetch("https://blockyfish.netlify.app/blockyfishfeed/news")).text();
		blockyfish_news.innerHTML = news;
	}
	getBlockyfishNews();
}

// ASSET SWAPPER MODAL (FOR IN-GAME)
const aswp_style = document.createElement("style");
document.querySelector("head").appendChild(aswp_style);
aswp_style.innerHTML =
	".button{display:inline-flex;justify-content:center;align-items:center;line-height:1;height:32px;white-space:nowrap;cursor:pointer;text-align:center;box-sizing:border-box;outline:0;transition:.1s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;-webkit-appearance:none;min-height:2.5rem;border-radius:.25rem;padding:.75rem 1.25rem;font-size:.875rem}.box-x-close{position:absolute;top:.3rem;right:.5rem}body .aswp-button{border-bottom-width:4px;border-radius:1rem}.aswp-gre{background-color:#ef4444;border-color:#dc2626}.aswp-gre:hover{background-color:#dc2626;border-color:#b91c1c}.aswp-black{background-color:#6b7280;border-color:#4b5563}.aswp-black:hover{background-color:#4b5563;border-color:#374151}.aswp-box.active{outline:white solid 1px;filter:brightness(100%)}.aswp-modal{background-color:#1f2937;border:2px solid #374151;border-radius:.75rem;width:300px;height:200px}.aswp-core{top:5px;right:5px;border:1px solid #fff;border-radius:25px;font-size:14px}#aswp-main{flex-wrap:wrap;width:88%;height:100%;margin:auto;gap:15px}.aswp-hidden{opacity:0;pointer-events:none}#aswp-modal{transition:opacity .2s}";
const aswp_div = document.createElement("div");
document.getElementById("app").appendChild(aswp_div);
aswp_div.outerHTML =
	'<div style="z-index: 100;" class="w-screen h-screen absolute" id="aswp-modal"> <div style="background-color: rgba(0,0,0,.5);" class="w-full h-full absolute"></div><div class="w-full h-full absolute flex justify-center items-center"> <div class="flex flex-col aswp-modal relative"> <div style="font-size: 1.3rem" class="text-center py-2">Asset Swapper</div><button class="aswp-close box-x-close"><svg width="1.125em" height="1.125em" viewBox="0 0 24 24" class="svg-icon" color="gray" style="--sx:1; --sy:1; --r:0deg;"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" fill="currentColor"></path></svg></button> <div style="flex: 1;" class="text-center"> <div class="p-4 flex" id="aswp-main"></div></div><div class="text-center py-4"> <div class="button aswp-button aswp-black aswp-close">Ok</div></div></div></div></div>';
const aswpMain = document.getElementById("aswp-main");
const aswpBox = document.createElement("div");
aswpMain.appendChild(aswpBox);
aswpBox.outerHTML = '<input id="aswp-input" style="padding: 5px;border-radius: 5px;height: 35px;background-color: #0003;margin: auto;text-align: center;" placeholder="Input skin ID">';
const aswpCloses = document.getElementsByClassName("aswp-close");
const aswpModal = document.getElementById("aswp-modal");
aswpModal.classList.toggle("aswp-hidden");

// SOCIAL LINKS
const discord_old_parent_clone = document.querySelector("#app > div.ui > div > div.el-row.header.justify-between.flex-nowrap > div:nth-child(2) > div > div:nth-child(5)").cloneNode(true);
const discord_old_parent = document.querySelector("#app > div.ui > div > div.el-row.header.justify-between.flex-nowrap > div:nth-child(2) > div > div:nth-child(5)");
const github_parent = document.querySelector("#app > div.ui > div > div.el-row.header.justify-between.flex-nowrap > div:nth-child(2) > div > div:nth-child(5)").cloneNode(true);
const website_parent = document.querySelector("#app > div.ui > div > div.el-row.header.justify-between.flex-nowrap > div:nth-child(2) > div > div:nth-child(5)").cloneNode(true);
const newtab_parent = document.querySelector("#app > div.ui > div > div.el-row.header.justify-between.flex-nowrap > div:nth-child(2) > div > div:nth-child(5)").cloneNode(true);
const social_class = document.querySelector("#app > div.ui > div > div.el-row.header.justify-between.flex-nowrap > div:nth-child(2) > div");

social_class.insertBefore(discord_old_parent_clone, social_class.children[5]);
discord_old_parent.remove();
const discord = document.querySelector("#app > div.ui > div > div.el-row.header.justify-between.flex-nowrap > div:nth-child(2) > div > div:nth-child(5) > button");
discord.classList.remove("black");
discord.classList.add("indigo");
discord.addEventListener("click", () => {
	window.open("https://discord.gg/W3TU4kqD5f");
});

social_class.insertBefore(github_parent, social_class.children[5]);
social_class.insertBefore(website_parent, social_class.children[6]);
social_class.appendChild(newtab_parent);
github_parent.classList.add("github-div");
website_parent.classList.add("website-div");
newtab_parent.classList.add("newtab-div");
const github = document.querySelector("div.github-div > button");
const website = document.querySelector("div.website-div > button");
const newtab = document.querySelector("div.newtab-div > button");
const github_logo = document.querySelector("div.github-div > button > span > svg");
const website_logo = document.querySelector("div.website-div > button > span > svg");
const newtab_logo = document.querySelector("div.newtab-div > button > span > svg");
github_logo.outerHTML =
	'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/></svg>';
website_logo.outerHTML =
	'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/></svg>';
newtab_logo.outerHTML =
	'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-window-plus" viewBox="0 0 16 16"><path d="M2.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM4 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/><path d="M0 4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V7H1v5a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4Zm1 2h13V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2Z"/><path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z"/></svg>';
github.classList.remove("black");
github.classList.add("blue");
github.addEventListener("click", () => {
	window.open("https://docs-blockyfish.netlify.app");
});
website.classList.remove("black");
website.classList.add("pink");
website.addEventListener("click", () => {
	window.open("https://blockyfish.netlify.app");
});
newtab.addEventListener("click", () => {
	window.open("https://beta.deeeep.io");
});

// AUTO LOAD FORUM POSTS
function isInViewport(e) {
	const rect = e.getBoundingClientRect();
	return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}
document.querySelector("#app > div.ui > div > div.el-row.header.justify-between.flex-nowrap > div:nth-child(2) > div > div:nth-child(3) > button").addEventListener("click", () => {
	document.querySelector("#app > div.vfm.vfm--inset.vfm--fixed.modal > div.vfm__container.vfm--absolute.vfm--inset.vfm--outline-none.modal-container > div > div > div").addEventListener("scroll", function () {
		if (isInViewport(document.querySelector("#app > div.vfm.vfm--inset.vfm--fixed.modal > div.vfm__container.vfm--absolute.vfm--inset.vfm--outline-none.modal-container > div > div > div > div > div.footer > button"))) {
			document.querySelector("#app > div.vfm.vfm--inset.vfm--fixed.modal > div.vfm__container.vfm--absolute.vfm--inset.vfm--outline-none.modal-container > div > div > div > div > div.footer > button").click();
		}
	});
});

function injectScript(file, tag) {
	var node = document.getElementsByTagName(tag)[0];
	var script = document.createElement("script");
	script.setAttribute("type", "text/javascript");
	script.setAttribute("src", file);
	node.appendChild(script);
}

// CHECK FOR GAME START
let scriptExecuted = false;
document.querySelector("button.play").addEventListener("click", () => {
	if (!document.querySelector(".playing")) scriptExecuted = false;
	if (scriptExecuted) return;
	const openObserver = new MutationObserver(() => {
		if (document.contains(document.querySelector(".playing"))) {
			openObserver.disconnect();
			scriptExecuted = true;
			injectScript(chrome.runtime.getURL("scripts/injectgamescript.js"), "body");
		}
	});
	openObserver.observe(document.getElementById("app"), {
		attributes: false,
		childList: true,
		characterData: false,
		subtree: true
	});
});
