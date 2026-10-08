# Task Manager

یک پروژه ساده مدیریت وظایف (Task Manager) که با استفاده از **Laravel**، **Blade**، **Eloquent ORM**، **Bootstrap** و **AJAX** توسعه داده شده است.

## امکانات

* نمایش لیست وظایف
* ایجاد وظیفه جدید
* ویرایش وظیفه
* حذف وظیفه
* تغییر وضعیت وظیفه بین:

  * انجام نشده
  * انجام شده
* اعتبارسنجی اطلاعات
* انجام عملیات CRUD به صورت AJAX
* رابط کاربری واکنش‌گرا با Bootstrap

## تکنولوژی‌های استفاده شده

* PHP
* Laravel
* MySQL
* Blade
* Eloquent ORM
* Bootstrap 5
* JavaScript
* Fetch API / AJAX
* Vite

## پیش‌نیازها

قبل از اجرای پروژه، موارد زیر باید روی سیستم نصب باشند:

* PHP 8.2+
* Composer
* MySQL
* Node.js و npm

## نصب و اجرا

### 1. دریافت پروژه

```bash
git clone https://github.com/Erfan-BT/laravel-task-manager.git
cd laravel-task-manager
```

### 2. نصب وابستگی‌های PHP

```bash
composer install
```

### 3. نصب وابستگی‌های JavaScript

```bash
npm install
```

### 4. تنظیم Environment

فایل `.env` را با استفاده از `.env.example` ایجاد کنید.

در Windows:

```bash
copy .env.example .env
```

سپس اطلاعات دیتابیس را در فایل `.env` تنظیم کنید:

```env
DB_DATABASE=task-project
DB_USERNAME=root
DB_PASSWORD=
```

### 5. ایجاد Application Key

```bash
php artisan key:generate
```

### 6. اجرای Migration

```bash
php artisan migrate
```

### 7. اجرای Vite

برای اجرای بخش Frontend:

```bash
npm run dev
```

این Terminal را باز نگه دارید.

### 8. اجرای سرور Laravel

یک Terminal دیگر باز کرده و اجرا کنید:

```bash
php artisan serve
```

سپس پروژه از طریق آدرس زیر قابل دسترسی خواهد بود:

```text
http://127.0.0.1:8000
```

## ساختار اصلی پروژه

```text
app/
├── Http/
│   ├── Controllers/
│   │   └── TaskController.php
│   └── Requests/
│       ├── StoreTaskRequest.php
│       └── UpdateTaskRequest.php
│
└── Models/
    └── Task.php

resources/
├── views/
│   ├── layouts/
│   │   ├── app.blade.php
│   │   └── header.blade.php
│   └── tasks/
│       ├── index.blade.php
│       ├── add-task-modal.blade.php
│       └── edit-task-modal.blade.php
│
└── js/
    └── tasks/
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

عملیات مربوط به Taskها با استفاده از **Fetch API** به صورت AJAX انجام می‌شوند.

عملیات زیر بدون Reload شدن کامل صفحه انجام می‌شوند:

* ایجاد Task
* ویرایش Task
* حذف Task
* تغییر وضعیت Task

این کار باعث می‌شود لیست Taskها بدون بارگذاری مجدد صفحه به‌روزرسانی شود.

## اعتبارسنجی

برای ایجاد و ویرایش Taskها از Laravel Form Request استفاده شده است:

* `StoreTaskRequest`
* `UpdateTaskRequest`

خطاهای اعتبارسنجی دریافت شده و در رابط کاربری نمایش داده می‌شوند.

## نکات

در این پروژه برای Routeهای مربوط به Task از **Laravel Route Model Binding** و برای عملیات دیتابیس از **Eloquent ORM** استفاده شده است.

همچنین Bootstrap برای طراحی رابط کاربری و ایجاد فرم‌ها، دکمه‌ها، کارت‌ها و Modalها استفاده شده است.
