import { AnimationEntryMetadata } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

export const slideInLeft: AnimationEntryMetadata = 
  trigger('slideInLeft', [
    state('void', style({
      opacity: 0,
      transform: 'translateX(-20px)'
    })),
    state('*', style({
      opacity: 1,
      transform: 'translateX(0px)'
    })),
    transition(':enter', animate('.2s ease-in-out')),
    transition(':leave', animate('.2s ease-in-out'))
  ]);

export const slideInRight: AnimationEntryMetadata = 
  trigger('slideInRight', [
    state('void', style({
      transform: 'translateX(100%)'
    })),
    state('*', style({
      transform: 'translateX(0%)'
    })),
    transition(':enter', animate('.1s cubic-bezier(0, 0.95, 0.56, 0.98)')),
    transition(':leave', animate('.1s cubic-bezier(0, 0.95, 0.56, 0.98)'))
  ]);
