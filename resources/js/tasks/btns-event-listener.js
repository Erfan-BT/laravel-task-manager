import { deleteTask } from "./delete-task";
import { openEditModal } from "./edit-task";
import { toggleTask } from "./toggle-task";

const tasksList = document.querySelector('#tasksList');

tasksList.addEventListener('click', async (event) => {

    const deleteBtn = event.target.closest('.delete-task');
    if (deleteBtn) {
        const taskId = deleteBtn.dataset.id;
        await deleteTask(taskId)
        return
    }


    const toggleBtn = event.target.closest('.toggle-task');
    if (toggleBtn) {
        const taskId = toggleBtn.dataset.id;
        await toggleTask(taskId)
        return
    }


    const editBtn = event.target.closest('.edit-task');
    if (editBtn) {
        const taskId = editBtn.dataset.id;
        await openEditModal(taskId);
        return;
    }
    
});