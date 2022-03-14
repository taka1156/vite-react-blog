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

type Article = ArticleDate & {
  id: string;
  title: string;
  summary: string;
  body: string;
  tags: ArticleTag[];
  category: ArticleCategory;
  related_blogs?: Article[];
};


type MicroCMSResult = {
  contents: Article[];
  totalCount: number;
  offset: number;
  limit: number;
}
