import { act, screen } from '@testing-library/react';

import { NotificationProps } from '@alfalab/core-components/notification';

import { notificationsActions } from 'store/notifications';

import { renderWithProviders } from 'utils/tests-utils';

import { AppNotifications } from './app-notifications';

describe('App-notification component', () => {
  describe('Render tests', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should render correctly', () => {
      renderWithProviders(<AppNotifications />);

      expect(screen.getByTestId('app-notifications')).toBeInTheDocument();
    });

    it('should render notifications correctly', () => {
      const notifications: NotificationProps[] = [
        { title: 'Уведомление', badge: 'positive', id: '1' },
      ];

      renderWithProviders(<AppNotifications />, {
        preloadedState: { notifications: { notifications } },
      });

      expect(screen.getAllByTestId('app-notifications-item')).toHaveLength(notifications.length);
    });

    const mockUseDispatch = jest.fn();

    it('should run close dispatch actions after 1000 ms', async () => {
      jest.useFakeTimers();
      jest.mock('store/index.ts', () => ({
        useAppDispatch: mockUseDispatch,
      }));

      const notifications: NotificationProps[] = [
        { title: 'Уведомление', badge: 'positive', autoCloseDelay: 0, id: '2' },
      ];

      renderWithProviders(<AppNotifications />, {
        preloadedState: { notifications: { notifications } },
      });

      act(() => {
        jest.runAllTimers();

        setTimeout(() => {
          expect(mockUseDispatch).toHaveBeenCalledWith(notificationsActions.remove);
        }, 1000);
      });
    });

    it('should render notification spinner', async () => {
      const notifications: NotificationProps[] = [{ id: '3' }];

      renderWithProviders(<AppNotifications />, {
        preloadedState: { notifications: { notifications } },
      });

      expect(screen.getByTestId('app-notifications-spinner')).toBeInTheDocument();
    });
  });
});
