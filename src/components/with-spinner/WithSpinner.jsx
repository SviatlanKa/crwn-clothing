import React from 'react';
import './WithSpinner.scss';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => (
    isLoading ? (
        <div className="spinner-overlay">
            <div className="spinner">
            </div>
        </div>
    ) : (
        <WrappedComponent { ...otherProps }/>
    )
);

export default WithSpinner;