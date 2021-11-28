import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { TasksComponent } from './task-component/tasks.component';
import { TaskCompleteDialogComponent } from './dialog-component/task-complete.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskCompleteDialogComponent   
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatTooltipModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    TaskCompleteDialogComponent
  ]
})
export class AppModule { }
