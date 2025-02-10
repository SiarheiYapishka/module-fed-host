import { inject, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Store, StoreModule, StoreRootModule } from '@ngrx/store';
import { reducer } from './store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, StoreModule.forRoot({main: reducer}), StoreDevtoolsModule.instrument({
    maxAge: 99999,
  })],
})
export class AppModule {}
