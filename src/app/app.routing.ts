import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "./Additional/_guards/auth.guard";
import {FormSignInComponent} from "./form-sign-in/form-sign-in.component";
import {SignComponent} from "./sign/sign.component";
import {ConfirmEmailComponent} from "./confirm-email/confirm-email.component";
import {RestorePasswordComponent} from "./restore-password/restore-password.component";
import {TableComponent} from "./table/table.component";
import {SteamAuthComponent} from "./steam-auth/steam-auth.component";
import {PersonalRoomComponent} from "./personal-room/personal-room.component";


const appRoutes: Routes = [
    { path: 'table',  component: TableComponent,canActivate: [AuthGuard] },
    { path: 'sign', component:  SignComponent },
    { path: 'confirm', component: ConfirmEmailComponent},
    { path: 'restore', component: RestorePasswordComponent},
    { path: 'steam', component: SteamAuthComponent},
    { path: 'profile', component: PersonalRoomComponent, canActivate: [AuthGuard]},
    //{ path: 'lobby', component: LobbyComponent},
    //{ path: 'steam-register', component: SteamRegisterComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
