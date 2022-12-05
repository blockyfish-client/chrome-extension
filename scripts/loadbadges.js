function insertClientOwnerBadge() {
	if (document.querySelector("#app > div.vfm.vfm--inset.vfm--fixed.modal > div.vfm__container.vfm--absolute.vfm--inset.vfm--outline-none.modal-container > div > div > div > div.el-row.header > div.el-col.el-col-24.auto-col.fill > div > div:nth-child(2) > img") == null) {
		try {
			badgeParentDiv = document.querySelector("#app > div.vfm.vfm--inset.vfm--fixed.modal > div.vfm__container.vfm--absolute.vfm--inset.vfm--outline-none.modal-container > div > div > div > div.el-row.header > div.el-col.el-col-24.auto-col.fill > div");
			clientOwnerBadge = document.createElement("div");
			badgeParentDiv.insertBefore(clientOwnerBadge, badgeParentDiv.children[1]);
			clientOwnerBadge.outerHTML = '<div class="el-image verified-icon el-tooltip__trigger el-tooltip__trigger" style="height: 1rem;margin-right: 0.25rem;width: 1rem;"><img src="/img/verified.png" class="el-image__inner" style="filter: hue-rotate(90deg);"></div>';
		} catch {
			setTimeout(insertClientOwnerBadge, 500);
		}
	}
}
function insertClientVerifiedBadge() {
	if (document.querySelector("#app > div.vfm.vfm--inset.vfm--fixed.modal > div.vfm__container.vfm--absolute.vfm--inset.vfm--outline-none.modal-container > div > div > div > div.el-row.header > div.el-col.el-col-24.auto-col.fill > div > div:nth-child(2) > img") == null) {
		try {
			badgeParentDiv = document.querySelector("#app > div.vfm.vfm--inset.vfm--fixed.modal > div.vfm__container.vfm--absolute.vfm--inset.vfm--outline-none.modal-container > div > div > div > div.el-row.header > div.el-col.el-col-24.auto-col.fill > div");
			clientOwnerBadge = document.createElement("div");
			badgeParentDiv.insertBefore(clientOwnerBadge, badgeParentDiv.children[1]);
			clientOwnerBadge.outerHTML = '<div class="el-image verified-icon el-tooltip__trigger el-tooltip__trigger" style="height: 1rem;margin-right: 0.25rem;width: 1rem;"><img src="/img/verified.png" class="el-image__inner" style="filter: hue-rotate(165deg);"></div>';
		} catch {
			setTimeout(insertClientVerifiedBadge, 500);
		}
	}
}

async function main() {
	data = await fetch("https://blockyfish.netlify.app/data.json")
		.then((e) => e.json())
		.then((e) => {
			return e;
		});
	ownerBadge = data.verified;
	verifiedBadge = data.verified2;
	var url = window.location.href.replace(/\?host=....../i, "");

	var currentUser = {};
	currentUser = await fetch(url.replace("https://beta.deeeep.io/u", "https://apibeta.deeeep.io/users/u"))
		.then((e) => e.json())
		.then((e) => {
			return e;
		});
	userId = currentUser.id;

	console.log(ownerBadge);
	if (ownerBadge.includes(userId)) {
		insertClientOwnerBadge();
	}
	if (verifiedBadge.includes(userId)) {
		insertClientVerifiedBadge();
	}
}
if (window.location.href.match("deeeep.io/u/")) main();

var oldUrl = window.location.href;
setInterval(function () {
	if (oldUrl != window.location.href) {
		if (window.location.href.match("deeeep.io/u/")) main();
		oldUrl = window.location.href;
	}
}, 500);
