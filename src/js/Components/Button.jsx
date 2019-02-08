// @flow

import React  from 'react';

type Props = {
  children: string,
  click: (event: SyntheticEvent<HTMLButtonElement>) => void
};


function Button(props: Props) {
  console.log('button');
	return (
        <>
        {props.click !== undefined ? (
                <button onClick={e => props.click(e)}>{props.children}</button>
            ) : (
                <button >{props.children}</button>
            )
        }
        </>
	);
}

export default React.memo<Props>(Button);