export type Category = {
  name: string;
  href: string;
};

export type Author = {
  name: string;
  href: string;
  imageUrl: string;
};

export interface ITeamSelectorProps {
  title: string;
  category: Category;
  description: string;
  date: string;
  href: string;
  datetime: string;
  imageUrl: string;
  readingTime: string;
  author: Author;
}
