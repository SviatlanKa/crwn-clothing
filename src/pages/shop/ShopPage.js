import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import { SHOP_DATA} from '../../redux/shop/shop.data';

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                <h1>Collections</h1>
                {
                    collections.map(({ id, ...otherCollectionsProps }) => (
                        <CollectionPreview key={id} { ...otherCollectionsProps } />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;