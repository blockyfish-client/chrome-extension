const mapeditor = document.querySelector("#canvas-container > canvas");

var evo_wheel = document.createElement("div");
var evo_wheel_rot = 0;
setInterval(function () {
	evo_wheel_rot += 1;
}, 100);
document.querySelector("div.game").insertBefore(evo_wheel, document.querySelector("div.game").children[0]);
evo_wheel.outerHTML =
	'<div style="width: 100%;height: 100%;position: absolute;pointer-events: none;display: flex;"><img id="evo-wheel" draggable="false" src="https://raw.githubusercontent.com/blockyfish-client/Assets/main/evo_circle.png" style="z-index: -9999;max-width: 80vw;max-height: 80vh;align-self: center;margin: auto;transition: 0.1s all;transform: scale(0);opacity: 0;"></div>';
evo_wheel = document.getElementById("evo-wheel");

evo_wheel.style.transform = "scale(1) rotate(0deg)";
evo_wheel.style.transform = "scale(0) rotate(-90deg)";
evo_wheel.style.transition = ".3s all";
(async function () {
	evo_wheel.style.transform = "scale(1) rotate(0deg)";
	evo_wheel.style.opacity = 1;
	setTimeout(() => {
		evo_wheel.style.transform = "scale(0) rotate(-90deg)";
		evo_wheel.style.opacity = 0;
	}, 1000);
	setTimeout(() => {
		evo_wheel.style.zIndex = 9999;
	}, 1500);
})();

//Y shortcut key
document.body.addEventListener("keydown", function (e) {
	if (e.isComposing || e.keyCode === 229) {
		return;
	}
	if (e.key.toLowerCase() == "y" && document.querySelector("#app > div.modals-container > div") == null && document.querySelector("#app > div.ui > div").style.display == "none" && document.activeElement.localName != "input") {
		rot = evo_wheel_rot;
		evo_wheel.style.transform = "scale(1) rotate(" + rot + "deg)";
		evo_wheel.style.opacity = 1;
	}
});
document.body.addEventListener("keyup", function (e) {
	if (e.key.toLowerCase() == "y") {
		rot = evo_wheel_rot - 90;
		evo_wheel.style.transform = "scale(0) rotate(" + rot + "deg)";
		evo_wheel.style.opacity = 0;
	}
});

// ASSET SWAP
const aswpModal = document.getElementById("aswp-modal");
const aswpCloses = document.getElementsByClassName("aswp-close");
function toggleAswp() {
	aswpModal.classList.toggle("aswp-hidden");
	game.currentScene.myAnimal.setSkin(document.getElementById("aswp-input").value);
}
document.getElementById("aswp-input").addEventListener("input", () => {
	game.currentScene.myAnimal.setSkin(document.getElementById("aswp-input").value);
});
for (const aswpClose of aswpCloses) {
	aswpClose.addEventListener("click", () => {
		toggleAswp();
	});
}
async function createAssetSwapButton() {
	setInterval(function () {
		if (document.querySelector("div.top-right") != null) {
			if (
				!document.querySelector("#app > div.overlay > div.top-right > div.buttons.button-bar > div > button:nth-child(1) > span > svg").classList.contains("bi") &&
				!document.querySelector("#app > div.overlay > div.top-right > div.buttons.button-bar > div > button:nth-child(2) > span > svg").classList.contains("bi")
			) {
				var aswp_button = document.querySelector("div.top-right > div.buttons.button-bar > div > button > span > div").parentElement.parentElement.cloneNode(true);
				var aswp_parent_div = document.querySelector("#app > div.overlay > div.top-right > div.buttons.button-bar > div");
				aswp_parent_div.insertBefore(aswp_button, aswp_parent_div.children[0]);
				var aswp_svg = document.querySelector("#app > div.overlay > div.top-right > div.buttons.button-bar > div > button:nth-child(1) > span > svg");
				aswp_svg.outerHTML =
					'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-layers-fill" viewBox="0 0 16 16"><path d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4z"/><path d="m2.125 8.567-1.86.992a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882l-1.86-.992-5.17 2.756a1.5 1.5 0 0 1-1.41 0l-5.17-2.756z"/></svg>';
				var aswp_key = document.querySelector("#app > div.overlay > div.top-right > div.buttons.button-bar > div > button:nth-child(1) > span > div");
				aswp_key.innerText = "K";
				document.querySelector("#app > div.overlay > div.top-right > div.buttons.button-bar > div > button:nth-child(1)").addEventListener("mousedown", () => {
					if (document.querySelector("#app > div.modals-container > div") == null && document.querySelector("#app > div.ui > div").style.display == "none") {
						toggleAswp();
					}
				});
			}
		}
	}, 500);
}
createAssetSwapButton();

