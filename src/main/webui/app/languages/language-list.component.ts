import {Component, OnInit} from "@angular/core";
import {LanguageService} from "./language.service";
import {Language} from "./language";
import {UserService} from "../user.service";

@Component({
    templateUrl: './language-list.component.html',
    styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit {
    languages: Language[] = [];
    isLoggedIn: boolean = false;

    constructor(private service: LanguageService,
                private userService: UserService) {
    }

    ngOnInit() {
        this.service.getLanguages()
            .subscribe(languages => this.languages = languages);

        this.userService.getCurrentUser()
            .subscribe(username => this.isLoggedIn = username ? true : false);
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
