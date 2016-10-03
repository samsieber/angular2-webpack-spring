import {Injectable} from "@angular/core";

export class Language {
    constructor(public id: number, public name: string) {
    }
}

let LANGS = [
    new Language(11, 'Java'),
    new Language(12, 'PHP'),
    new Language(13, 'C++'),
    new Language(14, 'Clojure'),
    new Language(15, 'Typescript'),
    new Language(16, 'Javascript')
];

let languagesPromise = Promise.resolve(LANGS);

@Injectable()
export class LanguageService {

    getLanguages() {
        return languagesPromise;
    }

    getLanguage(id: number | string) {
        return languagesPromise
            .then(languages => languages.find(language => language.id === +id));
    }
}
