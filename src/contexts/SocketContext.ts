import React from 'react';
import {io} from 'socket.io-client';

const host = process.env.HOST_CLIENTSERVER || 'http://ec2-3-17-183-122.us-east-2.compute.amazonaws.com:5000';

export const socket = io(host);
const SocketContext = React.createContext(socket);
export const SocketProvider = SocketContext.Provider;
// export const SocketConsumer = SocketContext.Consumer;
export default SocketContext;
