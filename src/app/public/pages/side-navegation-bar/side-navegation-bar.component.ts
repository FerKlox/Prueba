import { Component } from '@angular/core';

@Component({
  selector: 'app-side-navegation-bar',
  templateUrl: './side-navegation-bar.component.html',
  styleUrl: './side-navegation-bar.component.css'
})
export class SideNavegationBarComponent {
  options = [
    {path: 'invoice', title: 'Invoice', icon: 'folder'},
  ]
}
