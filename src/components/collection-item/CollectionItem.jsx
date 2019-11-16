import React from 'react';
import './CollectionItem.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className="collection-item">
        <div
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div key={id} className="collection-footer">
            <div className="name">{name}</div>
            <div className="price">{price}</div>
        </div>
    </div>
);

export default CollectionItem;