import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SIDENAV_ITEMS } from '../../shared/sidenav-config';
import { SidenavItem } from '../../models/sidenav-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent
{
  @ViewChild('sidenav') sidenav!: MatSidenav;
  sidenavItems: SidenavItem[] = SIDENAV_ITEMS;
  isSidenavOpened: boolean = true;

  constructor(private router: Router) {}

  toggleSidenav() {
    this.sidenav.toggle();
    this.isSidenavOpened = !this.isSidenavOpened;
    console.log(this.sidenav.opened)
    console.log(this.isSidenavOpened)
  }

  redirectToPage(path: string) {
    this.router.navigateByUrl(`/${path}`)
  }
}
