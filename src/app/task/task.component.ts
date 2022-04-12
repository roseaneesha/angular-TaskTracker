import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  tsks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.gettingTasks().subscribe((t) => (this.tsks = t));
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteingTasks(task)
      .subscribe(
        (t) => (this.tsks = this.tsks.filter((t) => t.id !== task.id))
      );
  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updatingTasks(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addingTask(task).subscribe((t) => {
      this.tsks.push(t);
    });
  }
}
