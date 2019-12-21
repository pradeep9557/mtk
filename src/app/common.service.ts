import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Http, Headers} from '@angular/http';
import { Storage } from '@ionic/storage';
import { AlertController,  LoadingController, Platform, ToastController, NavController, Events } from '@ionic/angular';
import { Router } from '@angular/router';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Network } from '@ionic-native/network/ngx';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  uuid:any;
  constructor(
  	public httpclient: HttpClient,
    public http : Http,
    public localStorage: Storage,
    public alertCtrl:AlertController,
    public platform:Platform,
    public loadingCtrl:LoadingController,
    public toastCtrl: ToastController, 
    public router:Router,
    private uniqueDeviceID: UniqueDeviceID,
    private network: Network
  	){ 
      this.fetchUuid();
  	}

    fetchUuid(){
      this.uniqueDeviceID.get().then((uuid: any) => {
        console.log(uuid);
        this.uuid = uuid;
      }).catch((error: any) => {
        console.log(error);
      });
    }

  	postData(url,credentials?:any) {
      return new Promise((resolve, reject) => {
        let headers = new Headers();
        this.http.post(url, JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
      });
    }

    checkInternetConnection(){
      	// watch network for a disconnection
      	let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
        	console.log('network was disconnected :-(');
        	this.presentToast('network was disconnected');
      	});
  	}

  	presentToast(message?: string, duration?: string,setPosition?:string,buttonText?:string) {
	    let durationTime = 0;
	    if (duration === 'long') {
	        durationTime = 5000;
	    } else if (duration === 'short') {
	        durationTime = 2500;
	    } else {
	        durationTime = 3500;
	    }
	    var pos;
	    if(setPosition){ pos=setPosition }else{ pos= "bottom"};
	    let toast = this.toastCtrl.create({
	        message: message,
	        duration: durationTime,
	        cssClass: 'customToast',
	        showCloseButton: true,
	        position : pos,
	        closeButtonText: buttonText
	    });
	    toast.then((res)=>{
	        res.present();
	    });
	    return durationTime;
  	} 
}
