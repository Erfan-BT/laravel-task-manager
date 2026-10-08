@extends('layouts.app')
@section('title', 'Tasks')

@section('content')

    <div class="row" id="tasksList">

        @forelse ($tasks as $task)

            <div class="col-md-6 mb-3" id="task-{{ $task->id }}">

                <div class="card">

                    <div class="card-body">

                        <div class="d-flex justify-content-between align-items-start task-head">
                            <h5 class="card-title">{{ $task->title }}</h5>

                            @if ($task->status)
                                <span class="badge bg-success task-status">Done</span>
                            @else
                                <span class="badge bg-secondary task-status">Not Done</span>
                            @endif
                        </div>

                        <p class="card-text">{{ $task->description }}</p>

                        <div class="d-flex gap-2">
                            <button type="button" class="btn btn-sm btn-success toggle-task" data-id="{{ $task->id }}">
                                Toggle
                            </button>

                            <button type="button" class="btn btn-sm btn-warning edit-task" data-id="{{ $task->id }}">
                                Edit
                            </button>

                            <button type="button" class="btn btn-sm btn-danger delete-task" data-id="{{ $task->id }}">
                                Delete
                            </button>
                        </div>

                    </div>

                </div>

            </div>

        @empty

            <div class="col-12" id="noTasksMessage">
                <div class="alert alert-info">
                    No tasks found.
                </div>
            </div>

        @endforelse

    </div>


@endsection


@section('scripts')
    @vite('resources/js/tasks/add-task.js')
    @vite('resources/js/tasks/btns-event-listener.js')
@endsection