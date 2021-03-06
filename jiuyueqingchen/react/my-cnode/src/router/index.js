import React from 'react';
import {
  AboutPage,
  GetStartPage,
  HomePage,
  Page404,
  TopicPage,
  UserPage,
  UserCollectTopicsPage,
  ApiPage
} from '../view';

const route = [{
  id: 0,
  path: '/',
  exact: true,
  render(props) {
    return (<HomePage {...props} />);
  }
}, {
  id: 1,
  path: '/getstart',
  exact: true,
  render(props) {
    return <GetStartPage {...props} />
  }
}, {
  id: 2,
  path: '/api',
  exact: true,
  render(props) {
    return <ApiPage {...props} />
  }
}, {
  id: 3,
  path: '/about',
  exact: true,
  render(props) {
    return <AboutPage {...props} />
  }
}, {
  id: 4,
  path: '/topic/:id',
  exact: true,
  render(props) {
    return <TopicPage {...props} />
  }
}, {
  id: 5,
  path: '/user/:loginName',
  exact: true,
  render(props) {
    return <UserPage {...props} />
  }
}, {
  id: 6,
  path: '/user/:loginName/collect',
  exact: true,
  render(props) {
    return <UserCollectTopicsPage {...props} />
  }
}, {
  id: 7,
  path: '',
  exact: false,
  render(props) {
    return <Page404 {...props} />
  }
},];

const nav = [{
  to: '/',
  txt: '首页'
}, {
  to: '/getstart',
  txt: '新手入门'
}, {
  to: '/api',
  txt: 'API'
}, {
  to: '/about',
  txt: '关于'
}, {
  to: '/',
  txt: '注册'
}, {
  to: '/',
  txt: '登录'
},];

const homeTabs = ['all', 'good', 'share', 'ask', 'job', 'dev'];

const homeNav = [{
  to: '/?tab=all',
  txt: '全部'
}, {
  to: '/?tab=good',
  txt: '精华'
}, {
  to: '/?tab=share',
  txt: '分享'
}, {
  to: '/?tab=ask',
  txt: '问答'
}, {
  to: '/?tab=job',
  txt: '招聘'
}, {
  to: '/?tab=dev',
  txt: '客户端测试'
},];

export {
  route,
  nav,
  homeNav,
  homeTabs,
};