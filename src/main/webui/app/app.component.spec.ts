import {TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {AppComponent} from "./app.component";
import {UserService} from "./user.service";
import "rxjs/add/observable/of";

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [RouterTestingModule.withRoutes([])],
            providers: [{provide: UserService, useValue: {}}]
        });
    });
    it('should work', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });
});
