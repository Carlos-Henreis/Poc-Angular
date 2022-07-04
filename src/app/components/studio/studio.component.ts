import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})
export class StudioComponent implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  totalElements = [
    {"initial": true},
    {"initial": true}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  createNewStep(index: number): void {
    this.totalElements.splice(index, 0, {
      "initial": false
    });
  }

  removeStep(index: number): void {
    this.totalElements.splice(index, 1);
  }

  



}
