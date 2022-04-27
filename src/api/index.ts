import axios from 'axios';

const MICROCMS_STATIC_PARAMS = {
  baseURL: 'https://taka_blog.microcms.io/api/v1',
  headers: { 'X-API-KEY': import.meta.env.VITE_MICROCMS_TOKEN },
};

const POSTS_PER_PAGE = 5;

const microcms = axios.create(MICROCMS_STATIC_PARAMS);

export const getArticles = async (currentPage: number, filters = '', api = microcms ) => {
  let result: MicroCMSArticleResult | null = null;

  const queries = {
    fields: 'id,title,summary,tags,category,createdAt,updatedAt',
    limit: POSTS_PER_PAGE,
    offset: (currentPage || 0) * POSTS_PER_PAGE,
    filters: filters
  };

  result = await api
    .get<MicroCMSArticleResult>('/blog', { params: queries })
    .then(({ data }) => data)
    .catch((e) => null);

  return result;
};

export const getArticle = async (articleId: string, api = microcms) => {
  let result: ArticleInfo | null = null;

  const queries = {
    fields: 'id,title,summary,tags,category,createdAt,updatedAt,body',
  };

  result = await api
    .get<ArticleInfo>(`/blog/${articleId}`, { params: queries })
    .then(({ data }) => data)
    .catch((e) => null);

  return result;
};

export const getTags = async (api = microcms) => {
  let result: MicroCMSTagsResult | null = null;

  const queries = {
    fields: 'id,name,img',
  };

  result = await api
    .get<MicroCMSTagsResult>('/tag', { params: queries })
    .then(({ data }) => data)
    .catch((e) => null);

  return result;
};

export const getTag = async (tagId: string, api = microcms) => {
  let result: ArticleTag | null = null;

  const queries = {
    fields: 'id,title,summary,tags,category,createdAt,updatedAt',
  };

  await api
    .get<ArticleTag>(`/tag/${tagId}`, { params: queries })
    .then(({ data }) => data)
    .catch((e) => e);

  return result;
};

export const getCategories = async (api = microcms) => {
  let result: MicroCMSCategoryResult | null = null;

  const queries = {
    fields: 'id,name,img',
  };

  result = await api
    .get<MicroCMSCategoryResult>('category', { params: queries })
    .then(({ data }) => data)
    .catch((e) => e);

  return result;
};

export const getCategory = async (categoryId: string, api = microcms) => {
  let result: ArticleCategory | null = null;

  const queries = {
    fields: 'id,title,summary,tags,category,createdAt,updatedAt',
  };

  result = await api
    .get<ArticleCategory>(`category/${categoryId}`, { params: queries })
    .then(({ data }) => data)
    .catch((e) => null);

  return result;
};
