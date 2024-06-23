import { Inject, Injectable, signal } from '@angular/core';
import { UserInterface } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUserSig = signal<UserInterface | null | undefined>(undefined);
}
