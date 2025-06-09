export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiResponse<T> {
  data: T;
  meta: { pagination: StrapiPagination };
}

/* ---------- Simple objects ---------- */

export interface Tag {
  id: number;
  text: string;
  color: string | null;
}

export interface ExternalLink {
  id: number;
  name: string;
  url: string;
  icon: Media;
}


export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export type ImageFormats = Partial<Record<"thumbnail" | "small" | "medium" | "large" | string, ImageFormat>>;

export interface Media {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

/* ---------- Dynamic-zone components ---------- */

export interface MetaTextComponent {
  __component: "meta.text";
  id: number;
  content: string;
}

export interface MetaMediaComponent {
  __component: "meta.media";
  id: number;
  image: Media;
}

export interface MetaLinkComponent {
  __component: "meta.media";
  id: number;
  url: string;
  name: string;
  icon: string
}



export type DynamicComponent = MetaTextComponent | MetaMediaComponent | MetaLinkComponent;



export interface Project {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;

  slug: string;

  tags: Tag[];
  thumb: Media;


  sidebar: DynamicComponent[];
  body: DynamicComponent[];

  links: ExternalLink[];
  categories: Category[]
}

export interface Category {
  id: number;
  name: string;
  color?: string;
}

export type ProjectsResponse = StrapiResponse<Project[]>;


export interface Home {
  id: number;
  title: string;
  experiences: Experience[]
}

export interface Experience {
  id: number;
  title: string;
  description: string;
  timeframe: string;
  icon: Media;
  iconBg: string;
  companyName: string;
}

export type HomeResponce = StrapiResponse<Home>;
