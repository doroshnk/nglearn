import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    constructor(public router: Router, public route: ActivatedRoute) {}
    /**
     * linkToCarPage
     */
    public linkToCarPage() {
        this.router.navigate(['cars'], {relativeTo: this.route});
    }
    ngOnInit() {
    }
}
