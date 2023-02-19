import { v1 } from 'uuid';

import { NotificationProps } from '@alfalab/core-components/notification';

import { initialState, notificationsActions, notificationsReducer } from '../slice';

jest.mock('uuid');

describe('slice tests', () => {
  const id = '123456789';

  const notificationPayload: NotificationProps = {
    title: 'Уведомление',
  };

  const notificationEqual = {
    ...notificationPayload,
    children: '',
    autoCloseDelay: 5000,
    id,
  };

  beforeEach(() => {
    (v1 as jest.Mock).mockImplementation(() => id);
  });

  it('should return the initial state', () => {
    expect(notificationsReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should test success action', () => {
    const notifications: NotificationProps[] = [
      {
        ...notificationEqual,
        badge: 'positive',
      },
    ];

    expect(
      notificationsReducer(initialState, notificationsActions.success(notificationPayload))
    ).toEqual({
      notifications,
    });
  });

  it('should test error action', () => {
    const notifications: NotificationProps[] = [
      {
        ...notificationEqual,
        badge: 'negative',
      },
    ];

    expect(
      notificationsReducer(initialState, notificationsActions.error(notificationPayload))
    ).toEqual({
      notifications,
    });
  });

  it('should test neutral action', () => {
    const notifications: NotificationProps[] = [notificationEqual];

    expect(
      notificationsReducer(initialState, notificationsActions.neutral(notificationPayload))
    ).toEqual({
      notifications,
    });
  });

  it('should test remove action', () => {
    const notifications: NotificationProps[] = [
      {
        ...notificationEqual,
        badge: 'positive',
      },
    ];

    expect(notificationsReducer({ notifications }, notificationsActions.remove(id))).toEqual({
      notifications: [],
    });
  });

  it('should test optional parameters', () => {
    const notifications: NotificationProps[] = [
      {
        ...notificationEqual,
        badge: 'positive',
      },
    ];

    expect(
      notificationsReducer(
        initialState,
        notificationsActions.success({
          title: notificationPayload.title,
        })
      )
    ).toEqual({
      notifications,
    });
  });
});
