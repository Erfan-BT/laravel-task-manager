export async function openEditModal(taskId)
{
    try {

        const response = await fetch(`/tasks/${taskId}`, {
            method: 'GET',

            headers: {
                'Accept': 'application/json',
            },
        });

        const data = await response.json();

        if (!response.ok) {
            console.error(data);
            return;
        }

        const task = data.task;

        document.querySelector('#editTaskId').value = task.id;

        document.querySelector('#editTitle').value = task.title;

        document.querySelector('#editDescription').value =
            task.description ?? '';

        clearEditErrors();

        const modalElement = document.querySelector('#editTaskModal');

        const modal = bootstrap.Modal.getOrCreateInstance(
            modalElement
        );

        modal.show();

    } catch (error) {

        console.error('Error loading task:', error);

    }
}

const editTaskForm = document.querySelector('#editTaskForm');

editTaskForm.addEventListener('submit', async (event) => {

    event.preventDefault();

    clearEditErrors();

    const taskId = document.querySelector('#editTaskId').value;

    const newTitle = document.querySelector("#editTitle").value
    const newDescription = document.querySelector("#editDescription").value

    const formData = new FormData();

    formData.append('_method', 'PUT');
    formData.append('title', newTitle);
    formData.append('description', newDescription);

    try {

        const response = await fetch(`/tasks/${taskId}`, {
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

            showEditErrors(data.errors);

            return;
        }

        if (!response.ok) {

            console.error(data);

            return;
        }

        updateTaskInUI(data.task);

        const modalElement = document.querySelector('#editTaskModal');
        const modal = bootstrap.Modal.getInstance(modalElement);
        modal.hide();

    } catch (error) {
        console.error('Error updating task:', error);
    }
});

function showEditErrors(errors)
{
    if (errors.title) {

        document.querySelector('#editTitleError')
            .textContent = errors.title[0];

    }

    if (errors.description) {

        document.querySelector('#editDescriptionError')
            .textContent = errors.description[0];

    }
}

function clearEditErrors()
{
    document.querySelector('#editTitleError')
        .textContent = '';

    document.querySelector('#editDescriptionError')
        .textContent = '';
}

function updateTaskInUI(task)
{
    const taskElement =
        document.querySelector(`#task-${task.id}`);

    if (!taskElement) {
        return;
    }

    const title =
        taskElement.querySelector('.card-title');

    const description =
        taskElement.querySelector('.card-text');

    title.textContent = task.title;

    description.textContent =
        task.description ?? '';
}