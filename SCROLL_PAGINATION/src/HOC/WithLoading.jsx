// eslint-disable-next-line no-unused-vars
const withLoading = (WrappedComponent) => {
    return function EnhancedComponent({ isLoading, ...props }) {
        if (isLoading) {
            return <p>Loading student Name.....</p>;
        }
        return <WrappedComponent {...props} />;
    };
};

export default withLoading;