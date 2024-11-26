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
 * Application strings
 *
 * @since 3.0
 */
Ext.define('NX.app.PluginStrings', {
  '@aggregate_priority': 90,

  singleton: true,

  requires: [
    'NX.I18n'
  ],

  //
  // Note: Symbols follow the following naming convention:
  // <Class>_<Name>_<Component or Attribute>
  //

  keys: {
    // Buttons
    Button_Back: '返回',
    Button_Cancel: '取消',
    Button_Close: '关闭',
    Button_Create: '创建',
    Button_Discard: '丢弃',
    Button_Next: '下一步',
    Button_Save: '保存',

    Column_No_Data: '无数据',

    // Header
    Header_Panel_Logo_Text: '私有弹性云计算软件平台',
    Header_BrowseMode_Title: '浏览',
    Header_BrowseMode_Tooltip: '浏览可用服务',
    Header_AdminMode_Title: '管理',
    Header_AdminMode_Tooltip: '服务管理和配置',
    Header_Health_Tooltip: '系统状态',
    Header_QuickSearch_Empty: '搜索组件',
    Header_QuickSearch_Tooltip: '根据关键词快速搜索',
    Header_Refresh_Tooltip: '刷新当前界面和数据',
    Refresh_Message: '已刷新',
    Header_UserMode_Title: '用户',
    User_Tooltip: '您好{0}，在此管理你的账户',
    Header_SignIn_Text: '登录',
    Header_SignIn_Tooltip: '登录',
    Header_SignOut_Text: '退出',
    Header_SignOut_Tooltip: '退出',
    Header_Help_Tooltip: '帮助',
    Help_Feature_Text: '帮助：',
    Header_Help_Feature_Tooltip: '当前选定功能的帮助和文档',
    Header_Help_About_Text: '关于',
    Header_Help_About_Tooltip: '关于私有弹性云计算软件平台',
    Header_Help_Documentation_Text: '文档',
    Header_Help_Documentation_Tooltip: '产品文档',
    Header_Help_KB_Text: '知识库',
    Header_Help_KB_Tooltip: '知识库',
    Header_Help_Guides_Text: '私有弹性云计算软件平台指南',
    Header_Help_Guides_Tooltip: '私有弹性云计算软件平台指南',
    Header_Help_Community_Text: '社区',
    Header_Help_Community_Tooltip: '社区信息',
    Header_Help_Issues_Text: '问题反馈',
    Header_Help_Issues_Tooltip: '问题或建议反馈',
    Header_Help_Support_Text: '支持',
    Header_Help_Support_Tooltip: '产品支持',

    // Footer
    Footer_Panel_HTML: 'Copyright &copy; 2015-present, 湖南天河国云科技有限公司版权所有',

    // Sign in
    SignIn_Title: '登录',
    User_SignIn_Mask: '正在登录&hellip;',
    SignIn_Username_Empty: '用户名',
    SignIn_Password_Empty: '密码',
    SignIn_Submit_Button: '登录',
    SignIn_Cancel_Button: '@Button_Cancel',

    // Filter box
    Grid_Plugin_FilterBox_Empty: '筛选',

    // Dialogs
    Dialogs_Info_Title: '信息',
    Dialogs_Error_Title: '错误',
    Dialogs_Error_Message: '操作失败',
    Add_Submit_Button: '@Button_Create',
    Add_Cancel_Button: '@Button_Cancel',
    ChangeOrderWindow_Submit_Button: '@Button_Save',
    ChangeOrderWindow_Cancel_Button: '@Button_Cancel',

    // Server
    User_ConnectFailure_Message: '操作失败，无法连接服务器',
    State_Reconnected_Message: '服务器重新连接',
    State_Disconnected_Message: '服务器断开连接',
    UiSessionTimeout_Expire_Message: '会话即将到期',
    UiSessionTimeout_Expired_Message: '如果未有新的操作，会话将在{0}分钟后到期',
    User_SignedIn_Message: '用户已登录: {0}',
    User_SignedOut_Message: '用户已退出',
    User_Credentials_Message: '用户名或密码不正确，或者没有使用该应用的权限。',
    Util_DownloadHelper_Download_Message: '已开始下载',
    Windows_Popup_Message: '弹窗已被阻止！',

    // License
    State_Installed_Message: '许可证已安装',
    State_Uninstalled_Message: '许可证已卸载',
    State_License_Expiry: '您的许可证将在{0}天后到期。 <a href="http://links.sonatype.com/products/nexus/pro/store">联系我们进行续订。</a>',
    State_License_Expired: '您的许可证已过期。<a href="http://links.sonatype.com/products/nexus/pro/store">联系我们进行续订。</a>',
    State_License_Invalid_Message: '您的许可证已被检测为缺失或无效。请上传有效许可证以继续。',

    // About modal
    AboutWindow_Title: '关于私有弹性云计算软件平台',
    AboutWindow_About_Title: '版权',
    AboutWindow_License_Tab: '许可证',

    // Authentication modal
    Authenticate_Title: '认证',
    Authenticate_Help_Text: '您请求的操作需要验证您的凭证。',
    User_Controller_Authenticate_Mask: '认证&hellip;',
    User_View_Authenticate_Submit_Button: '认证',
    User_Retrieving_Mask: '搜索认证Token&hellip;',
    Authenticate_Cancel_Button: '@Button_Cancel',

    // Expiry modal
    ExpireSession_Title: '会话',
    ExpireSession_Help_Text: '会话即将到期',
    UiSessionTimeout_Expire_Text: '会话将在{0}秒后过期',
    SignedOut_Text: '您的会话已过期。请重新登录。',
    ExpireSession_Cancel_Button: '@Button_Cancel',
    ExpireSession_SignIn_Button: '登录',

    // Unsaved changes modal
    UnsavedChanges_Title: '未保存的更改',
    UnsavedChanges_Help_HTML: '<p>您想放弃您的更改吗？</p>',
    UnsavedChanges_Discard_Button: '放弃更改',
    UnsavedChanges_Back_Button: '回退',
    Menu_Browser_Title: '您将丢失未保存的更改',

    // Unsupported browser
    UnsupportedBrowser_Title: '您使用的浏览器不受支持',
    UnsupportedBrowser_Alternatives_Text: '以下是此 Web 应用支持的替代方案列表',
    UnsupportedBrowser_Continue_Button: '忽略并继续',

    // 404
    Feature_NotFoundPath_Text: '未找到路径"{0}"',
    Feature_NotFound_Text: '未找到路径',

    // Buttons
    SettingsForm_Save_Button: '@Button_Save',
    SettingsForm_Discard_Button: '@Button_Discard',
    Ldap_LdapServerConnectionAdd_Text: '@Button_Next',

    // Item selector
    Form_Field_ItemSelector_Empty: '筛选',

    // Settings form
    SettingsForm_Load_Message: '加载中',
    SettingsForm_Submit_Message: '保存中',

    // Browse -> Welcome
    Dashboard_Title: '欢迎',

    // Field validation messages
    Util_Validator_Text: '只允许使用字母、数字、下划线(_)、连字符(-)和点(.)，并且不能以下划线或点开头。',
    Util_Validator_Hostname: '主机名必须有效',
    Util_Validator_Trim: '此字段不能以空格开头或结尾',
    Util_Validator_Url: '此字段应为格式为"http://www.example.com"',
    Util_Validator_Subdomain_Text: '子域名字段必须至少包含 1 个字符，最多包含 63 个字符（字母、数字和破折号），并且必须以字母开头，以字母或数字结尾',

    // Wizard
    Wizard_Next: '@Button_Next',
    Wizard_Back: '@Button_Back',
    Wizard_Cancel: '@Button_Cancel',
    Wizard_Screen_Progress: '第{0}步，总共{1}步',

    // SearchBoxTip
    SearchBoxTip_ExactMatch: '使用 <b>""</b> 进行精准匹配 - "example"',
    SearchBoxTip_Wildcard: '使用 <b>*</b> 或 <b>?</b> 作为通配符 - ex?mpl*',
    SearchBoxTip_LearnMore: '了解更多...',

    // DependencySnippet Panel
    DependencySnippetPanel_Title: '用法',
    DependencySnippetPanel_Copy_Button_Tooltip: '将代码片段复制到剪贴板'

  }
}, function(obj) {
  NX.I18n.register(obj);
});

