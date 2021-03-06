import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from "@angular/router";
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';


@Injectable()
export class AuthService {

  user: any = null;
  loading: boolean;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {

    afAuth.authState.subscribe((auth) => {
      this.user = auth;
    });

  }

  get getLoading(): boolean {
    return this.loading;
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.user !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.user : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.afAuth.authState
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.user.uid : '';
  }

  // Anonymous User
  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.user.isAnonymous : false
  }

  // Returns current user display name or Guest
  get currentUserDisplayName(): string {
    if (!this.user) {
      return 'Guest'
    }
    else if (this.currentUserAnonymous) {
      return 'Anonymous'
    }
    else {
      return this.user['displayName'] || 'User without a Name'
    }
  }

  set currentUserDisplayName(name: string) {
    this.user.displayName = name;
  }

  //// Social Auth ////
  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.socialSignIn(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.socialSignIn(provider);
  }

  githubLogin() {
    const provider = new firebase.auth.GithubAuthProvider();
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    this.loading = true;
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.user = credential.user;
        this.router.navigate(['/home']);
        this.loading = false;
      })
      .catch((error: any) => {
        this.loading = false;
        throw new Error((error.message));
      });
  }

  //// Anonymous Auth ////

  anonymousLogin() {
    this.loading = true;
    return this.afAuth.auth.signInAnonymously()
      .then((user) => {
        this.user = user;
        this.router.navigate(['/home']);
        this.loading = false;
      })
      .catch((error: any) => {
        this.loading = false;
        throw new Error((error.message));
      });
  }

  //// Email/Password Auth ////

  emailSignUp(name: string, email: string, password: string) {
    this.loading = true;
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.user = user;
        this.updatePersonal(name);
        this.router.navigate(['/home']);
        this.loading = false;
      })
      .catch((error: any) => {
        this.loading = false;
        throw new Error((error.message));
      });
  }

  emailLogin(email: string, password: string) {
    this.loading = true;
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.user = user;
        this.router.navigate(['/home']);
        this.loading = false;
      })
      .catch((error: any) => {
        this.loading = false;
        throw new Error((error.message));
      });
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    this.loading = true;
    const auth = firebase.auth();

    return auth.sendPasswordResetEmail(email)
      .then(() => {
        this.loading = false;
      })
      .catch((error: any) => {
        this.loading = false;
        throw new Error((error.message));
      });
  }


  //// Sign Out ////

  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

  // UPDATE USER

  updateEmail(email: string) {
    const user = firebase.auth().currentUser;
    return user.updateEmail(email)
      .catch((error: any) => {
        throw new Error((error.message));
      });
  }

  updatePersonal(name: string) {
    const user = firebase.auth().currentUser;

    return user.updateProfile({
      displayName: name,
      photoURL: ''
    }).catch((error: any) => {
      throw new Error((error.message));
    });
  }
}
