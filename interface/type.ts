export interface Root {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: OldInfo;
  start_at: string;
  media: Medum[];
  checklist: Checklist[];
  seo: any[];
  cta_text: CtaText;
  sections: Section[];
  is_cohort_based_course: boolean;
  secondary_cta_group: any[];
  delivery_method: any;
}

export interface OldInfo {
  program_id: number;
}

export interface Medum {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url: string;
}

export interface Checklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface CtaText {
  name: string;
  value: string;
}

export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: Value[];
}

export interface Value {
  background?: Background;
  cta?: Cta;
  description?: string;
  description_color?: string;
  id?: string;
  thumbnail?: string;
  title?: string;
  title_color?: string;
  top_left_icon_img?: string;
  has_instructor_page?: boolean;
  image?: string;
  name?: string;
  short_description?: string;
  slug?: string;
  icon?: string;
  subtitle?: string;
  color?: string;
  text?: string;
  download_link?: string;
  html?: string;
  profile_image?: string;
  testimonial?: string;
  thumb?: string;
  video_type?: string;
  video_url?: string;
  order_idx?: number;
  url?: string;
  answer?: string;
  question?: string;
}

export interface Background {
  image: string;
  primary_color: string;
  secondary_color: string;
}

export interface Cta {
  clicked_url: string;
  color: string;
  text: string;
}
