import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    constructor( public auth: AuthService, public router: Router, public route: ActivatedRoute) {}
    /**
     * linkToCarPage
     */
    public linkToCarPage() {
        this.router.navigate(['cars'], {relativeTo: this.route});
    }
    ngOnInit() {
    }
    loginStatus(status: string) {
        if (status === 'in') {
            this.auth.logIn();
        } else {
            this.auth.logOut();
        }
    }
}
