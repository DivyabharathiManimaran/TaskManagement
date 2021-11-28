import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Item, TaskList } from '../models/taskList.model';
import { UtilityService } from '../service/utility.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { TaskCompleteDialogComponent } from '../dialog-component/task-complete.component';

@Component({
  selector: 'app-tasks-component',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
    completed = new Map<number,boolean>();
    taskList?: Item[];
    showSideNav: boolean = false;
    userName: string = 'Monja Meier';

    constructor(private readonly utilityService: UtilityService,
        private dialog: MatDialog) { }

    ngOnInit() {
        this.utilityService.getTaskList().subscribe( (resp: TaskList) => {
            this.taskList = resp.taskList;
        });
    }

    markAsComplete(index:number) {
        if(!this.showSideNav) {
            if(!this.completed.get(index)) {
                navigator.vibrate(200);
                const dialogConfig = new MatDialogConfig();
                dialogConfig.panelClass='dialog-style';
                dialogConfig.maxWidth='600px';
                dialogConfig.disableClose = true;
                this.dialog.open(TaskCompleteDialogComponent,dialogConfig).afterClosed().subscribe(()=> {
                    this.completed.set(index,true);
                });
            }
        }
    }

    showNav(event: Event) {
        this.showSideNav = true;
        event.stopPropagation();
    }

    hideNav(event: Event) {
        if(this.showSideNav) {
            this.showSideNav = false;
            event.stopPropagation();
        }
    }

}
