// eslint-disable-next-line no-unused-vars
const withLogin = (WrappedComponent) => {
    return function EnhancedComponent({ islogIn, ...props }) {
        if (islogIn) {
            return <p>Please Login first</p>;
        }
        return <WrappedComponent {...props} />;
    };
};

export default withLogin;
