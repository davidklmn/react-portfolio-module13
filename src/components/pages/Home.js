import React from 'react';
import './home.css';

function Home() {
  return (
    <>
      <div class="container" id="about">
        <div class="row heroContent">
          <div class="col-sm-12 col-lg-3">
            <img id="itsMe" src={require('../../img/me.jpg')} alt="" />
          </div>
          <div class="col-sm-12 col-lg-9">
            <h1 class="display-4">👋 Hi, I'm David.</h1>
            <p class="lead">
              I'm a <span class="not">professional</span> web developer based in
              the UK. Currently I am a lead student at WebDevBootcamp. In my
              spare time (not like I have any rn) I like to play games, paint
              miniatures and play music.
            </p>
            <p class="follow">
              You can follow me on <a href="">Github</a> and{' '}
              <a href="">LinkedIn</a>. Send me and <a href="">Email</a> or
              download my <a href="">CV</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
