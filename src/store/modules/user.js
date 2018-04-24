import Cookies from 'js-cookie';

const app = {
  state: {
    userToken: Cookies.get('Token')
  },
  mutations: {
    // 设置cookie
    SET_USER_TOKEN: (state, userToken) => {
      if (!Cookies.get('Token')) {
        Cookies.set('Token', userToken);
      }
    },
    // 删除cookie
    REMOVE_USER_TOKEN: (state, userToken) => {
      Cookies.remove('Token');
    }
  }
};

export default app;
