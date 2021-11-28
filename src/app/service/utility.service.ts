import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { TaskList } from "../models/taskList.model";

@Injectable({
    providedIn: "root"
})

export class UtilityService {
    constructor( private readonly http: HttpClient) {}

    getTaskList(): Observable<TaskList> {
        return this.http.get<TaskList>('assets/jsons/task-list.json');
    }

}
