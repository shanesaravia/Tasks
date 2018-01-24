taskInput = document.getElementById('task-input')
taskList = document.getElementById('task-list')
taskListCompleted = document.getElementById('task-list-completed')

function prepareTask(taskInput) {
	// Create necessary elements
	let checkBox = document.createElement('input');
	let listItem = document.createElement('li');
	let deleteButton = document.createElement('button');

	// Add necessary id's and classes
	deleteButton.className = 'deletebtn';
	checkBox.className = 'check-box';

	// Create text node with input value
	textNode = document.createTextNode(taskInput.value);
	// let taskInputNode = document.createTextNode(task.value);
	taskInput.value = '';

	// Modify attributes of created elements
	checkBox.type = 'checkbox';
	deleteButton.innerHTML = 'x';

	// Adding elements to list item
	listItem.appendChild(checkBox);
	listItem.appendChild(textNode);
	listItem.appendChild(deleteButton);

	return listItem;
};

function addTask(list) {
	listItem = prepareTask(taskInput);
	list.appendChild(listItem);
	listItem.children[1].addEventListener('click', deleteTask);
	listItem.children[0].addEventListener('change', completeTask);
};

function deleteTask() {
	let task = this.parentElement;
	task.parentElement.removeChild(task);
};

function completeTask() {
	if (this.checked) {
		taskListCompleted.appendChild(this.parentElement);
		this.parentElement.className = 'completed';
	} else {
		this.parentElement.classList.remove('completed');
		taskList.appendChild(this.parentElement);
	}
};

document.getElementById('add-task').addEventListener('click', function() {
	addTask(taskList);
});

document.getElementById('task-input').addEventListener('keypress', function(e) {
	if(e.code == 'Enter') {
		addTask(taskList);
	}
});