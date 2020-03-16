import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './CartItem';



it('expect render CartItem component', () => {
    const item = {
        imageUrl: 'www.images/blue-hat.jpg',
        price: 100,
        name: 'Blue Hat',
        quantity: 3
    };
    const wrapper = shallow(<CartItem item={item} />);
    expect(wrapper).toMatchSnapshot();
})