import React from 'react';
import { shallow } from 'enzyme';
import CollectionPreview from './CollectionPreview';

it('expect render CollectionPreview component', () => {
    const items = [
        {
            id: 1,
            imageUrl: 'www.images/blue-hat.jpg',
            price: 100,
            name: 'Blue Hat'
        },
        {
            id: 2,
            imageUrl: 'www.images/red-hat.jpg',
            price: 150,
            name: 'Red Hat'
        },
        {
            id: 3,
            imageUrl: 'www.images/white-hat.jpg',
            price: 180,
            name: 'White Hat'
        },
        {
            id: 4,
            imageUrl: 'www.images/green-hat.jpg',
            price: 130,
            name: 'Green Hat'
        }
    ];

    const props = {
        title: "Hats",
        items: items,
        history: "",
        match: "",
        routeName: ""
    };
    const wrapper = shallow(<CollectionPreview.WrappedComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
});