if (!window.navigation) {
	import("./x/@virtualstate/navigation/esnext/polyfill.mjs").then( install_router)
} else {
	install_router()
}

const log = console.log.bind(console);

function install_router(){
	log("Router installed");
	navigation.addEventListener("navigate", ev => {
		log("navigate event");

		if (!ev.canIntercept) return;
		//    if (ev.hashChange || ev.downloadRequest !== null) return; // MISSING
    if (ev.hashChange ) return;
		
    const [page, search] = ev.destination.url.split("?");

		log("Navigate", page);

		ev.preventDefault();
		return;
  })
	
}
