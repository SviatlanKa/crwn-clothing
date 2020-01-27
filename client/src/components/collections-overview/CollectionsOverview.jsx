import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionsForPreview } from '../../redux/shop/shop-selectors';
import CollectionPreview from '../collection-preview/CollectionPreview';
import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => (
    <div className="collection-overview">
        <h1>Collections</h1>
        {
            collections.map(({ id, ...otherCollectionsProps }) => (
                <CollectionPreview key={id} { ...otherCollectionsProps } />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview)
