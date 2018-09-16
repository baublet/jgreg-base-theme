// Tools

// forEach method to loop through anything
const forEach = function(array, callback, scope) {
	for (var i = 0; i < array.length; i++) {
		callback.call(scope, array[i], i);
	}
};

// Sidebar swiping
const sidebar = document.querySelector(".sidebar");

if (sidebar && Hammer) {
	var hammerSidebar = new Hammer(sidebar);

	hammerSidebar.on("swiperight", function(ev) {
		if (!sidebar.classList) return;
		sidebar.classList.remove("shown");
	});

	hammerSidebar.on("swipeleft", function(ev) {
		if (!sidebar.classList) return;
		sidebar.classList.add("shown");
	});

	hammerSidebar.on("tap", function(ev) {
		if (!sidebar.classList) return;
		if (sidebar.classList.contains("shown")) {
			if (ev.target.href) {
				return;
			}
			sidebar.classList.remove("shown");
			return;
		}
		sidebar.classList.add("shown");
	});
}

// Navigation overlay
const navigationToggleCheck = document.getElementById("navigationToggleCheck")
if (navigationToggleCheck) {
	const bodyClasses = document.body.className
	navigationToggleCheck.addEventListener("change", event => {
		if (event.target.checked) {
			// Retain scroll position
			document.prevScrollPosition = window.pageYOffset
			document.body.className = bodyClasses + " navOpen"
			return
		}
		document.body.className = bodyClasses
		window.scrollTo(0, document.prevScrollPosition)
	})
}

// Initialize galleries if we have any
const galleries = document.querySelectorAll(".photo-gallery");
if (galleries && typeof lightGallery !== "undefined") {
	forEach(galleries, function(gallery) {
		lightGallery(gallery, { subHtmlSelectorRelative: true });
	});
}