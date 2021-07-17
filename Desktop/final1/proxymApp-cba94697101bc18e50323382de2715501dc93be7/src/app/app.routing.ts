
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddComponent } from './global/add/add.component';
import { GlobalComponent } from './global/global.component';
import { HistoriqueListComponent } from './global/historique-list/historique-list.component';
import { DetailsComponent } from './global/home/details/details.component';
import { HomeComponent } from './global/home/home.component';
import { NotificationComponent } from './global/notification/notification.component';
import { ProfilComponent } from './global/profil/profil.component';
import { LoginComponent } from './loginn/login/login.component';

const routes : Routes =[
   
    {path : '' , component : LoginComponent},

    {path : 'login', component : LoginComponent},
    {path : '' , component : GlobalComponent, children: [
        {path : 'home' , component : HomeComponent},
        {path : 'profil' , component : ProfilComponent},
        {path : 'add' , component : AddComponent},
        {path : 'notif' , component : NotificationComponent},
        {path : 'history' , component: HistoriqueListComponent},
        {path : 'details/:id' , component: DetailsComponent}

        
    ]}
    

];
export const routing = RouterModule.forRoot(routes);