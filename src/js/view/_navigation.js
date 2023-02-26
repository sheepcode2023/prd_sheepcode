const spmenu_trigger = document.getElementById("spmenu_trigger");
const sp_navigation = document.getElementById("sp_navigation");
if (spmenu_trigger) {
	spmenu_trigger.addEventListener("click", () => {
		spmenu_trigger.classList.toggle("is-active");
		sp_navigation.classList.toggle("is-active");
	});
}

const sp_navItems = document.querySelectorAll(".l-navigation__item");

sp_navItems.forEach((sp_navItem) => {
	sp_navItem.addEventListener("click", () => {
		spmenu_trigger.classList.toggle("is-active");
		sp_navigation.classList.toggle("is-active");
	});
});
