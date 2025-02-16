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

import * as React from 'react';
import PropTypes from 'prop-types';

const MarkAsReadIcon = ({ disabled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      viewBox="0 0 24 24"
      width={24}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M12 19a6.995 6.995 0 0110-6.32V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h8.08c-.05-.33-.08-.66-.08-1zM4 6l8 5 8-5v2l-8 5-8-5V6zm13.34 16l-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L23 16.34 17.34 22z"
        fill={disabled ? 'rgba(0, 0, 0, 0.26)' : '#2A2A2A'}
      />
    </svg>
  );
};

MarkAsReadIcon.propTypes = {
  disabled: PropTypes.bool.isRequired,
};

export default MarkAsReadIcon;
