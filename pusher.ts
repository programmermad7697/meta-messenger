import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1516139",
  key: "955b6c8512a79d693018",
  secret: "8adf51cc66c187733ef5",
  cluster: "ap2",
  useTLS: true,
});

export const clientPusher = new ClientPusher("955b6c8512a79d693018", {
  cluster: "ap2",
  forceTLS: true,
});
