import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AccordionModule,
        PanelModule,
        ButtonModule,
        DialogModule
    ],
    exports: [
        CommonModule,
        AccordionModule,
        PanelModule,
        ButtonModule,
        DialogModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrimengModule {
}
