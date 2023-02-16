const spmenu_trigger = document.getElementById("spmenu_trigger");
const sp_navigation = document.getElementById("sp_navigation");
if (spmenu_trigger) {
	spmenu_trigger.addEventListener("click", () => {
		spmenu_trigger.classList.toggle("is-active");
		sp_navigation.classList.toggle("is-active");
	});
}