import { Component, OnInit } from '@angular/core';
import { onSideNavChange, animateText } from 'src/app/core/animations';
import { SidenavService } from './services/sidenav.service';


interface Page {
  link: string;
  name: string;
  icon: string;
}
@Component({
  selector: 'ui-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [onSideNavChange, animateText]
})
export class SidenavComponent implements OnInit {

  public sideNavState = false;
  public linkText = false;

  public pages: Page[] = [
    {name: 'Inbox', link:'some-link', icon: 'inbox'},
    {name: 'Starred', link:'some-link', icon: 'star'},
    {name: 'Send email', link:'some-link', icon: 'send'},
  ]

  constructor(private _sidenavService: SidenavService) { }

  ngOnInit() {
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }

}
