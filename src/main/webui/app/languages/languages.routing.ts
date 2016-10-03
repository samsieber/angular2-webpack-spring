import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LanguageListComponent} from "./language-list.component";

const languagesRoutes: Routes = [
    {path: 'languages', component: LanguageListComponent}
];
export const languagesRouting: ModuleWithProviders = RouterModule.forChild(languagesRoutes);
