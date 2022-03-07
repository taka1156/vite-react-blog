import { createClient, GetRequest, MicroCMSClient } from 'microcms-js-sdk';

const MICROCMS_STATIC_PARAMS: MicroCMSClient = {
  serviceDomain: import.meta.env.VITE_MICROCMS_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_TOKEN,
};

const POSTS_PER_PAGE = 10;

const microcms = createClient(MICROCMS_STATIC_PARAMS);

export const articleList = async (currentPage: number, api = microcms) => {
  let result;

  const articleListRequest: GetRequest = {
    endpoint: 'blog',
    queries: {
      fields: 'id,title,summary,tags,category,createdAt,updatedAt',
      limit: POSTS_PER_PAGE,
      offset: (currentPage - 1 || 0) * POSTS_PER_PAGE,
    },
  };

  await api
    .getList<MicroCMSResult>(articleListRequest)
    .then((res) => (result = res))
    .catch((e) => e);

  return result;
};

export const article = async (pageId: string, api = microcms) => {
  let result;

  const articleRequest: GetRequest = {
    endpoint: `blog/${pageId}`,
    queries: {
      fields: 'id,title,summary,tags,category,createdAt,updatedAt',
    },
  };

  await api
    .getList<MicroCMSResult>(articleRequest)
    .then((res) => (result = res))
    .catch((e) => e);

  return result;
};

const tags = () => {};

const categories = () => {};
