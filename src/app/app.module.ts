import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { StartComponent } from './components/start/start.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CardComponent } from './components/card/card.component';
import { MenuVerticalComponent } from './shared/menu-vertical/menu-vertical.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StartComponent,
    AboutmeComponent,
    ProjectsComponent,
    ContactsComponent,
    SkillsComponent,
    CardComponent,
    MenuVerticalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
