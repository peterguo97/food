import React from 'react';

import { Carousel, WingBlank } from 'antd-mobile';

class Nav extends React.Component {
    state = {
        data: [1, 2, 3],
        imgHeight: 176,
    }

    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.state.data.map(val => (
                        <div
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`http://www.aixumu.net/static/images/${val}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                               /*  onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }} */
                            />
                        </div>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}

export default Nav;
