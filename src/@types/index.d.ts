type ArticleDate = {
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  revisedAt?: string;
};

type ArticleImg = {
  url: string;
  height?: number;
  width?: number;
};

type ArticleTag = ArticleDate & {
  id: string;
  name: string;
  img: ArticleImg;
};

type ArticleCategory = ArticleDate & {
  id: string;
  name: string;
  img: ArticleImg;
};

type ArticleInfo = ArticleDate & {
  id: string;
  title: string;
  summary: string;
  body: string;
  tags: ArticleTag[];
  category: ArticleCategory;
  related_blogs?: ArticleInfo[];
};

type MicroCMSArticleResult = {
  contents: ArticleInfo[];
  totalCount: string;
  offset: number;
  limit: number;
};

type MicroCMSTagsResult = {
  contents: ArticleTag[];
  totalCount: number;
  offset: number;
  limit: number;
};

type MicroCMSCategoryResult = {
  contents: ArticleCategory[];
  totalCount: number;
  offset: number;
  limit: number;
};

type DefaultMeta = {
  charset: 'utf-8';
  // OGP
  'og:site_name': {
    property: 'og:site_name';
    content: string;
  };
  'og:type': { property: 'og:type'; content: 'website' | 'article' };
  'og:url': {
    property: 'og:url';
    content: string;
  };
  'og:title': { property: 'og:title'; content: string };
  'og:description': {
    property: 'og:description';
    content: string;
  };
  'og:image': {
    property: 'og:image';
    content: string;
  };
  // web閲覧時の説明文
  description: {
    name: 'description';
    content: string;
  };
  // Twitter Card
  'twitter:card': { name: 'twitter:card'; content: 'summary' };
  'twitter:site': { name: 'twitter:site'; content: string };
};

type PageInfo = {
  current: number;
  maxPage: number;
  pageKind: '' | '/category' | '/tag';
};
