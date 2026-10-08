export async function deleteTask(taskId) {
    try {
        const response = await fetch(`/tasks/${taskId}`, {
            method: 'DELETE',

            headers: {
                'Accept': 'application/json',

                'X-CSRF-TOKEN': document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute('content'),
            },
        });

        const data = await response.json();

        if (!response.ok) {
            console.error(data);
            return;
        }

        const taskElement = document.querySelector(`#task-${data.taskId}`);

        if (taskElement) {
            taskElement.remove();
        }

        if (tasksList.childElementCount === 0) {
            const noTasksMessage = document.querySelector('#noTasksMessage');
            if (!noTasksMessage) {
                tasksList.innerHTML = `<div class="col-12" id="noTasksMessage">
                    <div class="alert alert-info">
                        No tasks found.
                    </div>
                </div>`
            }
        }

    } catch (error) {
        console.error('Error deleting task:', error);
    }
}