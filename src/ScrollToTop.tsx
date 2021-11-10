import { useEffect } from 'react';
import { useLocation, withRouter } from 'react-router-dom';

interface ScrollToTopProps {
    children?: JSX.Element[]
}

const ScrollToTop = (props: ScrollToTopProps) => {

    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location]);

    return props.children;
}

// @ts-ignore
export default withRouter(ScrollToTop);
