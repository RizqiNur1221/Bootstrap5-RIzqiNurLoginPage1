function passwordVisibility() {
	const field = document.getElementById("password");
	const showPass = document.getElementById("showPass");
	const hidePass = document.getElementById("hidePass");

	// Toggle the password field type and icons
	if (field.type === "password") {
		field.type = "text";
		showPass.classList.add("d-none");
		hidePass.classList.remove("d-none");
	} else {
		field.type = "password";
		hidePass.classList.add("d-none");
		showPass.classList.remove("d-none");
	}
}
