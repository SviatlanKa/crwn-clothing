import React from 'react';
import { shallow } from 'enzyme';
import { CheckoutItem } from './CheckoutItem';

describe('testing CheckoutItem Component', () => {
    let wrapper;
    const cartItem = {
        imageUrl: 'www.images/blue-hat.jpg',
        name: 'Blue Hat',
        quantity: 3,
        price: 100
    };
    let addItem, removeItem, clearItem;

    beforeEach(() => {
        addItem = jest.fn();
        removeItem = jest.fn();
        clearItem = jest.fn();
        const mockProps = { cartItem, addItem, removeItem, clearItem };
        wrapper = shallow(<CheckoutItem { ...mockProps } />);
    });

    it('render CheckoutItem Component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call removeItem when click', () => {
        wrapper.find('.left').simulate('click');
        expect(removeItem).toHaveBeenCalled();
    });
    it('should call addItem when click', () => {
        wrapper.find('.right').simulate('click');
        expect(addItem).toHaveBeenCalled();
    });
    it('should call clearItem when click', () => {
        wrapper.find('.remove-button').simulate('click');
        expect(clearItem).toHaveBeenCalled();
    });
});