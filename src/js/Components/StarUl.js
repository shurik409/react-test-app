//@flow

import React, { PureComponent } from 'react';
import Button from './Button'


type Props = {
    data: Array<{
        name: string
    }>,
    testObj: { name: string }
}

type State = {
    testObj: { name: string }
}

class StarUl extends PureComponent<Props, State>{

    constructor(props: Props, state: State) {
        super(props, state);
        this.state= { testObj: props.testObj}
    }

    // componentDidMount() {
    //     const tmpObj = Object.assign({},this.props);
    //     this.setState({
    //         testObj: tmpObj.testObj
    //     })
    // }

    changeState = () => {
        console.log('ChangeUl');
        const tmpObj = Object.assign({},this.props.testObj);
        tmpObj.name = 'asd';
        this.setState({
            testObj: tmpObj
        })
    }

    render(){
    console.log('UL');
        return (
            <>
                <h1>TestObj {this.state.testObj.name}</h1>
                <Button click={this.changeState}>Change TestObj</Button>
                <ul>
                    {this.props.data.map(el =>(
                        (el.name !== false && <li>
                            {el.name}
                        </li>)
                    ))}
                </ul>
            </>
        )
    }
}


export default StarUl;