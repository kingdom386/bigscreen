import request from '@/utils/request';

/**
 * @param params 请求的参数
 * 请求列表数据
 */

export function fetchList (params) {
  return request({
    url: '/active/rule/list',
    method: 'post',
    params
  });
}
