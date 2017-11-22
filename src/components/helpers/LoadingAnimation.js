import React from 'react';


class LoadingAnimation extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.animationInterval = 50;
        this.dots = 10;

        this.state= {
            frame: 1
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.updateLocalState();
        }, this.animationInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateLocalState(){
        this.setState({frame: this.state.frame + 1});
    }

    render() {
        let animationDots = this.state.frame % (this.dots + 1);
        let text = '';
        while (animationDots > 0){
            text += '.';
            animationDots--;
        }
        return (
            <div>
                <span {...this.props}>Loading&nbsp;{text}</span>
            </div>
        );
    }
}

export default LoadingAnimation;
