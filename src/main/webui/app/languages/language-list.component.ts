import {Component, OnInit} from "@angular/core";
import {LanguageService} from "./language.service";
import {Language} from "./language";

@Component({
    templateUrl: './language-list.component.html',
    styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit {
    languages: Language[];

    constructor(private service: LanguageService) {
    }

    ngOnInit() {
        this.service.getLanguages()
            .subscribe(languages => this.languages = languages);
    }

    addLanguage(name: string): void {
        this.service.createLanguage(name)
            .subscribe(language => this.languages.push(language));
    }

    removeLanguage(language: Language): void {
        this.service.deleteLanguage(language)
            .subscribe({
                complete: () => this.languages = this.languages.filter(x => x != language)
            });
    }

}
