import {Component, OnInit} from "@angular/core";
import {Language, LanguageService} from "./language.service";

@Component({
    templateUrl: './language-list.component.html'
})
export class LanguageListComponent implements OnInit {
    languages: Language[];

    constructor(private service: LanguageService) {
    }

    ngOnInit() {
        this.service.getLanguages()
            .then(languages => this.languages = languages);
    }

}