// OVERLAY
var ctrl_overlay = document.createElement("div");
document.querySelector("div.game").insertBefore(ctrl_overlay, document.querySelector("div.game").children[0]);
ctrl_overlay.outerHTML = '<div id="ctrl-overlay" style="width: 100%;height: 100%;position: absolute;display: block;z-index:10000;pointer-events:none;"></div>';
var aim_overlay = document.createElement("hr");
document.querySelector("div.game").insertBefore(aim_overlay, document.querySelector("div.game").children[1]);
aim_overlay.outerHTML = '<hr id="aim-overlay" style="border: 1px #fff dotted;border-image: linear-gradient(to right, #f32d, #f320) 1;transform-origin: left;position: absolute;top: 50%;left: 50%;width: 40vw;display:none;pointer-events:none;">';

listForAnimalsWithAimOverlay = [61, 93, 94, 113];
listForGamemodesWithAimOverlay = [1, 2, 6];
setInterval(function () {
	if (game.currentScene != null) {
		if (game.currentScene.myAnimal != null) {
			if (game.currentScene.myAnimal._visibleFishLevel == 101) {
				document.getElementById("aim-overlay").style.transform = "rotate(" + ((game.currentScene.myAnimal.inner.rotation * 180) / Math.PI + 90) + "deg)";
			} else {
				document.getElementById("aim-overlay").style.transform = "rotate(" + ((game.currentScene.myAnimal.inner.rotation * 180) / Math.PI - 90) + "deg)";
			}
		}
	}
}, 10);
function showCtrlOverlay(e) {
	if (e.ctrlKey || e.altKey) {
		if (game.currentScene != null) {
			if (game.currentScene.myAnimal != null) {
				if (game.currentScene.myAnimal._visibleFishLevel != 101) {
					document.getElementById("ctrl-overlay").style.pointerEvents = "all";
				} else if (!e.shiftKey) {
					if (game.currentScene.myAnimal._visibleFishLevel == 101) document.getElementById("ctrl-overlay").style.pointerEvents = "all";
				} else {
					document.getElementById("ctrl-overlay").style.pointerEvents = "none";
				}
			}
		}
	}
}
async function superShot() {
	game.inputManager.handleLongPress(1);
	setTimeout(() => {
		game.inputManager.handleLongPress(5000);
	}, 50);
	setTimeout(() => {
		game.inputManager.handleLongPress(5000);
	}, 100);
	setTimeout(() => {
		game.inputManager.handleLongPress(5000);
	}, 150);
	setTimeout(() => {
		game.inputManager.handleLongPress(5000);
	}, 200);
}
window.addEventListener(
	"keydown",
	function (e) {
		showCtrlOverlay(e);
		if (e.ctrlKey && listForAnimalsWithAimOverlay.includes(game.currentScene.myAnimal._visibleFishLevel) && listForGamemodesWithAimOverlay.includes(game.gameMode) && aim_helper_on) {
			document.getElementById("aim-overlay").style.display = "block";
		}
	},
	false
);
window.addEventListener(
	"click",
	function (e) {
		if (e.ctrlKey) {
			if (e.shiftKey && (game.currentScene.myAnimal._visibleFishLevel == 109 || game.currentScene.myAnimal._visibleFishLevel == 107)) {
				superShot();
			} else if (e.shiftKey && game.currentScene.myAnimal._visibleFishLevel != 101) {
				game.inputManager.handleLongPress(-5);
			} else {
				game.inputManager.handleLongPress(5000);
			}
		}
		if (e.altKey) {
			game.inputManager.handleLongPress(350);
		}
	},
	false
);
window.addEventListener(
	"keyup",
	function (e) {
		if (!e.ctrlKey && !e.altKey) {
			document.getElementById("ctrl-overlay").style.pointerEvents = "none";
		}
		if (!e.ctrlKey) {
			document.getElementById("aim-overlay").style.display = "none";
		}
	},
	false
);
window.addEventListener("focus", () => {
	document.getElementById("ctrl-overlay").style.pointerEvents = "none";
	document.getElementById("aim-overlay").style.display = "none";
});

