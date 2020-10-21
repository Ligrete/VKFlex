
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { HttpUrlEncodingCodecWithSquareBrackets } from 'src/app/base/http/HttpUrlEncodingCodecWithSquareBrackets';


/**
 * Get to documentation
 * @see [VKDEV] https://vk.com/dev/api_requests
 */

@Injectable({providedIn: 'root'})
export class VkApiService {
  readonly hostapi = environment.vkapi;
  readonly hostauth = environment.vkauth;
  readonly appid = environment.appid;
  readonly ver = environment.ver;

  constructor(private http: HttpClient) {
  }


    /** 
     * Get auth token for user
     * @return An `Observable` of the `JSONAPIAccountsResponse`.
     */
    getAccounts(): Observable<any> {
        return this.http.get(`${this.hostauth}${this.appid}&display=page&redirect_uri=http://localhost:8100/&scope=wall&response_type=token&${this.ver}`);
    }


}