//when user scrolls page , we want to excute a function
window.onscroll = () => fireOnScroll();

function fireOnScroll() {
	//The height of the document element when scrolled
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

	var scrollHeight = document.documentElement.scrollHeight;
	var clientHeight = document.documentElement.clientHeight;
	// Total height of the document
	var height = scrollHeight - clientHeight;

	console.log({ winScroll }, { scrollHeight }, { clientHeight });

	//Percent conversion
	var scrolled = (winScroll / height) * 100;
	console.log(`scrolled ${scrolled} %`);

	document.getElementById("myBar").style.width = Math.ceil(scrolled) + "%";
}
