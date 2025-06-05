import { observer } from 'mobx-react-lite';
import React from 'react';
import { Divider, Header } from 'semantic-ui-react';

interface Props {
    header: string;
    type: string;
    divider?: boolean;
}

export default observer(function PageHeader({header, type, divider}: Props) {
    return (
		<>
            <Header as={type} content={header} className='pageheader' />
			{divider && <Divider />}
		</>
    )
})