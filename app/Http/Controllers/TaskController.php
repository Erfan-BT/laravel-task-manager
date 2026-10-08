<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;

class TaskController extends Controller
{
    public function index() 
    {
        $tasks = Task::all();

        return view('tasks.index', compact('tasks'));
    }

    public function show(Task $task) 
    {
        return response()->json([
            'success' => true,
            'msg' => 'Task Successfully Founded',
            'task' => $task,
        ]);
    }

    public function store(StoreTaskRequest $request)
    {
        $validated = $request->validated();

        $task = Task::create($validated);

        return response()->json([
            'success' => true,
            'msg' => 'Task Created Successfully',
            'task' => $task,
        ], 201);
    }

    public function toggle(Task $task)
    {
        $task->update([
            'status' => !$task->status,
        ]);

        return response()->json([
            'success' => true,
            'msg' => 'Task Status Changed Successfully',
            'newStatus' => $task->status
        ]);
    }

    public function update(UpdateTaskRequest $request, Task $task)
    {
        $validated = $request->validated();

        $task->update($validated);

        return response()->json([
            'success' => true,
            'msg' => 'Task Updated Successfully',
            'task' => $task->fresh()
        ]);
    }

    public function destroy(Task $task)
    {
        $task->delete();

        return response()->json([
            'success' => true,
            'msg' => 'Task Deledet Successfully',
            'taskId' => $task->id
        ], 200);
    }
}