export async function toggleTask(taskId) {
    try {
        const response = await fetch(`/tasks/${taskId}/toggle`, {
            method: 'POST',

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

        updateTaskStatusInUI(taskId, data.newStatus);

    } catch (error) {
        console.error('Error deleting task:', error);
    }
}

function updateTaskStatusInUI(taskId, newStatus)
{
    const taskElement = document.querySelector(`#task-${taskId}`);

    if (!taskElement) {
        return;
    }

    const badge = taskElement.querySelector('.task-status');

    if (newStatus) {
        badge.textContent = 'Done';
        badge.className = 'badge bg-success task-status';
    } else {
        badge.textContent = 'Not Done';
        badge.className = 'badge bg-secondary task-status';
    }
}

