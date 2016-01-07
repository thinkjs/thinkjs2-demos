export default {
  on: true, //是否开启 WebSocket
  type: "socket.io",
  allow_origin: "",
  sub_protocal: "",
  adapter: undefined,
  path: "", //url path for websocket
  messages: {
    open: 'home/index/open',
    close: 'home/index/close',
    chat: 'home/index/chat',
    typing: 'home/index/typing',
    stoptyping: 'home/index/stoptyping',
    adduser: 'home/index/adduser'
  }
};