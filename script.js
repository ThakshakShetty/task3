document.getElementById('add-buttun').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();

    if (todoText !== '') {
        addTodoItem(todoText);
        input.value = '';
    }
});

function addTodoItem(todoText) {
    const todoList = document.getElementById('todo-list');

    const li = document.createElement('li');
    li.textContent = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-buttun';
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(li);
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);
}
