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
 * 请求列表数据
 */

export function fetchAchievementRate (params) {
  return request({
    url: '/realtimedata/getTodayAchievementRate',
    method: 'post',
    params
  });
};
