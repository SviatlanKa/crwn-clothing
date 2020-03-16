import React from 'react';
import { shallow } from 'enzyme';
import CustomButton from './CustomButton';

it('expect render CartDropdown component', () => {
    const wrapper = shallow(<CustomButton inverted children isGoogleSignIn/>);
    expect(wrapper).toMatchSnapshot();
});