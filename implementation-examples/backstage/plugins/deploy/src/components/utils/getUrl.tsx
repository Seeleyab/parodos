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

import { configApiRef, useApi } from '@backstage/core-plugin-api';

export const getUrl = (): string => {
  const config = useApi(configApiRef);
  const url = config
    .getConfigArray('app.support.items')[2]
    .getConfigArray('links')[0]
    .getString('url');
  console.log('deploy url:', url);
  return url;
};

export const getEventUrl = (): string => {
  const config = useApi(configApiRef);
  const url = config
    .getConfigArray('app.support.items')[5]
    .getConfigArray('links')[0]
    .getString('url');
  console.log('event url:', url);
  return url;
};
