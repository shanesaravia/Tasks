function addTask() {
	let item = document.createElement('li');
	item.className = 'list-group-item';
	let inputValue = document.getElementById('task-input').value;
	let text = document.createTextNode(inputValue);
	item.appendChild(text);
	document.getElementById('task-input').value = "";
	if (inputValue == '') {
		alert('Cannot add empty task.');
	} else {
		document.getElementById('task-list').appendChild(item);
		addDelete();
	}
}

function addDelete() {
	let tasks = document.getElementsByTagName('li');
	let delButton = document.createElement('span');
	let text = document.createTextNode('x');
	delButton.className = 'deletebtn';
	delButton.href="#";
	delButton.appendChild(text);
	for (i = 0; i < tasks.length; i++) {
		tasks[i].appendChild(delButton);
		delButton.addEventListener('click', function() {
			let task = this.parentElement;
			task.parentElement.removeChild(task);
		})
	}
}

document.getElementById('add-task').addEventListener('click', function() {
	addTask();
});

document.getElementById('task-input').addEventListener('keypress', function(e) {
	if(e.code == 'Enter') {
		addTask();
	}
});