import {  Component, ElementRef, EventEmitter, Inject, Input, Output, ViewChild } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-task-complete-dialog',
  templateUrl: './task-complete.component.html',
  styleUrls: ['./task-complete.component.scss']
})
export class TaskCompleteDialogComponent {

    constructor(private dialogRef: MatDialogRef<TaskCompleteDialogComponent>){
    }

    close() {
        this.dialogRef.close();
    }
}
