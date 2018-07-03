import React, { Component } from 'react';
import { Link } from "dva/router";
import { List, Radio, Modal } from 'antd-mobile';
import { connect } from "dva";
import styles from "./Address.css";
import Return from "../../../components/return/return.js";


const Item = List.Item;
const Brief = Item.Brief;
const alert = Modal.alert;

class Address extends Component {
    constructor() {
        super();
        this.state = {
            prevPage: '/user'
        }
    }
    change = (e, id) =>{
        const datas = this.props.address.data;
        let staticaddress;
        datas.map(i => {
            i.checked = false;
            if(i.id === id) {
                i.checked = true;
                staticaddress = i;
            }
            return null;
        });
        this.props.dispatch({ type: 'address/staticaddress', payload: {data: datas, staticaddress: staticaddress, id: id}});
    }
    // 删除该地址
    delete = (id) => {
        alert('确定删除吗？', '', [
            { text: '取消', onPress: () => console.log('cancel') },
            { text: '确定', onPress: () => {
                
                const datas = this.props.address.data;
                let arr = [];
                let arrAfter = [];
                datas.map(i => {
                    if(i.id === id) {
                        arr.push(i);
                    } else {
                        arrAfter.push(i);
                    };
                    return null;
                });
                this.props.dispatch({ type: 'address/deleteChange', payload: {datas: arr, data: arrAfter}});
            } },
        ])
    }
    render() {
        const data = this.props.address.data;
        console.log(data);
        
        return (
            <div>
                <Return page={this.state.prevPage} />
               { 
                   data.map(i => 
                        <List className="my-list" key={i.id}>
                            <Item
                                extra={
                                    <Link to={`./write/${i.id}`}><i className="fa fa-edit"></i></Link>
                                }
                                multipleLine
                            >
                                {i.name} {i.phone}<Brief>{i.address}</Brief>
                            </Item>
                            <div className={styles.radio}>
                                <Radio className={styles.myradio} onChange={(e, id) => {this.change(e, i.id)}} checked={+i.checked}>设为默认地址</Radio>
                                <i className="fa fa-trash" style={{ float: 'right', marginRight: '20px'}} onClick={(id) => this.delete(i.id)}></i>
                            </div>
                        </List>
                   )
               }
               <Link to="./write/0">
                <footer className={styles.footer}>
                    新增收货地址
                </footer>
               </Link>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { address: state.address };
}

const AddressState = connect(mapStateToProps)(Address);

export default AddressState;