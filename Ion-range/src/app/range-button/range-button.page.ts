import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range-button',
  templateUrl: './range-button.page.html',
  styleUrls: ['./range-button.page.scss'],
})
export class RangeButtonPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
//   function for range change must use debounce in html with it
  rangeChange(event: any) {
    console.log(event.detail.value)
  }
}
