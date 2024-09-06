import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { animate, group, query, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TabsComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations:[
    trigger('routeAnim',[
      transition('* => *',[
        //Parent element (can also be in SCSS file)
        style({
          position: 'relative',
          overflow: 'hidden'
        }),

        query(':enter, :leave',[
          style({
            position:'absolute',
            top:0,
            left:0,
            width:'100%',
            height:'100%'
          })
        ], {optional: true}),

        /*query(':enter',[
          style({
            opacity:'0'
          })
        ], { optional:true}),*/
        
        //at the same time
        group([
          query(':leave',[
            animate('200ms ease-in',
              style({
                opacity: '0',
                transform: 'translateX(-80px)',
              }))
          ],{optional:true}),
  
          query(':enter',[
            style({
              transform: 'translateX(80px)',
              opacity:'0'
            }),
            animate(200,
              style({
                opacity: '1',
                transform: 'translateX(0px)'
              }))
          ],{optional:true}),
        ]),

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
