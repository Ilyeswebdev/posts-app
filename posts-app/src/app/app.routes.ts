import { Routes } from '@angular/router';
import { IndexComponent } from './post/index/index.component';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { ShowComponent } from './post/show/show.component';



export const routes: Routes = [
    {path:"posts" , component:IndexComponent},
    {path:"" , component:IndexComponent},
    {path:"posts/create" , component:CreateComponent},
    {path:"posts/:postId/edit" , component: EditComponent},
    {path:"posts/:postId" , component: ShowComponent}
];
