const createTaskForm = document.querySelector('#createTaskForm');
const tasksList = document.querySelector('#tasksList');


createTaskForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearCreateErrors()

    const formData = new FormData(createTaskForm);

    try {
        const response = await fetch('/tasks', {
            method: 'POST',

            headers: {
                'Accept': 'application/json',

                'X-CSRF-TOKEN': document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute('content'),
            },

            body: formData,
        });

        const data = await response.json();
        if (response.status === 422) {

            showCreateErrors(data.errors)

            return;
        }
        if (!response.ok) {
            console.error(data);
            return;
        }

        addTaskToUI(data.task);

        createTaskForm.reset();

    } catch (error) {
        console.error('Error creating task:', error);
    }
});


function addTaskToUI(task)
{
    const noTasksMessage = document.querySelector('#noTasksMessage');

    if (noTasksMessage) {
        noTasksMessage.remove();
    }

    const taskElement = document.createElement('div');

    taskElement.className = 'col-md-6 mb-3';

    taskElement.id = `task-${task.id}`;

    taskElement.innerHTML = `
        <div class="card">

            <div class="card-body">

                <div class="d-flex justify-content-between align-items-start">

                    <h5 class="card-title">
                        ${task.title}
                    </h5>

                    ${
                        task.status
                            ? '<span class="badge bg-success task-status">Done</span>'
                            : '<span class="badge bg-secondary task-status">Not Done</span>'
                    }

                </div>

                <p class="card-text">
                    ${task.description ?? ''}
                </p>

                <div class="d-flex gap-2">

                    <button
                        type="button"
                        class="btn btn-sm btn-success toggle-task"
                        data-id="${task.id}"
                    >
                        Toggle
                    </button>

                    <button
                        type="button"
                        class="btn btn-sm btn-warning edit-task"
                        data-id="${task.id}"
                    >
                        Edit
                    </button>

                    <button
                        type="button"
                        class="btn btn-sm btn-danger delete-task"
                        data-id="${task.id}"
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    `;

    tasksList.appendChild(taskElement);
}


function showCreateErrors(errors)
{
    if (errors.title) {

        document.querySelector('#titleError')
            .textContent = errors.title[0];

    }

    if (errors.description) {

        document.querySelector('#descriptionError')
            .textContent = errors.description[0];

    }
}

function clearCreateErrors()
{
    document.querySelector('#titleError')
        .textContent = '';

    document.querySelector('#descriptionError')
        .textContent = '';
}