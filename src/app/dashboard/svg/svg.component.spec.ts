import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgComponent } from './svg.component';

describe('MapViewComponent', () => {
    let component: SvgComponent;
    let fixture: ComponentFixture<SvgComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SvgComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SvgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
