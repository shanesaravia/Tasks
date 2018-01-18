function addTask() {
	let item = document.createElement('li');
	item.className = 'list-group-item';
	let inputValue = document.getElementById('task-input').value;
	let text = document.createTextNode(inputValue);
	item.appendChild(text);
	document.getElementById('task-input').value = "";
	if (inputValue === '') {
		alert('Cannot add empty task.');
	} else {
		document.getElementById('task-list').appendChild(item);
	}
}

// function removeTask() {
// 	let tasks = document.getElementsByTagName('li');
// 	for ()
// };

document.getElementById('add-task').addEventListener('click', function() {
	addTask();
});

document.getElementById('task-input').addEventListener('keypress', function(e) {
	if(e.code == 'Enter') {
		addTask();
	}
});

// console.log(tasks);


// function myFunction() {
//     var btn = document.createElement("BUTTON");
//     var t = document.createTextNode("CLICK ME");
//     btn.appendChild(t);
//     document.body.appendChild(btn);
// }


// Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }