//angular requirements
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, RequestOptions } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

//component
import { AppComponent } from './app.component';

// App Routes
import { AppRoutes } from './app.routes';

//custom Modules
import { GamesModule } from './games/games.modules';

// Here is a comment

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, 
            GamesModule, RouterModule.forRoot(AppRoutes)],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
