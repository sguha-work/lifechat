import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { File } from '@ionic-native/file';
import { Contacts} from '@ionic-native/contacts';
import { SocialSharing } from '@ionic-native/social-sharing';
// importing app
import { MyApp } from './app.component';

// importing pages
import { HomePage } from '../pages/home/home';
import { ContactsPage } from '../pages/contacts/contacts';
import { PhotoPage } from '../pages/photo/photo';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { JoinLIFEPage } from '../pages/join-life/join-life';
import { ConversationPage } from '../pages/conversation/conversation';
import { ImagePage } from '../pages/image/image';

// importing services
import {CommonService} from "./../services/common.service";
import {ConversationService} from "./../services/conversation.service";
import {FileService} from "./../services/file.service";
import {Database} from "./../services/database.service";
import {MessageService} from "./../services/message.service";
import {SignupService} from "./../services/signup.service";
import {AlertService} from "./../services/alert.service";
import {StorageService} from "./../services/storage.service";
import {LoginService} from "./../services/login.service";
import {ContactService} from "./../services/contact.service";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactsPage,
    PhotoPage,
    TabsControllerPage,
    LoginPage,
    JoinLIFEPage,
    ConversationPage,
    ImagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //AngularFireModule.initializeApp(firebaseConfig),
    //AngularFireAuthModule,
    //AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactsPage,
    PhotoPage,
    TabsControllerPage,
    LoginPage,
    JoinLIFEPage,
    ConversationPage,
    ImagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UniqueDeviceID,
    File,
    Contacts,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommonService,
    Database,
    FileService,
    MessageService,
    SignupService,
    AlertService,
    StorageService,
    LoginService,
    ContactService,
    ConversationService
  ]
})
export class AppModule {}