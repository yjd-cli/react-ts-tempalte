import * as React from 'react';
import * as styles from './nav-link.less'
import {Route, Link} from 'react-router-dom';

function NavLink({to, exact, children}) {
    return (
        <Route path={to} exact={exact} children={
            props => {
                console.log(props);
                return <Link className={props.match ? styles.active : ''} to={to}>{children}</Link>;
            }
        }/>
    )
}

export default NavLink
