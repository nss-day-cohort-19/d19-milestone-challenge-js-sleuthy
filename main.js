console.log("hello");

// variables from user inputs
var height = document.getElementById("tall");
var char = document.getElementById("char");
var submit = document.getElementById("button");

// function to create tree in console
function tree (event) {
  	for (var i = 1; i <= height.value; i++) {
    console.log(" ".repeat(height.value - i) + (char.value.repeat(i)) + (char.value.repeat(i - 1)) + " ".repeat(height.value - i));
	}
}

// function to ensure user input in both fields
function userInput (event) {
	if (height.value === "" || char.value === "") {
		alert("Both fields require a value!");
	} else {
		tree(event);
	}
}

// events for buttons and keypress (enter key in either box)
submit.addEventListener("click", userInput);

height.addEventListener("keypress", function (event) {
	if (event.which === 13) {
		userInput(event);
	}
});

char.addEventListener("keypress", function (event) {
	if (event.which === 13) {
		userInput(event);
	}
});