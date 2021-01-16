import { useEffect, useRef } from "react";
import { Switch } from "react-router-dom";
import { insertMessage } from "../actions/message.action";
import { updateUserStatus } from "../actions/user.action";
import { useAuthContext } from "../contexts/auth.context";
import { useMessageContext } from "../contexts/messages.context";
import { useUserContext } from "../contexts/user.context";
import AppRoute from "./AppRoute";
import NavigationBar from "./NavigationBar";
import io from 'socket.io-client';
import Dashboard from '../pages/dashboard/Dashboard';
import Payment from '../pages/payment/Payment';
import NotFound from '../pages/error/Notfound';

const MainLayout = () => {
  const { authState } = useAuthContext();
  const { userDispatch } = useUserContext();
  const { messageDispatch } = useMessageContext();
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io(process.env.REACT_APP_API_BASE_URL, {
      query: { token: authState.token },
    });

    socket.current.on('connect', () => {
        console.log('Connected to socket.');
    });

    socket.current.on('connect_failed', () => {
        console.log('Failed to connect to socket.');
    });

    socket.current.on('connect_error', () => {
        console.log('Error while connecting to socket.');
    });

    socket.current.on('disconnect', () => {
        console.log('Socket disconnected.');
    });

    socket.current.on('chat-message', (message) => {
      insertMessage(messageDispatch, message);
    });

    socket.current.on('user-status-change', (user) => {
      updateUserStatus(userDispatch, user);
    });

    return () => {
      socket.current.disconnect();
    };
  }, [messageDispatch, userDispatch, authState.token]);

  return (
    <>
      <NavigationBar />
      <Switch>
        <AppRoute
          exact
          path="/"
          component={Dashboard}
          isPrivate={true}
          socket={socket.current}
        ></AppRoute>

        <AppRoute
          exact
          path="/payment"
          component={Payment}
          isPrivate={true}
          socket={socket.current}
        ></AppRoute>

        <AppRoute
          exact
          path="*"
          component={NotFound}
          isPrivate={true}
          socket={socket.current}
        ></AppRoute>
      </Switch>
    </>
  );
};

export default MainLayout;