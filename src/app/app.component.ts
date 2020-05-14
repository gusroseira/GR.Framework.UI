import { Component } from '@angular/core';
import { SidenavService } from './modules/sidenav/services/sidenav.service';
import { onMainContentChange } from './core/animations';

@Component({
  selector: 'ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ onMainContentChange ]
})
export class AppComponent {
  name = 'Angular';
  public onSideNavChange: boolean;

  constructor(private _sidenavService: SidenavService) {
    this._sidenavService.sideNavState$.subscribe( res => {
      this.onSideNavChange = res;
    })
  }
}

