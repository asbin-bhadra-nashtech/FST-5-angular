import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../app';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  @Input() tasks: Task[] = [];

  @Output() taskToggled = new EventEmitter<number>();

  toggleTask(index: number): void {
    this.taskToggled.emit(index);
  }
}
