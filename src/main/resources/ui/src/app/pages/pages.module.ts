import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from '../component/login/login.component';
import {TodoDetailComponent} from '../component/todo-detail/todo-detail.component';
import {TodoListComponent} from '../component/todo-list/todo-list.component';
import {RegisterComponent} from '../component/register/register.component';
import {FormsModule} from '@angular/forms';
import {PrimengModule} from '../primeng/primeng.module';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        TodoListComponent,
        TodoDetailComponent],
    imports: [
        CommonModule,
        FormsModule,
        PrimengModule
    ],
    entryComponents: [
        LoginComponent,
        RegisterComponent,
        TodoListComponent,
        TodoDetailComponent
    ],
    exports: [
        LoginComponent,
        RegisterComponent,
        TodoListComponent,
        TodoDetailComponent
    ]
})
export class PagesModule {
}
