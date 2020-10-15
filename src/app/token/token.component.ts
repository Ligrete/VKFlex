import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { InAppBrowser, InAppBrowserEvent } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss'],
})
@Injectable()
export class TokenComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private storage: Storage,
    private inAppBrowser: InAppBrowser
  ) { }


  token : string = '';
  expiresTime : string = '';

  ngOnInit() {

    
    let tokenSub = this.activatedRoute.params.subscribe(params=> {
      try {
        console.log('router: '+this.router.url);
        var url = new URLSearchParams( this.router.url);
        this.token = url.get('/#access_token');
        this.expiresTime = url.get('expires_in');
      } catch {
        console.log('ERROR CATCH');
      } finally {
        if (this.token=='' && !this.token) {
          this.goLogIn();
        }
      }
    });
  }

  goLogIn() {
    this.document.location.href = 'https://oauth.vk.com/authorize?client_id=7628926&display=page&redirect_uri=http://localhost:8100/&scope=wall&response_type=token&v=5.124&state=123456';
    
    
    
    // let browser = this.inAppBrowser.create('https://oauth.vk.com/authorize?client_id=7628926&display=page&redirect_uri=http://localhost:8100/&scope=wall&response_type=token&v=5.124&state=123456');
    // browser.on('loadstop').subscribe( event => {
    //   if(event.url.search('access_token')>0 && event.url) { 
    //     browser.close();
    //   }
    // });
  }

  manageToken() {
    // set a key/value
    this.storage.set('token', this.token );

    // Or to get a key/value pair
    this.storage.get('token').then((val) => {
      console.log('saved token is: ', val);
    });
  }



}
