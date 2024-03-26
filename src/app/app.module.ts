import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { MissionComponent } from './components/mission/mission.component';
import { BlueComponent } from './components/blue/blue.component';
import { GreenComponent } from './components/green/green.component';
import { RedComponent } from './components/red/red.component';
import { PartnershipComponent } from './components/partnership/partnership.component';
import { OrangeComponent } from './components/orange/orange.component';
import { ButtonModule } from 'primeng/button';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    MissionComponent,
    BlueComponent,
    GreenComponent,
    RedComponent,
    PartnershipComponent,
    OrangeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    AnimateOnScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  }