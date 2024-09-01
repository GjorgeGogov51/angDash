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
        //fix later
        /*query(':leave',[
          animate(1000,
            style({
              opacity: '0'
            }))
        ],{optional:true}),*/

        query(':enter',[
          style({
            opacity: '0'
          }),
          animate(1000,
            style({
              opacity: '1'
            }))
        ],{optional:true}),
        
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
