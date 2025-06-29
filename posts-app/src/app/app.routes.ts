import { Routes } from '@angular/router';
import { IndexComponent } from './post/index/index.component';
import { CreateComponent } from './post/create/create.component';


export const routes: Routes = [
    {path:"posts" , component:IndexComponent},
    {path:"posts/create" , component:CreateComponent}
];
