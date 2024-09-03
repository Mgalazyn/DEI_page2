import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BlueComponent } from './components/blue/blue.component';
import { DolaczComponent } from './components/dolacz/dolacz.component';
import { EventsComponent } from './components/events/events.component';
import { FooterComponent } from './components/footer/footer.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { GreenComponent } from './components/green/green.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { InfluenceComponent } from './components/influence/influence.component';
import { MissionComponent } from './components/mission/mission.component';
import { Mission2Component } from './components/mission2/mission2.component';
import { MultiCompComponent } from './components/multi-comp/multi-comp.component';
import { OrangeComponent } from './components/orange/orange.component';
import { PartnershipComponent } from './components/partnership/partnership.component';
import { Partnership2Component } from './components/partnership2/partnership2.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { RedComponent } from './components/red/red.component';
import { Red2Component } from './components/red2/red2.component';
import { WhyDEIComponent } from './components/why-dei/why-dei.component';

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
    InfluenceComponent,
    Red2Component,
    EventsComponent,
    Partnership2Component,
    Footer2Component,
    MultiCompComponent,
    DolaczComponent,
    PopUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
