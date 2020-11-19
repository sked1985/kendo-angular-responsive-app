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
  items1 = [
    {
        text: '',
        items: [{ text: 'settings' }, { text: 'logout' }]
    }
];

  constructor(private router:Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      tap(e => console.log(e))
    ).subscribe(route => 
      this.currentRoute = route['url']
      )
  }

  public selected = 'Work';
  public kendokaAvatar = 'https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png';
  active = false;
  

  public items: Array<DrawerItem> = [
      { text: 'Work', icon: 'k-i-inbox', selected: true },
      { separator: true },
      { text: 'Notifications', icon: 'k-i-bell' },
      { text: 'Calendar', icon: 'k-i-calendar' },
      { separator: true },
      { text: 'Settings', icon: 'k-i-cogs' },
      { text: 'Favourites', icon: 'k-i-star-outline' }
  ];

  public onSelect(ev: DrawerSelectEvent): void {
      this.selected = ev.item.text;
      this.router.navigate([this.selected.toLocaleLowerCase()]);
  }
  
  onSelectMenu(event) {
    if (event.item.text !== "") {
      if(event.item.text === "logout") {
        this.router.navigate(["login"])
      }
      if(event.item.text === "settings") {
        this.router.navigate(["settings"])
      }
    } 
  }

  toggle() {
    this.active = !this.active;
  }

}
