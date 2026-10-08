# Task Manager

A simple Task Management application built with **Laravel**, **Blade**, **Eloquent ORM**, **Bootstrap**, and **AJAX**.

## Features

* View all tasks
* Create a new task
* Edit an existing task
* Delete a task
* Toggle task status between:
  * Not Done
  * Done
* Form validation
* AJAX-based CRUD operations
* Responsive UI using Bootstrap

## Technologies

* PHP
* Laravel
* MySQL
* Blade
* Eloquent ORM
* Bootstrap 5
* JavaScript
* Fetch API / AJAX
* Vite

## Requirements

Before running the project, make sure you have:

* PHP 8.2+
* Composer
* MySQL
* Node.js & npm

## Installation

### 1. Clone the project

```bash
git clone <repository-url>
cd task-project
```

### 2. Install PHP dependencies

```bash
composer install
```

### 3. Install JavaScript dependencies

```bash
npm install
```

### 4. Configure environment

Create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Then configure your database:

```env
DB_DATABASE=task-project
DB_USERNAME=root
DB_PASSWORD=
```

### 5. Generate application key

```bash
php artisan key:generate
```

### 6. Run migrations

```bash
php artisan migrate
```

### 7. Build frontend assets

For development:

```bash
npm run dev
```

### 8. Start Laravel server

In another terminal:

```bash
php artisan serve
```

The application will be available at:

```text
http://127.0.0.1:8000
```

## Project Structure

```text
app/
├── Http/
│   ├── Controllers/
│   │   └── TaskController.php
│   └── Requests/
│       ├── StoreTaskRequest.php
│       └── UpdateTaskRequest.php
│
├── Models/
│   └── Task.php
│
resources/
├── views/
│   ├── layouts/
│   │   └── app.blade.php
|   |   └── header.blade.php 
│   └── tasks/
│       ├── index.blade.php
│       ├── add-task-modal.blade.php
|       └── edit-task-modal.blade.php
│
└── js/tasks
    ├── add-task.js
    ├── edit-task.js
    ├── toggle-task.js
    ├── delete-task.js
    └── btns-event-listener.js

database/
└── migrations/
    └── ...create_tasks_table.php

routes/
└── web.php
```

## AJAX

Task operations are handled asynchronously using the JavaScript Fetch API.

The following operations use AJAX:

* Create Task
* Edit Task
* Delete Task
* Toggle Task Status

This allows the task list to be updated without reloading the entire page.

## Validation

Task creation and editing use Laravel Form Requests:

* `StoreTaskRequest`
* `UpdateTaskRequest`

Validation errors are returned and displayed in the frontend.

## Notes

The application uses Laravel Route Model Binding for task-related routes and Eloquent ORM for database operations.
Bootstrap is used for the UI components, including forms, buttons, cards, and modals.