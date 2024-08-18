// Query for submit button and input task field
const submit = document.getElementById('submit');
const newTask = document.getElementById('task');

// Disable submit button by default
submit.disabled = true;

// Listen for input to be typed into the input field
newTask.addEventListener('input', function() {
    // Enable/disable submit button based on whether there's text in the input field
    submit.disabled = !this.value.trim();
});

// Listen for submission of form
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Find the task the user just submitted
    const task = newTask.value.trim();

    if (task) {
        // Create a list item for the new task and add the task to it
        const listItem = document.createElement('li');
        listItem.textContent = task;

        // Add new element to our unordered list
        document.getElementById('tasks').appendChild(listItem);

        // Clear the input field
        newTask.value = '';

        // Disable the submit button again
        submit.disabled = true;
    }

    // Return false to prevent the default form submission
    return false;
});