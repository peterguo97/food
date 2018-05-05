import React, { Component } from "react";
import UserLogo  from "../../assets/yay.jpg";
import  styles from "./User.css";
// import { Link } from "dva/router";

class User extends Component {
    render() {
        return (
            <div className={styles.user}>
                <img src={UserLogo} alt="头像"/>
                <p className={styles.username}>名字</p>         
            </div>
        );
    }
}

export default User;