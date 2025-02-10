import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'shell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-mf-shell';
  
  constructor(private store: Store){}

  async ngOnInit() {
    const nkvReducer =   await loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:5100/remoteEntry.js',
            exposedModule: './nkvReducer'
          }).then((m) => {console.log(m); return m.nkvReducer});

    this.store.addReducer('nkv', nkvReducer);
  }
}
