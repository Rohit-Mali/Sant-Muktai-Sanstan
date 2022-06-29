import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SaiHistoryComponent } from './components/sai-history/sai-history.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    MainPageComponent,
    AboutUsComponent,
    ContactComponent,
    FooterComponent,
    SaiHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
