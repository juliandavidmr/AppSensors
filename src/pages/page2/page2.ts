import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { LastOne } from '../../providers/last-one';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  show: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public lastone: LastOne
  ) {
    this.fetchData();
  }

  fetchData() {
    this.lastone.load().then(data => {
      console.log("data: ", data);
      this.show = data;
    });
  }
}
