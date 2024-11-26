/*
 * Sonatype Nexus (TM) Open Source Version
 * Copyright (c) 2008-present Sonatype, Inc.
 * All rights reserved. Includes the third-party code listed at http://links.sonatype.com/products/nexus/oss/attributions.
 *
 * This program and the accompanying materials are made available under the terms of the Eclipse Public License Version 1.0,
 * which accompanies this distribution and is available at http://www.eclipse.org/legal/epl-v10.html.
 *
 * Sonatype Nexus (TM) Open Source Version is distributed with Sencha Ext JS pursuant to a FLOSS Exception agreed upon
 * between Sonatype, Inc. and Sencha Inc. Sencha Ext JS is licensed under GPL v3 and cannot be redistributed as part of a
 * closed source work.
 *
 * Sonatype Nexus (TM) Professional Version is available from Sonatype, Inc. "Sonatype" and "Sonatype Nexus" are trademarks
 * of Sonatype, Inc. Apache Maven is a trademark of the Apache Software Foundation. M2eclipse is a trademark of the
 * Eclipse Foundation. All other trademarks are the property of their respective owners.
 */
/*global Ext, NX*/

/**
 * @since 3.17
 */
Ext.define('NX.onboarding.app.PluginStrings', {
  '@aggregate_priority': 90,

  singleton: true,
  requires: [
    'NX.I18n'
  ],

  keys: {
    Onboarding_Text: 'Onboarding',
    Onboarding_Description: 'Configuration changes requiring attention',
    Onboarding_Authenticate: '<b>admin</b>账号默认密码在服务器<br><b>{0}</b>文件中查看',
    Onboarding_LoadStepsError: '无法从服务器检索设置步骤'
  },

  bundles: {
    'NX.onboarding.view.OnboardingStartScreen': {
      Title: '设置',
      Description: '<p>该向导将帮助您完成所需的设置任务。</p>',
    },
    'NX.onboarding.view.OnboardingCompleteScreen': {
      Title: '最后一步！',
      Description: '<p>设置任务已完成，请尽情使用天河云的私有弹性云计算软件平台吧！</p>',
      Finish_Button: '完成'
    },
    'NX.onboarding.view.ChangeAdminPasswordScreen': {
      Title: '为管理员用户重置一个新密码'
    },
    'NX.onboarding.view.ConfigureAnonymousAccessScreen': {
      Title: '配置匿名访问',
      Description: '<p><b>启用匿名访问</b>意味着默认情况下，用户无需凭证即可从存储库搜索、浏览和下载组件。' +
      '请<b>谨慎考虑此操作对您组织的影响</b>' +
      '<br>' +
      '<p><b>禁用匿名访问</b>将要求所有人<b>提供凭证</b> ' +
      '<br><br>' +
      '<a href="https://links.sonatype.com/products/nexus/anonymous-access/docs" target="_blank" rel="noopener">更多信息 <span class="x-fa fa-external-link"></a></p>',
      Enable_Label: '启用匿名访问',
      Disable_Label: '禁用匿名访问'
    },
    'NX.onboarding.view.ConfigureAnalyticsCollectionScreen': {
      Title: '帮助我们改进天河云存储库',
      Description: '<p>请通过与天河国云分享匿名统计指标和性能信息来帮助我们改善' +
          '天河云存储库体验并塑造未来的功能改进。收集的信息不会包含身份信' +
          '息或专有信息（例如主机、服务器、存储库或用户的名称）。</p>',
      Enable_Label: '同意，我愿意分享匿名数据。',
      Disable_Label: '拒绝，我没兴趣。'
    }
  }
}, function(obj) {
  NX.I18n.register(obj);
});
