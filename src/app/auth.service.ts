export class AuthService {
    isLoggedIn = false;
    logIn() {
        this.isLoggedIn = true;
    }
    logOut() {
        this.isLoggedIn = false;
    }
    isAuth() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
               resolve(this.isLoggedIn);
            }, 1000);
        });
    }
}
