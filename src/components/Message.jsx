import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<ListItem
				leftAvatar={<Avatar src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAJtAAAAJDE2MmFiODc4LWFiYzItNGI5ZC1iODIzLWZiY2M1OTVjNGU0NQ.jpg"/>}
				>{this.props.message}
			</ListItem>
		)
	}
}

export default Message;