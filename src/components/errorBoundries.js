import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true,error };
    }

    componentDidCatch(error, errorInfo) {
         // You can also log the error to an error reporting service
         console.error('Error caught by ErrorBoundary:', error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Something went wrong.</h1>
                    <p>{this.state.error && this.state.error.toString()}</p>
                    <p>Component Stack Error Details: {this.state.errorInfo.componentStack}</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
