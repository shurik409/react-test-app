// @flow

import React, { PureComponent } from 'react';

type Props = {
  children?: string,
};


class NameHeader extends PureComponent<Props> {
  render(){
    console.log('Header');
    return <h1>{this.props.children}</h1>
  }
}

export default NameHeader;