import React from 'react';
import { List, Pagination, Avatar, Tag } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import topicsList from '../static/less/topicsList.module.less';
import { homeNav, homeTabs } from '../router'
import 'moment/locale/zh-cn';
import moment from 'moment';
import TopicTag from './TopicTag';

moment.locale('zh-cn');

function TopicsList(props) {
  const { loading, dataSource, nowTab, nowPage } = props;

  return (
    <div className={topicsList['topics-list']}>
      <List
        loading={loading}
        dataSource={dataSource}
        renderItem={item => {
          const { author, author_id, good, id, last_reply_at, reply_count, tab, title, top, visit_count } = item;
          const txt = tab && homeNav[homeTabs.indexOf(tab)].txt;

          return (
            <List.Item className={topicsList['topics-list-topic']}>
              <div
                className={topicsList['avatar-container']}
              >
                <Link
                  to={`/user/${author.loginname}`}
                >
                  <Avatar
                    icon={<UserOutlined />}
                    shape='square'
                    src={author.avatar_url}
                    alt={author.loginname}
                  />
                </Link>
              </div>
              <div
                className={topicsList['reply-visit-container']}
              >
                <span>{reply_count}</span>
                <span>/</span>
                <span>{visit_count}</span>
              </div>
              <div
                className={topicsList['tag-container']}
              >
                <TopicTag
                  top={top}
                  good={good}
                  txt={txt}
                  nowTab={nowTab}
                />
              </div>
              <div
                className={topicsList['title-container']}
              >
                <Link to={`/topic/${id}`}>{title}</Link>
              </div>
              <div
                className={topicsList['time-container']}
              >
                {
                  reply_count > 0
                    ? <Link
                      to={`/user/${author.loginname}#${author_id}`}
                    >
                      <span>最后回复</span>
                      <span>{moment(last_reply_at).fromNow()}</span>
                    </Link>
                    : <>
                      <span>发布于</span>
                      <span>{moment(last_reply_at).fromNow()}</span>
                    </>
                }
              </div>
            </List.Item>
          );
        }}
      />
      <Pagination
        className={topicsList['topics-list-page']}
        defaultCurrent={nowPage}
        hideOnSinglePage={false}
        total={1000}
        showSizeChanger={false}
        itemRender={(page, type, OriginalElement) => {
          return (
            type === 'page'
              ? (page === nowPage
                ? <span style={{
                  color: '#80BD01'
                }}>{page}</span>
                : <Link to={`/?tab=${nowTab}&page=${page}`}>{page}</Link>)
              : <Link
                {...OriginalElement.props}
                to={`/?tab=${nowTab}&page=${page}`}
              />
          );
        }}
      />
    </div>
  );
}

export default TopicsList;