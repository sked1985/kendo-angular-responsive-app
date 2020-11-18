import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentRoute: string;

  constructor(private router:Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(route => this.currentRoute = route['url'])
  }

  public selected = 'Inbox';
  public kendokaAvatar = 'https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png';
  active = false;
  selectedTab = 0;

  public items: Array<DrawerItem> = [
      { text: 'Inbox', icon: 'k-i-inbox', selected: true },
      { separator: true },
      { text: 'Notifications', icon: 'k-i-bell' },
      { text: 'Calendar', icon: 'k-i-calendar' },
      { separator: true },
      { text: 'Attachments', icon: 'k-i-hyperlink-email' },
      { text: 'Favourites', icon: 'k-i-star-outline' }
  ];

  public onSelect(ev: DrawerSelectEvent): void {
      this.selected = ev.item.text;
  }

  toggle(drawer) {
    this.active = !this.active;
  }

  onTabSelect(event) {
    this.selectedTab = event.index;
  }
}
