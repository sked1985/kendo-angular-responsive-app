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
  title = "Work";
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
      { text: 'Layouts', icon: 'k-i-link-horizontal' },
      { separator: true },
      { text: 'TaskView', icon: 'k-i-zoom' },
      { separator: true },
      { text: 'Settings', icon: 'k-i-cogs' },
      { separator: true },
      { text: 'Logout', icon: 'k-i-logout' }
  ];

  public onSelect(ev: DrawerSelectEvent): void {
      this.selected = ev.item.text;
      this.title = this.selected;
      if (this.selected === 'Logout')
        this.selected = "Login";
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
