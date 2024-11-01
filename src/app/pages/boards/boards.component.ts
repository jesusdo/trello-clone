import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {
  faBorderAll = faBorderAll;

}