// SHOW ID
setInterval(() => {
	if (
		document.querySelector("#app > div.overlay > div.top-right > div.flex.flex-col > div.info.mb-1.mr-1").childElementCount != 5 ||
		document.querySelector("#app > div.overlay > div.top-right > div.flex.flex-col > div.info.mb-1.mr-1 > div:nth-child(5) > span").innerText != "ID: " + game.currentScene.myAnimal.id
	) {
		if (document.querySelector("#app > div.overlay > div.top-right > div.flex.flex-col > div.info.mb-1.mr-1 > div:nth-child(4)") != null) {
			document.querySelector("#app > div.overlay > div.top-right > div.flex.flex-col > div.info.mb-1.mr-1 > div:nth-child(4)").remove();
		}
		if (document.querySelector("#app > div.overlay > div.top-right > div.flex.flex-col > div.info.mb-1.mr-1 > div:nth-child(4)") != null) {
			document.querySelector("#app > div.overlay > div.top-right > div.flex.flex-col > div.info.mb-1.mr-1 > div:nth-child(4)").remove();
		}
		var id_label = document.querySelector("#app > div.overlay > div.top-right > div.flex.flex-col > div.info.mb-1.mr-1 > div.fps").cloneNode(true);
		var id_space = document.querySelector("#app > div.overlay > div.top-right > div.flex.flex-col > div.info.mb-1.mr-1 > div.flex-grow.mx-1").cloneNode(true);
		var info_div = document.querySelector("#app > div.overlay > div.top-right > div.flex.flex-col > div.info.mb-1.mr-1");
		info_div.appendChild(id_space);
		info_div.appendChild(id_label);
		id_label.classList = "fps fps--1";
		var id_text = document.querySelector("#app > div.overlay > div.top-right > div.flex.flex-col > div.info.mb-1.mr-1 > div:nth-child(5) > span");
		id_text.innerText = "ID: null";
	}
	if (game.currentScene != null) {
		id_text.innerText = "ID: " + game.currentScene.myAnimal.id;
	}
}, 5000);

// MUTED CHAT MESSAGES
function matches(text, partial) {
	return text.toLowerCase().indexOf(partial.toLowerCase()) > -1;
}
function arrayRemove(arr, value) {
	return arr.filter(function (ele) {
		return ele != value;
	});
}
//deleting muted chat messages
setInterval(function () {
	if (game.currentScene != null) {
		for (let i = 0; i < game.currentScene.chatMessages.length; i++) {
			if (mutedList.includes(String(game.currentScene.chatMessages[i].originalMessage.senderRoomId))) {
				game.currentScene.chatMessages[i].renderable = false;
			}
		}
	}
}, 200);

// KEYBINDS
document.body.addEventListener("keydown", function (e) {
	if (e.key == "Escape") {
		e.preventDefault();
		if (document.querySelector("#app > div.ui > div").style.display != "none") {
			document.querySelector("div.el-col.el-col-8.is-guttered > button").click();
		}
	}
	if (e.key.toLowerCase() == "k") {
		if (document.querySelector("#app > div.modals-container > div") == null && document.querySelector("#app > div.ui > div").style.display == "none" && document.activeElement.localName != "input") {
			e.preventDefault();
			toggleAswp();
		}
	}
});

