document.addEventListener("DOMContentLoaded", function () {
	const navLinks = document.querySelectorAll("nav ul li a");
	const sections = document.querySelectorAll("section");

	// Set the default section and link
	const defaultSectionId = "sprint3"; // Change this to match the desired default section's ID
	const defaultSection = document.getElementById(defaultSectionId);

	// Show the default section and add "active" class to its corresponding link
	defaultSection.style.display = "block";
	navLinks.forEach((link) => {
		if (link.getAttribute("href") === `#${defaultSectionId}`) {
			link.classList.add("active");
		}
	});

	// Add click event listeners to navigation links
	navLinks.forEach((link) => {
		link.addEventListener("click", function (event) {
			event.preventDefault();
			const targetId = this.getAttribute("href").substring(1);

			sections.forEach((section) => {
				if (section.id === targetId) {
					section.style.display = "block";
				} else {
					section.style.display = "none";
				}
			});

			navLinks.forEach((item) => {
				item.classList.remove("active");
			});
			this.classList.add("active");
		});
	});
});
