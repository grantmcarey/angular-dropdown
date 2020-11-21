
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgbModule.forRoot()], 
  declarations: [AppComponent, CustomDropdownComponent],
  bootstrap: [AppComponent]
}) 
export class AppModule {}
