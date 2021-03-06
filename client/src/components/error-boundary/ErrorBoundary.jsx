import React, { Component } from 'react';
import './ErrorBoundary.scss'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-image-overlay">
                    <div className="error-image"></div>
                    <h2 className="error-image-text">Oh no! We tripped up!</h2>
                </div>
            )
        }
        return this.props.children;
    }
}

export  default ErrorBoundary;