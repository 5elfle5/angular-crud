import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form = new FormGroup({
    whoop: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

}
