import React from 'react';
import {shallow, render, mount} from 'enzyme';
import Root from 'Root';
import Header from 'App/components/Header';

let wrapped;
beforeEach(() => {
    wrapped = render(
      <Root>
        <Header />
      </Root>
    )
  });
  
it('renders with 3 nav items', () => {
  expect(wrapped.find('a').length).toEqual(3);
})

