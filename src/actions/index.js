import alt from '../alt';
import Firebase from 'firebase';


class Actions {
    constructor() {
        this.generateActions(
            'channelsReceived',
            'channelsFailed',
            'messagesReceived',
            'messagesFailed'
        );
    }

    login(args) {
        return (dispatch) => {
            var firebaseRef = new Firebase('https://react-flux-webpack.firebaseio.com');
            firebaseRef.authWithOAuthPopup("google", (error, user) => {
                if (error) {
                    return;
                }

                dispatch(user);
            });
        }
    }
}

export default alt.createActions(Actions);
