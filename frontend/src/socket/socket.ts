export {};
//import { io } from 'socket.io-client'
//
//
//type VALID_EVENTS = "on_connect"
//    | "stock_data_resp"
//    | "stock_data_req"
//    | "stock_data_create"
//    | "on_quit"
//
//type Event = {
//    name: VALID_EVENTS,
//    data?: unknown,
//}
//
//class Socket {
//    constructor(endpoint: string) {
//        this.endpoint = endpoint;
//        this.socket = io(endpoint);
//    }
//
//    function connect() {
//        this.socket.emit("onconnect", {data: "attemping connection"});
//    }
//
//    function on(event: Event) {
//
//    }
//
//    function close() {
//        return this.socket.disconnect();
//    }
//}
