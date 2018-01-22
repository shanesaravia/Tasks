taskInput = document.getElementById('task-input')

function prepareTask(task) {
	// Create necessary variables
	taskList = document.getElementById('task-list')

	// Create necessary elements
	let checkBox = document.createElement('input');
	let listItem = document.createElement('li');
	let deleteButton = document.createElement('button');

	// Add necessary id's and classes
	deleteButton.className = 'delete-task';
	checkBox.className = 'check-box';

	// Create text node with input value
	let taskInputNode = document.createTextNode(task.value);
	task.value = '';

	// Modify attributes of created elements
	checkBox.type = 'checkbox';
	deleteButton.innerHTML = 'x';

	// Adding elements to list item
	listItem.appendChild(checkBox);
	listItem.appendChild(taskInputNode);
	listItem.appendChild(deleteButton);

	return listItem;
};

function addTask() {
	listItem = prepareTask(taskInput);
	taskList.appendChild(listItem);
	listItem.children[1].addEventListener('click', deleteTask);
	// listItem.children[0].addEventListener('cl')
	// console.log(listItem.children[0])
};

function deleteTask() {
	let task = this.parentElement;
	task.parentElement.removeChild(task);
};

function completeTask() {
	boxes = document.querySelectorAll('.check-box')
	for (i = 0; i < boxes.length; i++) {
		if (boxes[i].checked) {
			console.log('checked')
		}
	}
}

// function completeTask(task) {
// 	task.className = 'text-muted';
// 	return task.strike()
// }

document.getElementById('add-task').addEventListener('click', function() {
	addTask();
});

document.getElementById('task-input').addEventListener('keypress', function(e) {
	if(e.code == 'Enter') {
		addTask();
	}
});

console.log(document.querySelectorAll('.check-box').checked)
completeTask();


// function addTask() {
// 	let item = document.createElement('li');
// 	item.className = 'list-group-item';
// 	let inputValue = document.getElementById('task-input').value;
// 	let text = document.createTextNode(inputValue);
// 	item.appendChild(text);
// 	document.getElementById('task-input').value = "";
// 	if (inputValue == '') {
// 		alert('Cannot add empty task.');
// 	} else {
// 		document.getElementById('task-list').appendChild(item);
// 		addDelete();
// 	}
// }

// function addDelete() {
// 	let tasks = document.getElementsByTagName('li');
// 	let delButton = document.createElement('span');
// 	let text = document.createTextNode('x');
// 	delButton.className = 'deletebtn';
// 	delButton.href="#";
// 	delButton.appendChild(text);
// 	for (i = 0; i < tasks.length; i++) {
// 		tasks[i].appendChild(delButton);
// 		delButton.addEventListener('click', function() {
// 			let task = this.parentElement;
// 			task.parentElement.removeChild(task);
// 		})
// 	}
// }