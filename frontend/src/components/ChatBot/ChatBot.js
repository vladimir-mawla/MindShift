import React, {Component} from 'react';

class Chatbot extends Component {

  componentDidMount() {
    (function(d, m){
      var kommunicateSettings = {"appId":"34f63a33d09b5665fc39b585e12d27dd0","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }

  render(){
    return(
      <div></div>
    )
  }
}
export default Chatbot;