import { Fragment } from 'react';

export default function Story() {
  return (
    <Fragment>
      <div className="story__pictures">
        <img
          src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
          alt="Sotry pic 1"
          className="story__img--1"
        />
        <img
          src="https://images.unsplash.com/photo-1560497604-dd72dca2ccd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1194&q=80"
          alt="Sotry pic 2"
          className="story__img--2"
        />
      </div>

      <div className="story__content">
        <h3 className="heading-3 mb-sm">Happy Pets</h3>
        <h2 className="heading-2 heading-2--dark mb-md">
          &ldquo;The best decision of our lives&rdquo;
        </h2>
        <p className="story__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <button className="btn">Find your own pets</button>
      </div>
    </Fragment>
  );
}
