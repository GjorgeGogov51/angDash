import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TabsComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations:[
    trigger('routeAnim',[
      transition('* => *',[
        style({
          backgroundColor: 'blue'
        }),
        animate(1000)
      ])
    ])
  ]
})
export class AppComponent {
  prepareRoute(outlet:RouterOutlet){
    if(outlet.isActivated) 
      return outlet.activatedRoute.snapshot.url;

    return;
  }
}
