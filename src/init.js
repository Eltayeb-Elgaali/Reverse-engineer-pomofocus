'use strict';


console.log('hello');


import {Timer} from './timer.js'

const duration = document.querySelector('#duration');
const startStopButton = document.querySelector('.start');

const pomodoroBtn = document.querySelector('#pomodoro-btn');
const shortBreakBtn = document.querySelector('#short-break-btn');
const longBreakBtn = document.querySelector('#long-break-btn');
const body = document.querySelector('body');
const timerTypeLabel = document.querySelector('#timer-type-label');

const timer = new Timer( duration, startStopButton, pomodoroBtn, shortBreakBtn, longBreakBtn, body, timerTypeLabel);



