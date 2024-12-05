export interface CourseData {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: OldInfo;
  start_at: string;
  media: Media[];
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

export interface Media {
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

export interface VariantData {
  items: Item[];
  product: Product;
  is_enrolled: boolean;
}

export interface Item {
  id: string;
  name: string;
  price: number;
  discount_type: string;
  discount_value: number;
  order_idx: number;
  max_user_purchase_limit: number;
  max_order_quantity: number;
  plan: Plan;
  discount_amount: number;
  final_price: number;
  is_enrolled: boolean;
  identification_id: string;
  identification_type: string;
  total_enrolment: number;
  is_enable_inventory: boolean;
  available_stock: number;
  meta: Meta[];
}

export interface Plan {
  avail_grace_period: number;
  content_access_type: string;
  content_access_value: number;
  content_available_end_at: string;
  content_available_start_at: string;
  grace_period: number;
  id: number;
  name: string;
  payment_end_at: string;
  payment_start_at: string;
  secondary_name: string;
  status: string;
  upgrade_warning_days: any;
}

export interface Meta {
  key: string;
  values: MetaValue[];
}

export interface MetaValue {
  icon?: string;
  id: string;
  is_product_checklist?: boolean;
  meta_key?: string;
  meta_value?: string;
  background_color?: string;
  background_img?: string;
  checklist_text_color?: string;
  end_at?: string;
  start_at?: string;
  template?: string;
  text?: string;
}

export interface Product {
  old_crm_id: number;
  slug: string;
  id: string;
  title: string;
  is_cohort_based_course: boolean;
}
