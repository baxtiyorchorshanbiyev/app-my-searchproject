import React, {useState} from 'react';

const Outdown = () => {
  const data = new Date();
  const second = document.querySelector(".second");

  
  return (
    <section className="outdown">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="data d-flex justify-content-center">
              <div className="days text-center mx-3">
                <span className="day ">{data.getDay()}</span>
                <p className="text-center">Days</p>
              </div>
              <div className="hours text-center mx-3">
                <span className="hour text-center">{data.getHours()}</span>
                <p className="text-center">Hours</p>
              </div>
              <div className="mins text-center mx-3">
                <span className="minutes text-center">{data.getMinutes()}</span>
                <p className="text-center">Minutes</p>
              </div>
              {/* <div className="seconds text-center mx-3">
                <span className="second "></span>
                <p className="text-center">Seconds</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outdown;