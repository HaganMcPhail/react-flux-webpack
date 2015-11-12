import React from 'react';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			messages: [
				'hello there, how are you',
				'i am fine, how are you'
			]
		}
	}

	render(){
		var messageNodes = this.state.messages.map((message) => {
			return (
				<div>{message}</div>
			);
		});

		return (
			<div>{messageNodes}</div>
		)
	}
}

export default App;