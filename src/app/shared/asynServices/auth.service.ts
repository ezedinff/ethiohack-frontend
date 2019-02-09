import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable, of} from 'rxjs';
import {User} from '../interfaces/user';
import {switchMap} from 'rxjs/operators';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
@Injectable({providedIn: 'root'})
export class AuthService {
  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore) {
    //// Get auth data, then get firestore user document || null
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      });
  }

  signOut() {
    return this.afAuth.auth.signOut();
  }

  private updateUserData(user) {
    console.log(user);
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    return userRef.valueChanges().subscribe(currentUser => {
      console.log(currentUser);
      if (currentUser) {
        localStorage.setItem('current_user', JSON.stringify(currentUser));
        return currentUser;
      } else {
        const data: User = {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          activated: true,
          roles: {
            moderator: true,
            admin: false
          },
          profileImage: user.photoURL
        };
        localStorage.setItem('current_user', JSON.stringify(data));
        return userRef.set(data, {merge: true});
      }
    });
  }
}
