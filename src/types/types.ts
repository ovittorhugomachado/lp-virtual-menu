export type MenuItem = {
  name: string;
  link: string;
  featured: boolean;
};

export type Menu = {
  items: MenuItem[];
};

export type Button = {
  name: string;
  link: string;
};

export type InfoSection = {
  title: string;
  subTitle?: string;
  text: string[];
  image?: string;
  button?: Button;
};


export type ItemGrid = {
  image: string;
  title: string;
}

export type Grid = {
  items: ItemGrid[];
}

export type SiteData = {
  pageName: string;
  slogan: string;
  logo: string;
  menu: Menu;
  info: InfoSection[];
  grid?: ItemGrid[];
};