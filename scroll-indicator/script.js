//when user scrolls page , we want to excute a function
window.onscroll = () => fireOnScroll();

function fireOnScroll() {
	//The height of the document element when scrolled
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

	// Total height of the document
	var height = document.documentElement.scrollHeight;

	console.log({ winScroll }, { height });

	//Percent conversion
	var scrolled = (winScroll / height) * 100;
	console.log(scrolled);

	document.getElementById("myBar").style.width = scrolled + "%";
}
