import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BlueComponent } from './components/blue/blue.component';
import { FooterComponent } from './components/footer/footer.component';
import { GreenComponent } from './components/green/green.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MissionComponent } from './components/mission/mission.component';
import { OrangeComponent } from './components/orange/orange.component';
import { PartnershipComponent } from './components/partnership/partnership.component';
import { RedComponent } from './components/red/red.component';
import { Mission2Component } from './components/mission2/mission2.component';
import { WhyDEIComponent } from './components/why-dei/why-dei.component';
import { InfluenceComponent } from './components/influence/influence.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlueComponent,
    FooterComponent,
    GreenComponent,
    HeaderComponent,
    HomeComponent,
    MissionComponent,
    OrangeComponent,
    PartnershipComponent,
    RedComponent,
    Mission2Component,
    WhyDEIComponent,
    InfluenceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
