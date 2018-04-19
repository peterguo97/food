import { SearchBar, WingBlank } from 'antd-mobile';
import React from 'react';

class Search extends React.Component {
    state = {
        value: '',
    };
    // componentDidMount() {
    //     this.autoFocusInst.focus();
    // }
    onChange = (value) => {
        this.setState({ value });
    };
    onClear = () => {
        this.setState({ value: '' });
    };
    handleClick = () => {
        this.manualFocusInst.focus();
    }
    render() {
        return (<div>
            <WingBlank>
                <SearchBar
                    placeholder="搜索附近商家"
                    onSubmit={value => console.log(value, 'onSubmit')}
                    onClear={this.onClear}
                    onBlur={() => console.log('onBlur')}
                    onCancel={() => console.log('onCancel')}
                    onChange={this.onChange}
                />
            </WingBlank> 
        </div>);
    }
}

export default Search;