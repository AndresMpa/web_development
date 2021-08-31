let socket = new WebSocket("http://localhost:3000/websocket");
const message = document.querySelector("#message")
const app = document.querySelector("#app")

socket.onopen = function(e) {
  socket.send("This is a trial");
  conntectionLabel = document.createElement("p")
  conntectionLabel.innerHTML = `<span>Status: </span> connected to server`
  app.appendChild(conntectionLabel)
};

socket.onmessage = function(event) {
  messageLabel = document.createElement("p")
  messageLabel.innerHTML = `<span>Server says: </span> ${event.data}`
  app.appendChild(messageLabel)
};

socket.onclose = function(event) {
  if (event.wasClean) {
    alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    alert('[close] Connection died');
  }
};

socket.onerror = function(error) {
  alert(`[error] ${error.message}`);
};
