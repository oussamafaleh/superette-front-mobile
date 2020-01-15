import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { IonicModule } from '@ionic/angular';

@NgModule({

    imports: [
        HttpClientModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        IonicModule.forRoot(),
        FormsModule    ],
    
    declarations: [AppComponent],
    providers: [AuthGuard,HttpClientModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
