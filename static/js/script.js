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