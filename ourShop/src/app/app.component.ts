import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectDashBordComponent } from './dashBord/component/project-dash-bord/project-dash-bord.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProjectDashBordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'ourShop';
}
