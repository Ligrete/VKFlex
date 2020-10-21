import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { BehaviorSubject } from 'rxjs';
import { browser } from 'protractor';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
@Injectable()
export class TokenComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private storage: Storage,
    private inAppBrowser: InAppBrowser,
    private route: ActivatedRoute,
    private changeDetector: ChangeDetectorRef,
    public platform: Platform
  ) { }


  token : string = null;

  


  ngOnInit() {
    this.start();
  }

  async start() {
    this.token = await this.loadToken('token');
    if (!this.platform.is('desktop')) {
      this.goLogIn();
    }
    this.changeDetector.detectChanges();
  }


  goLogIn() {
    var options = "location=yes,hidden=yes";
    const browser = this.inAppBrowser.create('https://oauth.vk.com/authorize?client_id=7628926&display=page&redirect_uri=http://localhost:8100/&scope=wall&response_type=token&v=5.124&state=123456', null, options);
    browser.on('beforeload').subscribe(event => {
      browser.hide();
      console.log('search log: '+ event.url.search('access_token'));
    });

    browser.on('loadstop').subscribe(event => {
      browser.hide();
      console.log('search log: '+ event.url.search('access_token'));
      if(event.url.search('access_token')>0 && event.url) { 
        this.getToken(event.url);
        browser.close();
      } else {
        browser.show();
      }
    });
  }

  async saveToken(key: string, object: Object) {
    try {
      const result = await this.storage.set(key, JSON.stringify(object));
      console.log('set Object in storage: ' + result);
      return true;
    } catch (reason) {
      console.log(reason);
      return false;
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

  async redirectPage() {
    const value = await this.loadToken('token');
    console.log('Redirect in progress: '+value);
    if (value!=null) {
      this.router.navigate(['feed'], { relativeTo: this.route });
    }
  }

  redirect(link : string) {
    this.router.navigate([link], { relativeTo: this.route });
  }

  getToken ( rawUrl : string) {
    let urlp  = new URLSearchParams(rawUrl);
    var urlraw = new URL(rawUrl).hash;
    this.token = new URLSearchParams(urlraw).get('#access_token');
    if (this.token!='' && this.token!=null) {
      this.saveToken('token', this.token);
      this.redirectPage();
    }
  }

}
