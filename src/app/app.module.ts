import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { InfoComponent } from './info/info.component';
import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent,
        CardComponent,
        CarouselComponent,
        InfoComponent,
        AboutusComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
       
    ]
})
export class AppModule { }
