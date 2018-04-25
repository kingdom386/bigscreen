import request from '@/utils/request';

/**
 * 请求用户token
 */

export function fetchToken () {
  return request({
    url: '/test/getToken',
    method: 'post'
  });
};

/**
 * @param params 请求的参数
 * 获取今日实时达成率
 */

export function fetchAchievementRate (params) {
  return request({
    url: '/realtimedata/getTodayAchievementRate',
    method: 'post',
    params
  });
};

/**
 * @param params 请求的参数
 *  获取今日各组达成情况
 */

export function fetchGroupAchievement (params) {
  return request({
    url: '/realtimedata/getTodayGroupAchievement',
    method: 'post',
    params
  });
};

/**
 * @param params 请求的参数
 * 获取实时冠军
 */

export function fetchRealtimeChampion (params) {
  return request({
    url: '/realtimedata/getRealtimeChampion',
    method: 'post',
    params
  });
};

/**
 * @param params 请求的参数
 * 获取实时排行榜
 */

export function fetchRealtimeChartByDay (data) {
  return request({
    url: '/realtimedata/getRealtimeChartByDay',
    method: 'post',
    data
  });
};

/**
 * @param params 请求的参数
 * 获取当月排名
 */

export function fetchRealtimeChartByMonth (data) {
  return request({
    url: '/realtimedata/getRealtimeChartByMonth',
    method: 'post',
    data
  });
};

/**
 * @param params 请求的参数
 * 获取当月组排名
 */
export function fetchRealtimeMonthlyRankings (data) {
  return request({
    url: '/realtimedata/getRealtimeMonthlyRankings',
    method: 'post',
    data
  });
};
