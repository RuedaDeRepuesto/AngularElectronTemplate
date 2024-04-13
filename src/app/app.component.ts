import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElectronService } from './_services/electron.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  electronSrv = inject(ElectronService);
  title = 'TVLauncher';
}
