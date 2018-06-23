import React from 'react';
import {shallow, render} from 'enzyme';
import App from './index';
import Header from './containers/Header';

console.log(App);

it('renders a header', () => {
  const wrapper = shallow(<App.WrappedComponent />);
  expect(wrapper.find(Header).length).toEqual(1);
});