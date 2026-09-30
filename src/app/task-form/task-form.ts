import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../app';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  @Output() taskAdded = new EventEmitter<Task>();

  title = '';
  priority: Task['priority'] = 'Medium';

  addTask(): void {
    if (!this.title.trim()) {
      return;
    }

    const newTask: Task = {
      title: this.title.trim(),
      priority: this.priority,
      completed: false,
    };

    this.taskAdded.emit(newTask);

    this.clearForm();
  }

  clearForm(): void {
    this.title = '';
    this.priority = 'Medium';
  }
}