// SLASH COMMANDS
mutedList = [];
chat_value = "";
targetLockScriptRan = 0;
targetID = 0;
window.addEventListener("keyup", function (e) {
	if (e.keyCode == 13) {
		if (matches(chat_value, "/unmute ")) {
			muteID = chat_value.replace("/unmute ", "");
			if (mutedList.includes(muteID)) {
				mutedList = arrayRemove(mutedList, muteID);
			}
		} else if (matches(chat_value, "/mute ")) {
			muteID = chat_value.replace("/mute ", "");
			if (!mutedList.includes(muteID)) {
				mutedList.push(muteID);
			}
		} else if (matches(chat_value, "/settarget")) {
			targetID = parseInt(chat_value.replace("/settarget ", "").replace("/settarget", ""));
			game.currentScene.uiManager.setTargetId(0);
			game.currentScene.uiManager.setTargetId(targetID);
			if (game.currentScene.myAnimal != null && targetLockScriptRan == 0) {
				targetLockScriptRan = 1;
				click0 = game.currentScene.entityManager.getEntity(targetID).relatedObjects.children[2].speedMultiplierDisplay.visible;
				setInterval(function () {
					if (targetID != null && game.currentScene.entityManager.getEntity(targetID) != null) {
						click1 = game.currentScene.entityManager.getEntity(targetID).relatedObjects.children[2].speedMultiplierDisplay.visible;
						c = { x: innerWidth / 2 + game.currentScene.entityManager.getEntity(targetID).position.x - game.currentScene.myAnimal.position._x, y: innerHeight / 2 + game.currentScene.entityManager.getEntity(targetID).position.y - game.currentScene.myAnimal.position._y };
						mapeditor.dispatchEvent(new MouseEvent("pointermove", { clientX: c.x, clientY: c.y }));
						if (click0 != click1) {
							click0 = click1;
							if (click1) {
								game.inputManager.spaceKeyDown();
							} else {
								game.inputManager.spaceKeyUp();
							}
						}
					}
				});
			}
		} else if (matches(chat_value, "/help")) {
			game.currentScene.showMessagePopup("/mute <id> - mute a player\\n/unmute <id> - unmute a player\\n/settarget <entityid> - lock on to an animal", 5000, 0);
		}
	} else {
		chat_value = document.querySelector("#app > div.overlay > div.chat-input.horizontal-center > input").value;
	}
});

aimBotRan = document.getElementById("aimbotran_placeholder");
aimBot = false;
mouseX = 0;
mouseY = 0;
whitelistedAimbotAnimalId = [18, 26, 29, 33, 44, 47, 52, 67, 77, 88];
if (!aimBotRan) {
	var placeholder = document.createElement("div");
	placeholder.setAttribute("id", "aimbotran_placeholder");
	document.body.appendChild(placeholder);
	aimBotRan = true;
	window.addEventListener("keyup", (e) => {
		if (e.key.toLowerCase() == "a" && document.querySelector("#app > div.modals-container > div") == null && document.querySelector("#app > div.ui > div").style.display == "none" && document.activeElement.localName != "input") {
			aimBot = !aimBot;
			game.currentScene.uiManager.setTargetId(0);
			if (aimBot) {
				game.currentScene.showMessagePopup("Aim assist on", 1000, 0);
			} else {
				game.currentScene.showMessagePopup("Aim assist off", 1000, 0);
			}
		}
	});
	setInterval(() => {
		if (aimBot && game.currentScene != null) {
			if (game.currentScene.myAnimal != null) {
				closestEntityDistance = 9999999;
				closestEntity = 0;
				for (let i = 0; i < game.currentScene.entityManager.animalsList.length; i++) {
					if (
						Math.sqrt(
							(mouseX - innerWidth / 2 - (game.currentScene.entityManager.animalsList[i].position.x - game.currentScene.myAnimal.position._x)) ** 2 + (mouseY - innerHeight / 2 - (game.currentScene.entityManager.animalsList[i].position.y - game.currentScene.myAnimal.position._y)) ** 2
						) < closestEntityDistance &&
						!game.currentScene.entityManager.animalsList[i].mine &&
						(game.currentScene.myAnimal.tribeId == null || game.currentScene.myAnimal.tribeId != game.currentScene.entityManager.animalsList[i].tribeId) &&
						!(game.gameMode == 2 && game.currentScene.entityManager.animalsList[i].nameObject._text.includes(game.currentScene.myAnimal.nameObject._text.slice(0, 10))) &&
						!whitelistedAimbotAnimalId.includes(game.currentScene.entityManager.animalsList[i].fishLevelData.fishLevel)
					) {
						closestEntityDistance = Math.sqrt(
							(mouseX - innerWidth / 2 - (game.currentScene.entityManager.animalsList[i].position.x - game.currentScene.myAnimal.position._x)) ** 2 + (mouseY - innerHeight / 2 - (game.currentScene.entityManager.animalsList[i].position.y - game.currentScene.myAnimal.position._y)) ** 2
						);
						closestEntity = game.currentScene.entityManager.animalsList[i].id;
					}
				}
			}
		}
	}, 50);
	window.addEventListener("mousemove", (e) => {
		mouseX = e.clientX;
		mouseY = e.clientY;
		if (aimBot && game.currentScene != null) {
			if (game.currentScene.myAnimal != null) {
				if (closestEntityDistance < 500) {
					if (closestEntity != game.currentScene.uiManager.targetId) {
						game.currentScene.uiManager.setTargetId(0);
						game.currentScene.uiManager.setTargetId(closestEntity);
					}
					c = { x: innerWidth / 2 + game.currentScene.entityManager.getEntity(closestEntity).position.x - game.currentScene.myAnimal.position._x, y: innerHeight / 2 + game.currentScene.entityManager.getEntity(closestEntity).position.y - game.currentScene.myAnimal.position._y };
					mapeditor.dispatchEvent(new MouseEvent("pointermove", { clientX: c.x, clientY: c.y }));
				} else {
					game.currentScene.uiManager.setTargetId(0);
				}
			}
		}
	});
	setInterval(() => {
		if (aimBot && game.currentScene != null) {
			if (game.currentScene.myAnimal != null) {
				if (closestEntityDistance < 200) {
					if (closestEntity != game.currentScene.uiManager.targetId) {
						game.currentScene.uiManager.setTargetId(0);
						game.currentScene.uiManager.setTargetId(closestEntity);
					}
					c = { x: innerWidth / 2 + game.currentScene.entityManager.getEntity(closestEntity).position.x - game.currentScene.myAnimal.position._x, y: innerHeight / 2 + game.currentScene.entityManager.getEntity(closestEntity).position.y - game.currentScene.myAnimal.position._y };
					mapeditor.dispatchEvent(new MouseEvent("pointermove", { clientX: c.x, clientY: c.y }));
				}
			}
		}
	}, 50);
}

