import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, OverlayModule, FontAwesomeModule ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isOpenMenu = false;
  faBell = faBell;
  faInfoCircle = faInfoCircle;
}
