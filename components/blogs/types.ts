export interface BlogHighlight {
  text: string;
  color: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  author: string;
  part: string;
  subtitle: string;
  content: string;
  publishedAt?: string;
  readingTime?: string;
  highlights?: BlogHighlight[];
}
