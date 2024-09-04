import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html'
})
export class BtnComponent {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' ='primary';

  constructor(){

  }

  ngOnInit(): void{

  }

  get colors(){
    return {
      'bg-success-700': this.color === 'success',
      'hover:bg-success-800': this.color === 'success',
      'focus:ring-success-300': this.color === 'success',
      'bg-secondary-700': this.color === 'secondary',
      'hover:bg-secondary-800': this.color === 'secondary',
      'focus:ring-secondary-300': this.color === 'secondary',
      'bg-primary-700': this.color === 'primary',
      'hover:bg-primary-800': this.color === 'primary',
      'focus:ring-primary-300': this.color === 'primary',
      'bg-danger-700': this.color === 'danger',
      'hover:bg-danger-800': this.color === 'danger',
      'focus:ring-danger-300': this.color === 'danger',
      'bg-warning-700': this.color === 'warning',
      'hover:bg-warning-800': this.color === 'warning',
      'focus:ring-warning-300': this.color === 'warning',
      'bg-info-700': this.color === 'info',
      'hover:bg-info-800': this.color === 'info',
      'focus:ring-info-300': this.color === 'info'
    }
  }
}
