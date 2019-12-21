import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { ConstantService } from '../constant.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
  	public commonService:CommonService,public constantService:ConstantService){

  	}
  	ngOnInit(){
  		console.log('Init Called');
  		this.commonService.postData(this.constantService.fetchData,{uuid:this.commonService.uuid}).then((res)=>{
	      console.log('res',res);
	    }).catch((e)=>{
	      console.log('error',e);
	    })
  	}

}
