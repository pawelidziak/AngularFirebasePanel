import {trigger, animate, style, transition} from '@angular/animations';

export function fadeInAnimation () {
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  return trigger('fadeInAnimation', [

    // route 'enter' transition
    transition(':enter', [
      style({opacity: 0}),
      animate('.3s', style({opacity: 1}))
    ]),

    transition(':leave', [
      style({opacity: 1}),
      animate('3s', style({opacity: 0}))
    ]),
  ]);
}


