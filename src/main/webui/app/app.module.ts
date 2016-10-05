import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {routing, appRoutingProviders} from "./app.routing";
import {LanguagesModule} from "./languages/languages.module";
import {UserService} from "./user.service";
import {LoginComponent} from "./login.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        LanguagesModule
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    providers: [
        appRoutingProviders,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
