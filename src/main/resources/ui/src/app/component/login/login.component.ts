import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentication/authentication.service';
import {User} from '../../domain/User';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

    user: User = new User;
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        // reset login status
        // this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.user.email, this.user.password)
            .subscribe(
                (data: User) => {
                    if (data.name == '') {
                        console.log(data);
                    }
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    // this.alertService.error(error);
                    this.loading = false;
                });
    }

    register() {
        this.router.navigateByUrl('/register');
    }
}
