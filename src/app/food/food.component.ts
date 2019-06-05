import { Component, OnInit } from '@angular/core';
import { Food } from './food.module';
import { MatService } from './mat.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  foods$: Food[];
  constructor(private matService: MatService) { }

  ngOnInit() {
    return this.matService.getUsers()
.subscribe(data => this.foods$ = data);
  }

}
