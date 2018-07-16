import { SearchBar, WingBlank } from 'antd-mobile';
import React from 'react';

class Search extends React.Component {
    state = {
        value: '',
    };
    // componentDidMount() {
    //     this.autoFocusInst.focus();
    // }
    onSubmit = (value) => {
        if(this.props.history){
            this.props.history.push(`/search/${value}`);
        }
    }

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
                    placeholder="搜索商品"
                    onSubmit={this.onSubmit}
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