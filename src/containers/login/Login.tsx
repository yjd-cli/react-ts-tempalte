import React from 'react';
import *  as styles from './login.less';
import logo from '@assets/images/logo.svg';
import {connect} from "@redux-store/connect";
import commonActions from "@redux-store/actions/common";
import {AppState} from "@redux-store/reducers";
import GlobalContext from "@src/assets/common/global-context"

interface Props {
    historyGo?:typeof commonActions.historyGo,
}

// function mapStateToProps(state:AppState) {
//     return {
//         router: state.router
//     };
// }

@connect(null, {
    historyGo: commonActions.historyGo,
})
export default class Login extends React.Component <Props>{

    static contextType = GlobalContext;
    constructor(props, context) {
        super(props, context);
        // console.log(context);
    }

    handleLinkBtnClick = () => {
        this.props.historyGo('./register');
    };

    render() {
        return (
            <div className={styles.container}>
                <header className={styles.header}>
                    <img src={logo} className={styles.logo} alt="logo"/>
                    <p>This is Login Page </p>
                    <p className={styles.linkBtn} onClick={this.handleLinkBtnClick}>Go to Register Page </p>
                </header>
            </div>
        );
    }
}

