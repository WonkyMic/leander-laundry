// author: mic
import React, { Component } from 'react';
import imgMachine from './res/img/wash-machine1.jpeg';
import imgBlankets from './res/img/blankets.jpeg';
import imgCar from './res/img/soapy-car.jpeg';

class PageBody extends Component {
  render() {
    return (
      <div className="PageBody">
        <h2>Our Services</h2>
        <div className="service1">
          <img src={imgMachine} className="PageBody-img-service1" alt="wash-machine" />
          <div className="services-text">
            <h4>SELF-SERVE LAUNDRY</h4>
            <span>
              <p>5 sizes of washers handle 1 load to 6 loads at time. Softened water for cleaner clothes and savings on detergent.  Fast, efficient dryers with lowest price around.  Coin-operated machines by Speed Queen, the industry leader.  Change machine on site. Cleanest laundromat in Leander -- our customers say so!</p>
            </span>
          </div>
        </div>
        <div className="service2">
          <img src={imgBlankets} className="PageBody-img-service2" alt="blankets" />
          <div className="services-text">
            <h4>WASH & FOLD SERVICE</h4>
            <span>
              <p>Leave the washing and drying to us!  Drop off your order.  Pick up your clothes folded and ready to wear.  Includes detergent, dryer sheets, and packaging.</p>
            </span>
            <ul>
              <li>
                <span>
                  24-hour service -- $1.25 per lb
                </span>
              </li>
              <li>
                <span>
                  48-hour service -- $1.50 per lb
                </span>
              </li>
            </ul>
            <span>
              <p>Comforters $15.  Down comforters $20.</p>
            </span>
          </div>
        </div>
        <div className="service3">
          <img src={imgCar} className="PageBody-img-service3" alt="soapy-car" />
          <div className="services-text">
            <h4>SELF-SERVCE CARWASH</h4>
            <span>
              <p>3 wash bays with 10 treatments, including foaming brush and spot-free rinse. 6 vacuum stations with fragrance and carpet cleaning options. Coin-operated wash or swipe your credit/debit card. Click HERE to receive a free Discount Car Wash Club membership card for $5 off first wash and 20% off on reload.</p>
            </span>
          </div>
        </div>
      </div>

    );
  }
}

export default PageBody;
