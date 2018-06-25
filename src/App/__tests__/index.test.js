import React from 'react';
import {shallow, render, mount} from 'enzyme';
import App from 'App';
import Root from 'Root';
import moxios from 'moxios';
// import Header from 'App/containers/Header';

let wrapped;
beforeEach(() => {
  moxios.install();
  moxios.stubRequest('/api/friends', {});
  wrapped = mount(
    <Root>
      <App />
    </Root>
  )
});

afterEach(() =>{
  moxios.uninstall();
  wrapped.unmount();
})


it('renders a header', () => {
  console.log(wrapped);
  expect(wrapped.find('header').length).toEqual(1);
});


