import React from 'react';
import *  as styles from './register.less';
import logo from '@assets/images/logo.svg';
import {connect} from "@redux-store/connect";
import commonActions from "@redux-store/actions/common";


interface Props {
    historyGo?:typeof commonActions.historyGo,
}

@connect(null, {
    historyGo: commonActions.historyGo,
})
export default class Register extends React.Component<Props> {


    handleLinkBtnClick = () => {
        this.props.historyGo('./login');
    };

    render() {
        return (
            <div className={styles.container}>
                <header className={styles.header}>
                    <img src={logo} className={styles.logo} alt="logo"/>
                    <p>This is Register Page </p>
                    <p className={styles.linkBtn} onClick={this.handleLinkBtnClick}>Go to the Login Page </p>
                </header>
            </div>
        );
    }
}

