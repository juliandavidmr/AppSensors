import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LastTen } from '../../providers/last-ten';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  list: any = [];

  constructor(
    public navCtrl: NavController,
    public lastten: LastTen
  ) {
    this.fetchData();
  }

  fetchData() {
    this.lastten.load().then(data => {
      console.log("data: ", data);
      this.list = data;
    });
  }

  doRefresh(refresher) {
    this.fetchData();

    setTimeout(() => {
      refresher.complete();
    }, 1600);
  }

}
