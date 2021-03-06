import alt from '../alt';
import Actions from '../actions';
import {decorate, bind, datasource} from 'alt/utils/decorators';
import ChannelSource from '../sources/ChannelSource';
import MessageSource from '../sources/MessageSource';
import _ from 'lodash';

@datasource(ChannelSource, MessageSource)
@decorate(alt)
class ChatStore {
    constructor() {
        this.state = {user: null, messages: null};
    }

    @bind(Actions.messagesReceived)
    receivedMessages(messages) {
        _(messages)
            .keys()
            .each((k) => {
                messages[k].key = k;
            })
            .value();

        this.setState({
            messages
        });

        setTimeout(this.getInstance().getMessages, 100);

    }

    @bind(Actions.channelsReceived)
    receivedChannels(channels) {
        let selectedChannel;
        _(channels)
            .keys()
            .each((key, index) => {
                channels[key].key = key;
                if (index == 0) {
                    channels[key].selected = true;
                    selectedChannel = channels[key];
                }
            })
            .value();

        this.setState({
            channels,
            selectedChannel
        })
    }

    @bind(Actions.login)
    login(user) {
        this.setState({user: user});
    }
}

export default alt.createStore(ChatStore);
