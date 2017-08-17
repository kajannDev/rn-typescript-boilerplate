import React from 'react';
import { shallow } from 'enzyme';
import { noop, sampleText } from './Utils/test-helpers';
import { Button } from '../build/Common/Button';

describe('<Button>', () => {
  const Component = <Button onPress={noop}>{sampleText}</Button>;

  describe('Structure', () => {
    it('renders correctly', () => {
      const wrapper = shallow(Component);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Functionality', () => {
    it('handles onPress callback', () => {
      const onPressSpy = jest.fn();
      const Clone = React.cloneElement(Component, { onPress: onPressSpy });
      const wrapper = shallow(Clone);
      wrapper.simulate('press');
      expect(onPressSpy).toHaveBeenCalledTimes(1);
    });
  });
});
