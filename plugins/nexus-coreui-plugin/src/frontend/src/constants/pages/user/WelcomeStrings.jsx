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

export default {
  WELCOME: {
    MENU: {
      text: '欢迎'
    },
    ACTIONS: {
      SYSTEM_HEALTH: {
        title: '系统健康',
        subTitle: '查看系统状态',
      },
      CLEANUP_POLICIES: {
        title: '清理策略',
        subTitle: '管理清理策略',
      },
      BROWSE: {
        title: '浏览',
        subTitle: '浏览存储库',
      },
      SEARCH: {
        title: '搜索',
        subTitle: '搜索存储库',
      },
      RELEASE_NOTES: {
        title: '发布说明',
        subTitle: '查看最新版本',
      },
      DOCUMENTATION: {
        title: '文档',
        subTitle: '查看文档',
      },
      COMMUNITY: {
        title: '社区',
        subTitle: '社区反馈',
      },
      CONNECT: {
        title: '连接',
        subTitle: '连接到存储库',
      },
    },
    CONNECT_MODAL: {
      TITLE: '获取存储库 URL',
      FIRST_STEP_TEXT: <>在<em>存储库</em>表中，<em>复制</em>您想要连接的存储库的URL。</>,
      SECOND_STEP_TEXT: '带有存储库URL的模式；复制此URL以供需要时使用。该模式还包含指向我们帮助文档的链接，以获取有关如何连接到存储库的更多信息。'
    },
    USAGE: {
      MENU: {
        TEXT: '用法'
      },
      TOTAL_COMPONENTS: {
        TITLE: '所有组件'
      },
      UNIQUE_LOGINS: {
        TITLE: 'Unique logins',
        SUB_TITLE: 'Past 30 days'
      },
      PEAK_REQUESTS_PER_MINUTE: {
        TITLE: '每分钟峰值请求数',
        SUB_TITLE: 'Past 24 hours'
      },
      PEAK_REQUESTS_PER_DAY: {
        TITLE: '每日峰值请求数',
        SUB_TITLE: 'Past 30 days'
      },
      CIRCUIT_B: {
        TOTAL_COMPONENTS: {
          TITLE: '所有组件',
          SUB_TITLE: '当前',
          HIGHEST_RECORDED_COUNT: 'Highest Recorded Count (30 days)',
          METRIC_NAME: 'component_total_count',
          METRIC_NAME_PRO_POSTGRESQL: 'component_total_count',
          AGGREGATE_PERIOD_30_D: 'peak_recorded_count_30d',
          TOOLTIP: (edition) => {
            if (edition === 'Starter_Edition') {
              return NX.I18n.get('Total_Components_Tooltip');
            } else if (edition === 'PRO') {
              return 'Sonatype Nexus Repository Pro using an embedded database performs best when your total component counts remain under the threshold. If you are exceeding the threshold, we strongly recommend migrating to a PostgreSQL database.'
            } else {
              return 'Sonatype Nexus Repository OSS performs best when your total component counts remain under {} components across all repositories in your instance.'
            }
          }
        },
        UNIQUE_LOGINS: {
          TITLE: 'Unique Logins',
          SUB_TITLE: 'Last 24 hours',
          HIGHEST_RECORDED_COUNT: 'Last 30 days',
          METRIC_NAME: 'successful_last_24h',
          AGGREGATE_PERIOD_30_D: 'peak_recorded_count_30d',
          TOOLTIP: 'Measures unique users who login over a period of time.',
          TOOLTIP_STARTER: 'Unique successful logins to this Sonatype Nexus Repository instance in the last 30 days.'
        },
        REQUESTS_PER_MINUTE: {
          TITLE: 'Requests Per Minute',
          TITLE_PRO_POSTGRESQL: 'Peak Requests Per Minute',
          SUB_TITLE: 'Peak minute in last 24 hours',
          SUB_TITLE_PRO_POSTGRESQL: 'Past 24 hours',
          HIGHEST_RECORDED_COUNT: 'Peak minute in last 30 days',
          METRIC_NAME: 'requests_per_minute',
          METRIC_NAME_PRO_POSTGRESQL: 'requests_per_minute',
          AGGREGATE_PERIOD_24_H: 'last_24h',
          AGGREGATE_PERIOD_30_D: 'last_30d',
          TOOLTIP_PRO: 'Measures requests per minute to repository endpoints for all repositories in your Sonatype Nexus Repository Pro instance.'
        },
        REQUESTS_PER_DAY: {
          TITLE: 'Requests Per Day',
          TITLE_PRO_POSTGRESQL: 'Peak Requests Per Day',
          SUB_TITLE: 'Last 24 hours',
          SUB_TITLE_PRO_POSTGRESQL: 'Past 30 days',
          HIGHEST_RECORDED_COUNT: 'Highest Recorded Count (30 days)',
          METRIC_NAME: 'peak_requests_per_day',
          METRIC_NAME_PRO_POSTGRESQL: 'peak_requests_per_day_30d',
          AGGREGATE_PERIOD_30_D: 'peak_recorded_count_30d',
          TOOLTIP: (edition) => {
            if (edition === 'Starter_Edition') {
              return NX.I18n.get('Requests_Per_Day_Tooltip')
            } else if (edition === 'PRO') {
              return 'Sonatype Nexus Repository Pro using an embedded database performs best when your requests per day remain under the threshold. If you are exceeding the threshold, we strongly recommend migrating to a PostgreSQL database.'
            } else {
              return `Sonatype Nexus Repository OSS performs best when requests per day remain under {} requests per day to all repository endpoints across all repositories in your instance.`
            }
          }
        },
        CARD_SHARED_LABELS: {
          THRESHOLD: 'Threshold',
          THRESHOLD_NAME: 'thresholdName',
          THRESHOLD_VALUE: 'thresholdValue',
          PERIOD: 'period',
          VALUE: 'value',
        },
        PERCENTAGE: 0.75,
        SOFT_THRESHOLD: 'SOFT_THRESHOLD',
        STARTER_THRESHOLD: 'STARTER_THRESHOLD',
        PRO: 'PRO',
        OSS: 'OSS',
        STARTER: 'Starter_Edition',
      },
      CARD_LINK_OSS: {
        TEXT: 'Understand your usage',
        URL: 'https://links.sonatype.com/products/nxrm3/docs/optimize-performance-free'
      },
      CARD_LINK_PRO: {
        TEXT: 'Understand your usage',
        URL: 'https://links.sonatype.com/products/nxrm3/docs/optimize-performance-pro'
      },
      CARD_LINK_STARTER: {
        TEXT: 'Understand your usage',
        URL: 'https://links.sonatype.com/products/nxrm3/docs/review-usage'
      },
      ALERTS: {
        EXCEEDING_THRESHOLDS: {
          REQUESTS_PER_DAY: {
            PREFIX: 'Exceeding_Threshold_Requests_Per_Day_Prefix',
            MID: 'Exceeding_Threshold_Requests_Per_Day_Mid'
          },
          TOTAL_COMPONENTS: {
            PREFIX: 'Exceeding_Threshold_Total_Components_Prefix',
            MID: 'Exceeding_Threshold_Total_Components_Mid'
          }
        },
        APPROACHING_THRESHOLDS: {
          REQUESTS_PER_DAY: {
            PREFIX: 'Approaching_Threshold_Requests_Per_Day_Prefix',
            MID: 'Approaching_Threshold_Requests_Per_Day_Mid'
          },
          TOTAL_COMPONENTS: {
            PREFIX: 'Approaching_Threshold_Total_Components_Prefix',
            MID: 'Approaching_Threshold_Total_Components_Mid'
          }
        },
        SUFFIX: 'Suffix',
        LEARN_ABOUT_PRO: {
          TEXT: 'Learn about Pro',
          URL: 'https://links.sonatype.com/products/nxrm3/docs/learn-about-pro'
        },
        REVIEW_YOUR_USAGE: {
          TEXT: 'Review your usage',
          URL: 'https://links.sonatype.com/products/nxrm3/docs/review-usage'
        },
        UPGRADING_PRO: {
          TEXT: 'upgrading to Pro',
          URL: 'https://links.sonatype.com/products/nxrm3/docs/upgrade-to-pro'
        }
      }
    }
  }
};