var spin_direction = 0;
const spin_angle = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360];
const spin_radius = 300;
var isSpinning = false;
document.body.addEventListener("keydown", function (e) {
	if (e.key.toLowerCase() == "z") {
		if (document.querySelector("#app > div.modals-container > div") == null && document.querySelector("#app > div.ui > div").style.display == "none" && document.activeElement.localName != "input") {
			e.preventDefault();
			isSpinning = true;
		}
	}
});
document.body.addEventListener("keyup", function (e) {
	if (e.key.toLowerCase() == "z") {
		if (document.querySelector("#app > div.modals-container > div") == null && document.querySelector("#app > div.ui > div").style.display == "none" && document.activeElement.localName != "input") {
			e.preventDefault();
			isSpinning = false;
		}
	}
});
setInterval(() => {
	if (isSpinning) {
		let spin_coords_x = Math.round(spin_radius * Math.sin((Math.PI * 2 * spin_angle[spin_direction]) / 360));
		let spin_coords_y = Math.round(spin_radius * Math.cos((Math.PI * 2 * spin_angle[spin_direction]) / 360));
		mapeditor.dispatchEvent(new MouseEvent("pointermove", { clientX: innerWidth / 2 + spin_coords_x, clientY: innerHeight / 2 + spin_coords_y }));
		spin_direction = (spin_direction + 1) % 11;
	}
}, 15);

game.currentScene.toggleFlash = function () {};
game.currentScene.terrainManager.shadow.setShadowSize(1000000);
game.currentScene.terrainManager.shadow.setShadowSize = function () {};

setInterval(function () {
	for (let i = 0; i < game.currentScene.entityManager.animalsList.length; i++) {
		if (game.currentScene.entityManager.animalsList[i].alpha < 0.5) {
			game.currentScene.entityManager.animalsList[i].alpha = 0.5;
		}
		if (game.currentScene.entityManager.animalsList[i].inner.alpha < 0.5) {
			game.currentScene.entityManager.animalsList[i].inner.alpha = 0.5;
		}
		if (game.currentScene.entityManager.animalsList[i].relatedObjects.visible != true) {
			game.currentScene.entityManager.animalsList[i].relatedObjects.visible = true;
		}
		if (game.currentScene.entityManager.animalsList[i].nameObject.visible != true) {
			game.currentScene.entityManager.animalsList[i].nameObject.visible = true;
		}
	}
});

setInterval(function () {
	game.viewport.clampZoom({
		minWidth: 0,
		maxWidth: 1e7
	});
}, 200);

game.currentScene.viewingGhosts = true;

game.currentScene.foodGlowContainer.zOrder = 996;
game.currentScene.foodContainer.zOrder = 997;
game.currentScene.namesLayer.zOrder = 998;
game.currentScene.animalsContainer.zOrder = 999;
game.currentScene.barsLayer.zOrder = 1000;
game.currentScene.chatContainer.zOrder = 1001;
setInterval(function () {
	game.currentScene.ceilingsContainer.alpha = 0.3;
}, 200);
