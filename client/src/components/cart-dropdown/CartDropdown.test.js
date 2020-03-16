import React from 'react';
import { shallow } from 'enzyme';
import CartDropdown from './CartDropdown';

it('expect render CartDropdown component', () => {
    const cartItems = [
        {
            id: 5,
            imageUrl: 'www.images/blue-hat.jpg',
            price: 100,
            name: 'Blue Hat',
            quantity: 3
        }
    ];

    const props = {
        cartItems: cartItems,
        history: "http://localhost:3000",
        dispatch: jest.fn()
    }
    const wrapper = shallow(<CartDropdown.WrappedComponent { ...props }/>);
    expect(wrapper).toMatchSnapshot();
});
