document.getElementById('add-btn').addEventListener('click', addTask);
document.getElementById('todo-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText} 
            <button class="delete-btn">X</button>
        `;
        document.getElementById('todo-list').appendChild(li);
        taskInput.value = '';

        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });
    }
}

function toggleTheme() {
    const body = document.body;
    const button = document.getElementById('theme-toggle');
    
    // Toggle between light and dark themes
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');

    // Change button text
    if (body.classList.contains('dark-theme')) {
        button.textContent = 'Switch to Light Mode';
    } else {
        button.textContent = 'Switch to Dark Mode';
    }
}
