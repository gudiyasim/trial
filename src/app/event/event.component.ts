import { Component, OnInit } from '@angular/core';
import { User } from './user.module';
import { DataService } from './data.service';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  users$: User[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getUsers()
.subscribe(data => this.users$ = data);
  }

}
