import React from 'react';
import {io} from 'socket.io-client';
export const socket = io("localhost:5000");
const SocketContext = React.createContext(socket);
export const SocketProvider = SocketContext.Provider;
// export const SocketConsumer = SocketContext.Consumer;
export default SocketContext;
