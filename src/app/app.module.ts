import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BtnComponent } from './btn/btn.component';
import { TaskComponent } from './task/task.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BtnComponent,
    TaskComponent,
    TaskItemComponent,
    AddTaskComponent,
  ],
  imports: [BrowserModule, FormsModule, FontAwesomeModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
