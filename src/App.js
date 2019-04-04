import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as Talk from 'talkjs';

class App extends Component {

  constructor(props) {
    super(props);

    this.inbox = undefined;
  }

  componentDidMount() {
    Talk.ready
      .then(() => {

        /* const me = new Talk.User({
          id: "1001",
          name: "Rajat Barman",
          email: "barman.rajat7@gmail.com",
          photoUrl: "https://talkjs.com/docs/img/george.jpg",
          welcomeMessage: "Hey there! How are you? :-)",
          role: "buyer"
        }); */
        const me = new Talk.User({
          id: "1111",
          name: "Alexis Sanchez",
          email: "barman.rajat7@yahoo.co.in",
          photoUrl: "https://talkjs.com/docs/img/ronald.jpg",
          welcomeMessage: "Hey there! Love to chat :-)",
          role: "seller"
        });

        if (!window.talkSession) {
          window.talkSession = new Talk.Session({
            appId: "t495HVz6",
            me: me
          });
        }

        /* const other1 = new Talk.User({
          id: "1111",
          name: "Alexis Sanchez",
          email: "barman.rajat7@yahoo.co.in",
          photoUrl: "https://talkjs.com/docs/img/ronald.jpg",
          welcomeMessage: "Hey there! Love to chat :-)",
          role: "seller"
        }); */
        const other1 = new Talk.User({
          id: "1001",
          name: "Rajat Barman",
          email: "barman.rajat7@gmail.com",
          photoUrl: "https://talkjs.com/docs/img/george.jpg",
          welcomeMessage: "Hey there! How are you? :-)",
          role: "buyer"
        })

        // You control the ID of a conversation. oneOnOneId is a helper method that generates
        // a unique conversation ID for a given pair of users. 
        const conversationId = Talk.oneOnOneId(me, other1);

        const conversation = window.talkSession.getOrCreateConversation(conversationId);
        conversation.setParticipant(me);
        conversation.setParticipant(other1);
        // conversation.setParticipant(other2);

        this.inbox = window.talkSession.createInbox({
          selected: conversation
        });
        this.inbox.mount(this.container);
        /* var chatbox = window.talkSession.createChatbox(conversation);
        chatbox.mount(this.container); */
        /* window.talkSession.unreads.on("change", function (conversationIds) {
          var unreadCount = conversationIds.length;
          console.log("Conversation ID's", conversationIds);
        }); */
        /* console.log(window.talkSession.unreads()) */


      })
      .catch(e => console.error(e));
  }

  componentWillUnmount() {
    if (this.inbox) {
      this.inbox.destroy();
    }
  }

  render() {
    return (<span>
      <div ref={c => this.container = c}>Loading...</div>
    </span>);
  }
}

export default App;