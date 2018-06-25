import React from 'react';
import {render, mount} from 'enzyme';
import moxios from 'moxios';
import HomePage from 'App/Friends/containers/HomePage';
import FeedItem from 'App/components/FeedItem';
import Loader from 'App/components/Loader';
import Root from 'Root';

let wrapped;
beforeEach(() => {
  moxios.install()
  moxios.stubRequest('/api/friends?limit=20&skip=0', {
    state: 200,
    response: [
      {
        _id: '1',
        name: 'Name #1',
        species: 'species',
        media: {
          photos: [
            {
              _id: '78tgi8',
              path: '/path',
              ups: 23
            }
          ]
        }

      },
      {
        _id: '2',
        name: 'Name #2',
        species: 'species',
        media: {
          photos: [
            {
              _id: 'boybyo',
              path: '/path',
              ups: 32
            }
          ]
        }
      }
    ]
  });
  wrapped = mount(
    <Root>
      <HomePage />
    </Root>
  );
});

afterEach(() => {
  moxios.uninstall();
  wrapped.unmount();
})

it('gets a list of feed items and renders them to page', done => {
  wrapped.update();
  moxios.wait(() => {
    try {
      wrapped.update();
      console.log(wrapped.find(FeedItem))
      expect(wrapped.find(FeedItem).length).toEqual(2)
      done();
    } catch(err){
      done.fail(err);
    }
  })
})