// Tools

// forEach method to loop through anything
var forEach = function(array, callback, scope) {
	for (var i = 0; i < array.length; i++) {
		callback.call(scope, array[i], i);
	}
};

// Sidebar swiping
var sidebar = document.querySelector(".sidebar");

if (sidebar) {
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

// Initialize galleries if we have any
var galleries = document.querySelectorAll(".photo-gallery");
if (galleries && typeof lightGallery !== "undefined") {
	forEach(galleries, function(gallery) {
		lightGallery(gallery);
	});
}
