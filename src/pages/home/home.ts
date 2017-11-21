import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
// import { HTTP } from '@ionic-native/http';
import {Headers} from '@angular/http';
// import { Headers } from '@angular/http';
import {HTTP} from "@ionic-native/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, private http: HTTP) {

  }

  postRequest() {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    // let options = new params({ headers: headers });

    let postParams = {
      title: 'foo',
      body: 'bar',
      userId: 1
    }

    console.log("--")

    this.http.post("http://jsonplaceholder.typicode.com/posts", postParams, {headers: headers})
      .then(data => {
        console.log('>>>>>>' + data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
  }
}
