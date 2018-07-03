import { Modal, WhiteSpace, WingBlank } from 'antd-mobile';
import React from 'react';
import { connect } from "dva";

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}

class Model extends React.Component {
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = () => {
        const state = this.props.isModal
        this.props.dispatch({type: 'modal/save', payload: {isModal: !state}})
    }



    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }

    render() { 
        const content = this.props.content;
        console.log(content);
        
        return (
            <WingBlank>
                <WhiteSpace />
                <Modal
                    visible={this.props.isModal}
                    transparent
                    maskClosable={true}
                    onClose={this.onClose.bind(this)}
                    title={content.name}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                    <div style={{ height: 250 }}>
                        {content.abstract}
                    </div>
                </Modal>
            </WingBlank>
        );
    }
}

const mapStateToProps = ({modal}) => {
    return {
        isModal: modal.isModal,
        content: modal.content
    }
}

export default connect(mapStateToProps)(Model);