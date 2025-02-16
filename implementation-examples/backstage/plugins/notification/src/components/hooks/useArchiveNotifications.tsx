/*
 *  Copyright (c) 2022 Red Hat Developer
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 */

/**
 * @author Richard Wang (Github: RichardW98)
 */

import { useContext, useState } from 'react';
import { NotificationContext } from '../context/notifications';
import ToastContext from '../context/toast';
import { useAxios } from '../config/axios';

const useArchiveNotifications = () => {
  const axios = useAxios();
  const notificationsContext = useContext(NotificationContext);
  const toastContext = useContext(ToastContext);
  const [isLoadingState, setIsLoadingState] = useState(false);

  const archiveNotifications = async notificationIds => {
    try {
      setIsLoadingState(true);
      await Promise.all(
        notificationIds.map(async notificationId => {
          await axios.put(
            `/api/v1/notifications/update/archive/${notificationId}`,
          );
        }),
      );
      const newListOfNotifications =
        notificationsContext.allNotifications.filter(
          notification => !notificationIds.includes(notification.id),
        );
      notificationsContext.setAllNotifications(newListOfNotifications);
      notificationsContext.setSelectedNotifications([]);
      toastContext.handleOpenToast(
        `Notification${notificationIds.length > 1 ? 's' : ''} archived`,
        'success',
      );
    } catch (error) {
      toastContext.handleOpenToast(
        `Oops! Something went wrong. Please try again`,
      );
    } finally {
      setIsLoadingState(false);
    }
  };

  return {
    archiveNotifications,
    isLoading: isLoadingState,
  };
};

export default useArchiveNotifications;
