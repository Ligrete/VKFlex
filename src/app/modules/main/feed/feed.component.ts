import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {


  token = '';

  constructor(
    private storage: Storage,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }


  ngOnInit() {
    this.loadstor();
  }

  async loadstor() {
    this.token = await this.loadToken('token');
  }

  async loadToken(key : string) : Promise<any> {
    try {
      const result = await this.storage.get(key);
      console.log('storageGET: ' + key + ': ' + result);
      if (result != null) {
        return result;
      } else {
        this.token = '--';
        return null;
      }
    } catch (reason) {
      console.log(reason);
      return null;
    }
  }

  goBack(): void {
    this.location.back();
  }

}
