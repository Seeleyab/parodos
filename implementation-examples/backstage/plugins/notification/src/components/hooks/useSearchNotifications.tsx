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
import { useAxios } from '../config/axios';
import * as R from 'ramda';
import ToastContext from '../context/toast';
import { NotificationContext } from '../context/notifications';

const useSearchNotifications = () => {
  const axios = useAxios();
  const [isLoadingState, setIsLoadingState] = useState(false);
  const toastContext = useContext(ToastContext);
  const notificationsContext = useContext(NotificationContext);

  const searchNotifications = async searchText => {
    try {
      setIsLoadingState(true);
      //TO-DO: Replace with value from single-spa
      const username = 'dev';
      const searchResultsResponse = await axios.get(
        `/api/v1/notifications/${username}/search?searchTerm=${encodeURI(
          searchText,
        )}`,
      );
      const notificationListFromResponse = R.pathOr(
        [],
        ['data', '_embedded', 'notificationrecords'],
        searchResultsResponse,
      );
      notificationsContext.setAllNotifications(notificationListFromResponse);
    } catch (error) {
      toastContext.handleOpenToast(
        `Oops! Something went wrong. Please try again`,
      );
    } finally {
      setIsLoadingState(false);
    }
  };

  return {
    searchNotifications,
    isLoading: isLoadingState,
  };
};

export default useSearchNotifications;
