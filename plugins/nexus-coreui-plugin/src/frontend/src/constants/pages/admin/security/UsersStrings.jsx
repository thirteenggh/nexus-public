/*
 * Sonatype Nexus (TM) Open Source Version
 * Copyright (c) 2008-present Sonatype, Inc.
 * All rights reserved. Includes the third-party code listed at http://links.sonatype.com/products/nexus/oss/attributions.
 *
 * This program and the accompanying materials are made available under the terms of the Eclipse Public License Version 1.0,
 * which accompanies this distribution and is available at http://www.eclipse.org/legal/epl-v10.html.
 *
 * Sonatype Nexus (TM) Professional Version is available from Sonatype, Inc. "Sonatype" and "Sonatype Nexus" are trademarks
 * of Sonatype, Inc. Apache Maven is a trademark of the Apache Software Foundation. M2eclipse is a trademark of the
 * Eclipse Foundation. All other trademarks are the property of their respective owners.
 */
import React from 'react';
import {NxTextLink} from '@sonatype/react-shared-components';

export default {
  USERS: {
    MENU: {
      text: '用户',
      description: '用户管理',
    },
    MODAL: {
      TEXT: '必须先确认当前密码，才能更改新密码',
      CHANGE_PASSWORD: '更改密码',
      NEXT: '下一步',
      CONFIRM_PASSWORD: '确认密码',
      NEW_PASSWORD: '新密码',
      ADMIN_PASSWORD: '管理员密码',
      CONFIRMING_ADMIN_PASSWORD: '确认管理员密码',
      ERROR: {
        MISSING_PASSWORD: '请求正文中未提供密码',
        PERMISSION: '用户没有执行该操作的权限。',
        NOT_FOUND: '系统中未找到用户。'
      }
    },
    LIST: {
      CREATE_BUTTON: 'Create Local User',
      FILTER_PLACEHOLDER: 'Filter by user ID',
      EMPTY_LIST: 'There are no users available',
      COLUMNS: {
        USER_ID: 'User ID',
        REALM: 'Realm',
        FIRST_NAME: 'First Name',
        LAST_NAME: 'Last Name',
        EMAIL: 'Email',
        STATUS: 'Status',
      },
      HELP: {
        TITLE: 'What is a User?',
        TEXT: <>
          A user is an individual account attached to a single ID and email address.
          See our{' '}
          <NxTextLink external href="http://links.sonatype.com/products/nxrm3/docs/users">
            documentation
          </NxTextLink>
          {' '}for more information.
        </>,
      },
    },
    FORM: {
      CREATE_TITLE: 'Create User',
      EDIT_TILE: (name) => `Edit ${name}`,
      EDIT_DESCRIPTION: (source) => `${source} User`,
      LOCAL_USER_SOURCE: 'Local',
      DEFAULT_USER_WARNING: 'This is a default user and cannot be modified.',
      SECTIONS: {
        SETUP: 'User Setup',
        ROLES: 'Roles',
      },
      ID: {
        LABEL: 'ID',
        SUB_LABEL: 'This will be used as the username',
      },
      FIRST_NAME: {
        LABEL: 'First Name',
      },
      LAST_NAME: {
        LABEL: 'Last Name',
      },
      EMAIL: {
        LABEL: 'Email',
        SUB_LABEL: 'Used for notifications',
      },
      PASSWORD: {
        LABEL: 'Password',
      },
      CONFIRM_PASSWORD: {
        LABEL: 'Confirm password',
      },
      STATUS: {
        LABEL: 'Status',
        OPTIONS: {
          ACTIVE: 'Active',
          DISABLED: 'Disabled',
        }
      },
      ROLES: {
        AVAILABLE: 'Available',
        GRANTED: 'Granted',
        EMPTY_LIST: 'There are no assigned roles.',
      },
      EXTERNAL_ROLES: {
        LABEL: 'External Roles',
        EMPTY_LIST: 'No roles from the external system were mapped for this user.',
      },
    },
    MESSAGES: {
      CONFIRM_DELETE: {
        TITLE: 'Delete User',
        MESSAGE: (name) => `Are you sure you want to delete the user named "${name}?"`,
        YES: 'Delete',
        NO: 'Cancel'
      },
      DELETE_SUCCESS: (name) => `User deleted: ${name}`,
    },
    TOKEN: {
      LABEL: 'User Token Options',
      USER_TOKEN: 'User Token',
      ACTIVE_FEATURE: 'Resetting a user’s token will invalidate their current token and force a new token to be created the next time it is accessed by the user',
      REQUIRE_ENABLE_FEATURE: <>
        User tokens allow users to authenticate securely without typical user credentials such as those used by LDAP or Crowd. To use this feature, visit the <NxTextLink href="#admin/system/capabilities">
        capabilities page </NxTextLink> and create a “User Token” capability.
      </>,
      RESET_USER_TOKEN: 'Reset user token',
      TEXT: 'Resetting user tokens requires validation of your credentials.',
      AUTHENTICATE: 'Authenticate',
      SAVE_SUCCESS: (user) => `User token of ${user} has been reset`
    }
  }
};