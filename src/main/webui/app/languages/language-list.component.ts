import {Component, OnInit} from "@angular/core";
import {LanguageService} from "./language.service";
import {Language} from "./language";

@Component({
    templateUrl: './language-list.component.html'
})
export class LanguageListComponent implements OnInit {
    languages: Language[];

    constructor(private service: LanguageService) {
    }

    ngOnInit() {
        this.service.getLanguages()
            .subscribe(languages => this.languages = languages);
    }

}
