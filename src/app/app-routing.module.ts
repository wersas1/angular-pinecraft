import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { InfoComponent} from './info/info.component';
import { ContactsComponent} from './contacts/contacts.component';


const routes: Routes =
  [
    { path: 'info', component: InfoComponent },
    { path: 'contacts', component: ContactsComponent},
  {path: '', redirectTo: '/dashboard',pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }

