import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { IonicPluginsModule } from './ionic-plugins/ionic-plugins.module';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppGlobals } from './services/credencials';
import { DeviceAccounts  } from '@ionic-native/device-accounts/ngx';
import { ThreeDeeTouch } from '@ionic-native/three-dee-touch/ngx'
import { BackgroundGeolocation } from '@ionic-native/background-geolocation/ngx'
import { Device } from '@ionic-native/device/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Autostart } from '@ionic-native/autostart/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, IonicStorageModule.forRoot(), HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    BackgroundMode,
	DeviceAccounts,
    ThreeDeeTouch,
    BackgroundGeolocation,
    Device,
    Geolocation,
    LocationAccuracy,
    Autostart,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    IonicPluginsModule,
    AppGlobals
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
