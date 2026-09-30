import { Component } from '@angular/core';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';

export interface Task {
  title: string;
  priority: 'Low' | 'Medium' | 'High';
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [TaskForm, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  tasks: Task[] = [];

  addTask(task: Task): void {
    this.tasks = [...this.tasks, task];
  }

  toggleTask(index: number): void {
    this.tasks = this.tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task,
    );
  }

  get pendingTaskCount(): number {
    return this.tasks.filter((task) => !task.completed).length;
  }
}
