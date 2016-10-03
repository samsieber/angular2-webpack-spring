import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {LanguageListComponent} from "./language-list.component";
import {LanguageService} from "./language.service";
import {languagesRouting} from "./languages.routing";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        languagesRouting
    ],
    declarations: [
        LanguageListComponent
    ],
    providers: [
        LanguageService
    ]
})
export class LanguagesModule {
}
