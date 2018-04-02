import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "./Additional/_guards/auth.guard";
import {FormSignInComponent} from "./form-sign-in/form-sign-in.component";
import {SignComponent} from "./sign/sign.component";
import {ConfirmEmailComponent} from "./confirm-email/confirm-email.component";
import {RestorePasswordComponent} from "./restore-password/restore-password.component";


const appRoutes: Routes = [
    //{ path: '',  canActivate: [AuthGuard] },
    { path: 'sign', component:  SignComponent },
    { path: 'confirm', component: ConfirmEmailComponent},
    { path: 'restore', component: RestorePasswordComponent},
    //{ path: 'lobby', component: LobbyComponent},
    //{ path: 'steam-register', component: SteamRegisterComponent},
    //{ path: 'steam-auth', component: SteamAuthComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
