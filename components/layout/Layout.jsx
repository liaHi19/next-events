import React from "react";

import { useNotification } from "../../store/NotificationContext";

import MainHeader from "./mainHeader/MainHeader";
import Notification from "../ui/notification/Notification";

const Layout = ({ children }) => {
  const { notification } = useNotification();
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
    </>
  );
};

export default Layout;
