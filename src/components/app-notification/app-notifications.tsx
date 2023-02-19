import { memo, useCallback, useMemo } from 'react';

import { Notification, NotificationProps } from '@alfalab/core-components/notification';
import { NotificationManager } from '@alfalab/core-components/notification-manager';
import { Spinner } from '@alfalab/core-components/spinner';

import { useAppDispatch, useAppSelector } from 'store';
import { notificationsActions, notificationsSelector } from 'store/notifications';

export const AppNotifications = memo(() => {
  const dispatch = useAppDispatch();
  const { notifications } = useAppSelector(notificationsSelector);

  const handleRemoveNotification = useCallback(
    (id: string) => {
      dispatch(notificationsActions.remove(id));
    },
    [dispatch]
  );

  const notificationsList = useMemo(
    () =>
      notifications.map((notification: NotificationProps) => {
        const { id, title, badge, autoCloseDelay, children } = notification;

        return (
          <Notification
            key={id}
            id={id}
            title={title}
            badge={badge}
            autoCloseDelay={autoCloseDelay}
            dataTestId='app-notifications-item'
            leftAddons={
              badge ? null : (
                <Spinner
                  visible={true}
                  size='s'
                  colors='inverted'
                  dataTestId='app-notifications-spinner'
                />
              )
            }
          >
            {children}
          </Notification>
        );
      }),
    [notifications]
  );

  return (
    <NotificationManager
      dataTestId='app-notifications'
      notifications={notificationsList}
      onRemoveNotification={handleRemoveNotification}
    />
  );
});
