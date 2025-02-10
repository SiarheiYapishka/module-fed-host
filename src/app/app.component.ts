
import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'shell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit {
  title = 'ng-mf-shell';
  
  constructor(private store: Store){}

  async ngOnInit() {}
}
