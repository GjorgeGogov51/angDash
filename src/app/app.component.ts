import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { animate, query, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TabsComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations:[
    trigger('routeAnim',[
      transition('* => *',[
        query(':enter',[
          style({
            backgroundColor: 'wheat',
            //if the element is displayed inline, the animation won't trigger
            display: 'block',
          })
          , animate(1000)
        ], {optional:true }),

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
