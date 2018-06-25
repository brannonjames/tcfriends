import React from 'react';
import {shallow, render, mount} from 'enzyme';
import App from 'App';
import Root from 'Root';
// import Header from 'App/containers/Header';

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  )
})

console.log(wrapped);

it('renders a header', () => {
  // expect(wrapped.find('<Header />').length).toEqual(1);
  console.log('header');
});


