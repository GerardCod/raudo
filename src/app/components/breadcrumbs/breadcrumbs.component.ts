import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  name: string;
  menu: Array<any> = [];
  breadCrumbsList: Array<any> = [];

  constructor(private router: Router, private breadCrumbService: BreadcrumbService) {
    this.menu = this.breadCrumbService.getRoutes();
    this.listenRouting();
  }

  ngOnInit() {
  }

  listenRouting () {
    let routerUrl: string;
    let routerList: Array<any>;
    let target: any;

    this.router.events.subscribe(
      (router: any) => {
        routerUrl = router.urlAfterRedirects;
        if (routerUrl && typeof routerUrl === 'string') {
          target = this.menu;
          routerList = routerUrl.slice(1).split('/');
          routerList.forEach((router, index) => {
            target = target.find(page => page.path.slice(2) === router);

            this.menu.push({
              name: target.name,
              path: (index === 0) ? target.path : `${this.menu[index - 1].path}/${target.path.slice(2)}`
            });

            if ( index + 1 !== routerList.length ) {
              target = target.children;
            }
          });
        }
      }
    );
  }
}
