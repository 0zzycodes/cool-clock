import React from 'react';
import { withRouter } from 'react-router-dom';
import './countdown.scss';
const Countdown = ({ match }) => {
  let end = new Date('02/08/2020 12:00 AM');
  let _second = 1000;
  let _minute = _second * 60;
  let _hour = _minute * 60;
  let _day = _hour * 24;
  let timer;

  function showRemaining() {
    let now = new Date();
    let distance = end - now;
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById('countdown').innerHTML = `<h3>EXPIRED!</h3>`;
      return;
    }
    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);
    if (document.getElementById('days')) {
      document.getElementById('days').innerHTML = days;
      document.getElementById('hours').innerHTML = hours;
      document.getElementById('minutes').innerHTML = minutes;
      document.getElementById('seconds').innerHTML = seconds;
    }
  }
  timer = setInterval(match.path === '/' ? showRemaining : null, 1000);
  return (
    <div className="countdown" id="countdown">
      <div className="days">
        <span id="days"></span>
        <span className="text">D</span>
      </div>
      <div className="hours">
        <span id="hours"></span>
        <span className="text">H</span>
      </div>
      <div className="minutes">
        <span id="minutes"></span>
        <span className="text">M</span>
      </div>
      <div className="seconds">
        <span id="seconds"></span>
        <span className="text">S</span>
      </div>
    </div>
  );
};

export default withRouter(Countdown);
