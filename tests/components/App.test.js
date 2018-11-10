import React from 'react';
import { shallow } from 'enzyme';
import App from '../../client/App';

describe('<App /> Component', () => {
  it('Renders Smokie welcome to your React application.', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ username: 'Smokie' });
    expect(wrapper.find('h1').text()).toEqual(
      'Smokie welcome to your React application.'
    );
  });
});
