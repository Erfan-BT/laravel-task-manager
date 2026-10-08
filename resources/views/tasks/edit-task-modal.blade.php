<div class="modal fade" id="editTaskModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title">Edit Task</h5>

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <form id="editTaskForm">

                    <input type="hidden" id="editTaskId">
                    
                    <div class="mb-3">
                        <label for="editTitle" class="form-label">Title</label>
                        <input type="text" id="editTitle" name="title" class="form-control">

                        <div id="editTitleError" class="text-danger mt-1"></div>
                    </div>

                    <div class="mb-3">
                        <label for="editDescription" class="form-label">Description</label>
                        <textarea id="editDescription" name="description" class="form-control" rows="4"></textarea>

                        <div id="editDescriptionError" class="text-danger mt-1"></div>
                    </div>

                    <button type="submit" class="btn btn-primary">
                        Save Changes
                    </button>

                </form>
            </div>
            
        </div>
    </div>
</div>