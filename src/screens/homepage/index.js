import React, { Component } from 'react';
import ChannelItem from '../../components/channel-item';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            channelData: [],
            error: null,
            uData: null,
            hideData: false
        };
    }
    componentDidMount() {
        fetch("https://demo0537743.mockable.io/channel-list")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        channelData: result.data
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: 'error found'
                    });
                }
            )
    }
    passData = (name) => {
        let { uData } = this.state;
        if (uData) {
            this.setState({
                hideData: true,
            }, () => {
                setTimeout(() => {
                    this.setState({
                        uData: name,
                        hideData: false
                    });
                }, 500)
            });
        } else {
            this.setState({
                uData: name
            });
        }
    }
    render() {
        const { isLoaded, channelData, error, uData, hideData } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        {
                            !isLoaded ?
                                <div>Loading...</div>
                                :
                                <div className="channel-list">
                                    {channelData.map((data, idx) => (
                                        <ChannelItem icon={data.picture} title={data.name} key={data._id} handleClick={() => { this.passData(data.name) }} />
                                    ))}
                                </div>
                        }

                    </div>
                    <div className="col-sm-8">
                        {
                            <div className={!hideData ? 'anim-typewriter white-space' : 'anim-typewriter-del white-space'}>
                                {uData}
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;