import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {


  token = '';
  resp = '';

  constructor(
    private storage: Storage,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private changeDetector: ChangeDetectorRef,
    private http: HttpClient
  ) { }


  ngOnInit() {
    this.loadstor();
  }

  async loadstor() {
    this.token = await this.loadToken('token');
    this.changeDetector.detectChanges();
    if (this.token!=null) {
      this.getConfig()
    }
  }

  async loadToken(key : string) : Promise<any> {
    try {
      const result = await this.storage.get(key);
      console.log('storageGET: ' + key + ': ' + result);
      if (result != null) {
        console.log('loaded by var: ' + key + ': ' + this.token);
        return result;
      } else {
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

  getConfig() {
    let getReq;
    console.log('token state: '+ this.token);
    const head = 'https://api.vk.com/method/newsfeed.get?count=2&access_token='+this.token.replace('"','')+'&v=5.124';
    getReq = this.http.get(head);
    this.resp = getReq;
    console.log('server response: '+this.resp);
    this.changeDetector.detectChanges();
    return getReq;
  }

}
