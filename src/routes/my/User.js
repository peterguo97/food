import React, { Component } from "react";
// import UserLogo  from "../../assets/yay.jpg";
import  styles from "./User.css";
// import { Link } from "dva/router";
import { connect } from "dva";

class User extends Component {
    render() {
        const { img, name} = this.props.user;   
        return (
            <div className={styles.user}>
                {/* <img src={UserLogo} alt="头像"/> */}
                <img src={img} alt="头像" />

                <p className={styles.username}>{name}</p>         
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { user: state.user };
}

const UserState = connect(mapStateToProps)(User);
export default UserState;