import React from 'react';
import { shallow } from 'enzyme';
import CartDropdown from './CartDropdown';

it('expect render CartDropdown component', () => {
    expect(shallow(<CartDropdown />)).toMatchSnapshot();
})
