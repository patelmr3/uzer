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
      opacity: 0,
      transform: 'translateX(10px)'
    })),
    state('*', style({
      opacity: 1,
      transform: 'translateX(0px)'
    })),
    transition(':enter', animate('.5s ease-in-out')),
  ]);

export const slideInTop: AnimationEntryMetadata = 
  trigger('slideInTop', [
    state('void', style({
      opacity: 0,
      transform: 'translateY(-100%)'
    })),
    state('*', style({
      opacity: 1,
      transform: 'translateY(0%)'
    })),
    transition(':enter', animate('.1s ease-in-out'))
  ]);

export const scale: AnimationEntryMetadata = 
  trigger('scale', [
    state('void', style({
      opacity: 0,
      transform: 'scale(.9)'
    })),
    state('*', style({
      opacity: 1,
      transform: 'scale(1)'
    })),
    transition(':enter', animate('.2s ease-in-out'))
  ]);

export const fadeIn: AnimationEntryMetadata = 
  trigger('fadeIn', [
    state('void', style({
      opacity: 0
    })),
    state('*', style({
      opacity: 1
    })),
    transition(':enter', animate('.3s ease-out'))
  ]);
