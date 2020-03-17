import React from 'react';
import { shallow } from 'enzyme';
import FormInput from './FormInput';

describe('testing FormInput component', () => {
   let wrapper;
   let onHandleChange, label, otherProps;
   let mockProps;

   beforeAll(() => {
       onHandleChange = jest.fn();
       label = 'some text';
       otherProps = { value: ''};
       mockProps = { onHandleChange, label, ...otherProps };
       wrapper = shallow(<FormInput { ...mockProps } />);
   });

    it('render FormInput Component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call onChange when change in input', () => {
        wrapper.find('.form-input').simulate('change');
        expect(onHandleChange).toHaveBeenCalled();
    });

    it('check if label exists', () => {
        expect(wrapper.exists('label')).toBe(true);
    })
});