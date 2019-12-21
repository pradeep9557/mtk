import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Network } from '@ionic-native/network/ngx';
import { CommonService } from './common.service';
import { ConstantService } from './constant.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),IonicStorageModule.forRoot(), AppRoutingModule,HttpModule,HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    UniqueDeviceID,
    Network,
    CommonService,
    ConstantService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
