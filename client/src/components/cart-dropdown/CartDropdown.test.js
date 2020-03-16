import React from 'react';
import { shallow } from 'enzyme';
import CartDropdown from './CartDropdown';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

describe('CartDropdown Component', () => {
    let wrapper;
    let mockHistory;
    let mockDispatch;
    const mockCartItems = [
        {
            id: 5,
            imageUrl: 'www.images/blue-hat.jpg',
            price: 100,
            name: 'Blue Hat',
            quantity: 3
        }
    ];

    beforeEach(() => {
        mockHistory = { push: jest.fn()};
        mockDispatch = jest.fn();

        const mockProps = {
            cartItems: mockCartItems,
            history: mockHistory,
            dispatch: mockDispatch
        };
        wrapper = shallow(<CartDropdown.WrappedComponent { ...mockProps }/>);
    });
    it('expect render CartDropdown component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call history.push when button is clicked', () => {
        wrapper.find('CustomButton').simulate('click');
        expect(mockHistory.push).toHaveBeenCalled();
        expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
    });

    it('should render with empty CartDropdown component when cartItems is empty', () => {
        const mockProps = {
            cartItems: [],
            history: mockHistory,
            dispatch: mockDispatch
        };
        wrapper = shallow(<CartDropdown { ...mockProps }/>);
        expect(wrapper.exists('empty-message')).toBe(true);
    });
});


