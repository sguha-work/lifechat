import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommonService} from "./../../services/common.service";
import { AfterViewInit } from '@angular/core';
import { Events } from 'ionic-angular';
import * as $ from 'jquery';
@Component({
  selector: 'page-heading',
  templateUrl: 'heading.html',
})
export class HeadingPage  implements AfterViewInit{

  constructor(public navCtrl: NavController, public navParams: NavParams, private common: CommonService, public events: Events) {
    this.bindEvents();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeadingPage');
  }

  private displayPhoneNumber(phoneNumber: string) {
    
  }

  private populateData(data: any) {
    this.displayPhoneNumber(data.phoneNumbers[0]);
  }

  private bindEvents() {
   
  }

  public displayContacts() {
    this.common.showPage("page-contacts");
  }

  public changePhoneNumber() {
    
  }

  private adjustStyle() {
    
  }

  ngAfterViewInit() {
    this.adjustStyle();
    
  }

}
