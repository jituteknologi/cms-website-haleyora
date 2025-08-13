import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedWhatsapp extends Schema.Component {
  collectionName: 'components_shared_whatsapps';
  info: {
    displayName: 'whatsapp';
    icon: 'message';
    description: '';
  };
  attributes: {
    phone_number: Attribute.String & Attribute.Required;
    initial_message: Attribute.Text & Attribute.Required;
    display_message: Attribute.Text & Attribute.Required;
    sender_name: Attribute.String & Attribute.Required;
    icon_image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface SharedSocmedLink extends Schema.Component {
  collectionName: 'components_shared_socmed_links';
  info: {
    displayName: 'socmed link';
    icon: 'link';
  };
  attributes: {
    icon: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::react-icons.icon'>;
    link: Attribute.String & Attribute.Required;
  };
}

export interface SharedSocialMedia extends Schema.Component {
  collectionName: 'components_shared_social_medias';
  info: {
    displayName: 'social media';
    icon: 'link';
  };
  attributes: {
    caption: Attribute.Text & Attribute.Required;
    socmed_link: Attribute.Component<'shared.socmed-link', true>;
  };
}

export interface SharedDynamicEndpoint extends Schema.Component {
  collectionName: 'components_shared_dynamic_endpoints';
  info: {
    displayName: 'dynamic endpoint';
    icon: 'code';
  };
  attributes: {
    endpoint: Attribute.String & Attribute.Required;
    params: Attribute.Component<'repeatable.params', true>;
  };
}

export interface SharedCtaButton extends Schema.Component {
  collectionName: 'components_shared_cta_buttons';
  info: {
    displayName: 'CTA button';
    icon: 'stack';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String;
    variant: Attribute.Enumeration<['default', 'outlined', 'text']> &
      Attribute.DefaultTo<'default'>;
    icon: Attribute.String & Attribute.CustomField<'plugin::react-icons.icon'>;
  };
}

export interface ServiceOurPartner extends Schema.Component {
  collectionName: 'components_service_our_partners';
  info: {
    displayName: 'our partner';
    icon: 'handHeart';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    endpoint: Attribute.String & Attribute.Required;
    params: Attribute.Component<'repeatable.params', true>;
  };
}

export interface ServiceOtherService extends Schema.Component {
  collectionName: 'components_service_other_services';
  info: {
    displayName: 'other service';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    endpoint: Attribute.String & Attribute.Required;
    params: Attribute.Component<'repeatable.params', true>;
  };
}

export interface ServiceMainService extends Schema.Component {
  collectionName: 'components_service_main_services';
  info: {
    displayName: 'main service';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    endpoint: Attribute.String & Attribute.Required;
    params: Attribute.Component<'repeatable.params', true>;
  };
}

export interface ServiceDetailPromo extends Schema.Component {
  collectionName: 'components_service_detail_promos';
  info: {
    displayName: 'promo';
    icon: 'priceTag';
    description: '';
  };
  attributes: {
    item: Attribute.Component<'service-detail.promo-item', true>;
  };
}

export interface ServiceDetailPromoItem extends Schema.Component {
  collectionName: 'components_service_detail_promo_items';
  info: {
    displayName: 'promo item';
    icon: 'priceTag';
    description: '';
  };
  attributes: {
    banner: Attribute.Media<'images'> & Attribute.Required;
    term_condition: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ServiceDetailProducts extends Schema.Component {
  collectionName: 'components_service_detail_products';
  info: {
    displayName: 'products';
    icon: 'store';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface ServiceDetailProcedure extends Schema.Component {
  collectionName: 'components_service_detail_procedures';
  info: {
    displayName: 'procedure';
    icon: 'manyWays';
  };
  attributes: {
    procedure_item: Attribute.Component<'service-detail.procedure-item', true>;
  };
}

export interface ServiceDetailProcedureItem extends Schema.Component {
  collectionName: 'components_service_detail_procedure_items';
  info: {
    displayName: 'procedure item';
    icon: 'bulletList';
  };
  attributes: {
    icon: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::react-icons.icon'>;
    label: Attribute.String & Attribute.Required;
    description: Attribute.Text;
  };
}

export interface ServiceDetailIncentive extends Schema.Component {
  collectionName: 'components_service_detail_incentives';
  info: {
    displayName: 'incentive';
    icon: 'layout';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    incentive_list: Attribute.Component<'service-detail.incentive-list', true> &
      Attribute.Required;
    link: Attribute.Component<'shared.cta-button'>;
  };
}

export interface ServiceDetailIncentiveList extends Schema.Component {
  collectionName: 'components_service_detail_incentive_lists';
  info: {
    displayName: 'incentive list';
    icon: 'bulletList';
  };
  attributes: {
    item: Attribute.String & Attribute.Required;
  };
}

export interface ServiceDetailFaq extends Schema.Component {
  collectionName: 'components_service_detail_faqs';
  info: {
    displayName: 'faq';
    icon: 'question';
  };
  attributes: {
    item: Attribute.Component<'service-detail.faq-item', true>;
  };
}

export interface ServiceDetailFaqItem extends Schema.Component {
  collectionName: 'components_service_detail_faq_items';
  info: {
    displayName: 'faq item';
    icon: 'question';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    answer: Attribute.Text;
  };
}

export interface RepeatableTitleDesc extends Schema.Component {
  collectionName: 'components_repeatable_title_descs';
  info: {
    displayName: 'title desc';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
  };
}

export interface RepeatableSeoProperties extends Schema.Component {
  collectionName: 'components_repeatable_seo_properties';
  info: {
    displayName: 'SEOProperties';
    icon: 'layout';
  };
  attributes: {
    name: Attribute.String;
    content: Attribute.Text;
  };
}

export interface RepeatableParams extends Schema.Component {
  collectionName: 'components_repeatable_params';
  info: {
    displayName: 'params';
    icon: 'layer';
  };
  attributes: {
    key: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
  };
}

export interface ProfileVision extends Schema.Component {
  collectionName: 'components_profile_visions';
  info: {
    displayName: 'vision';
    icon: 'book';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface ProfileValue extends Schema.Component {
  collectionName: 'components_profile_values';
  info: {
    displayName: 'value';
    icon: 'book';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface ProfileStructure extends Schema.Component {
  collectionName: 'components_profile_structures';
  info: {
    displayName: 'structure';
    icon: 'book';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ProfileShortcut extends Schema.Component {
  collectionName: 'components_profile_shortcuts';
  info: {
    displayName: 'shortcut';
    icon: 'link';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    short_description: Attribute.Text;
    thumbnail: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ProfileMission extends Schema.Component {
  collectionName: 'components_profile_missions';
  info: {
    displayName: 'mission';
    icon: 'book';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    item: Attribute.Component<'repeatable.title-desc', true>;
  };
}

export interface ProfileHistory extends Schema.Component {
  collectionName: 'components_profile_histories';
  info: {
    displayName: 'history';
    icon: 'book';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    item: Attribute.Component<'profile.history-item', true> &
      Attribute.Required;
  };
}

export interface ProfileHistoryItem extends Schema.Component {
  collectionName: 'components_profile_history_items';
  info: {
    displayName: 'history item';
    icon: 'book';
  };
  attributes: {
    year: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
  };
}

export interface ProfileCompanyValue extends Schema.Component {
  collectionName: 'components_profile_company_values';
  info: {
    displayName: 'company value';
    icon: 'crown';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface OrganizationDirector extends Schema.Component {
  collectionName: 'components_organization_directors';
  info: {
    displayName: 'director';
    icon: 'shield';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    endpoint: Attribute.String & Attribute.Required;
    params: Attribute.Component<'repeatable.params', true>;
  };
}

export interface OrganizationCommissioner extends Schema.Component {
  collectionName: 'components_organization_commissioners';
  info: {
    displayName: 'commissioner';
    icon: 'shield';
    description: '';
  };
  attributes: {
    endpoint: Attribute.String & Attribute.Required;
    params: Attribute.Component<'repeatable.params', true>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface MenuSubMenu extends Schema.Component {
  collectionName: 'components_menu_sub_menus';
  info: {
    displayName: 'sub menu';
    icon: 'filter';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String;
    target: Attribute.Enumeration<['_blank', '_parent', '_self', '_top']>;
    subtitle: Attribute.String;
    icon: Attribute.String & Attribute.CustomField<'plugin::react-icons.icon'>;
  };
}

export interface MenuMenu extends Schema.Component {
  collectionName: 'components_menu_menus';
  info: {
    displayName: 'menu';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String;
    target: Attribute.Enumeration<['_blank', '_parent', '_top', '_self']>;
    sub_menu: Attribute.Component<'menu.sub-menu', true>;
  };
}

export interface ProcurementDocument extends Schema.Component {
  collectionName: 'components_procurement_documents';
  info: {
    displayName: 'document';
    icon: 'book';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text;
    file: Attribute.Media<'files'> & Attribute.Required;
  };
}

export interface ProcurementClassification extends Schema.Component {
  collectionName: 'components_proc_classes';
  info: {
    displayName: 'classification';
    icon: 'bulletList';
  };
  attributes: {
    proc_classification: Attribute.Relation<
      'procurement.classification',
      'oneToOne',
      'api::proc-classification.proc-classification'
    >;
    proc_sub_classification: Attribute.Relation<
      'procurement.classification',
      'oneToOne',
      'api::proc-sub-classification.proc-sub-classification'
    >;
  };
}

export interface ProcurementAnnouncementPeriod extends Schema.Component {
  collectionName: 'components_procurement_announcement_periods';
  info: {
    displayName: 'announcement Period';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    start_date: Attribute.Date & Attribute.Required;
    end_date: Attribute.Date & Attribute.Required;
    name: Attribute.String & Attribute.Required;
  };
}

export interface ProcurementAnnouncementDoc extends Schema.Component {
  collectionName: 'components_procurement_announcement_docs';
  info: {
    displayName: 'announcement doc';
    icon: 'archive';
  };
  attributes: {
    document: Attribute.Media<'files'> & Attribute.Required;
    submit_date: Attribute.Date & Attribute.Required;
  };
}

export interface InvestorSummary extends Schema.Component {
  collectionName: 'components_investor_summaries';
  info: {
    displayName: 'summary';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    currency: Attribute.String & Attribute.Required;
    data: Attribute.Component<'investor.data', true>;
  };
}

export interface InvestorData extends Schema.Component {
  collectionName: 'components_investor_data';
  info: {
    displayName: 'data';
    icon: 'bulletList';
  };
  attributes: {
    year: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 4;
      }>;
    value: Attribute.Integer & Attribute.Required;
  };
}

export interface CoverageItem extends Schema.Component {
  collectionName: 'components_coverage_items';
  info: {
    displayName: 'item';
    icon: 'layer';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    address: Attribute.Text & Attribute.Required;
    phone: Attribute.String;
    website: Attribute.String;
    photo: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface CoverageHeadOffice extends Schema.Component {
  collectionName: 'components_coverage_head_offices';
  info: {
    displayName: 'head office';
    icon: 'star';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    item: Attribute.Component<'coverage.item'> & Attribute.Required;
  };
}

export interface CoverageAffiliation extends Schema.Component {
  collectionName: 'components_coverage_affiliations';
  info: {
    displayName: 'affiliation';
    icon: 'store';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    items: Attribute.Component<'coverage.item', true> & Attribute.Required;
  };
}

export interface HomeSlide extends Schema.Component {
  collectionName: 'components_home_slides';
  info: {
    displayName: 'slide';
    icon: 'picture';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    caption: Attribute.Text;
    background: Attribute.Media<'images' | 'videos'>;
    cta_label: Attribute.String & Attribute.Required;
    cta_url: Attribute.String & Attribute.Required;
    video_url: Attribute.String;
  };
}

export interface HomeServices extends Schema.Component {
  collectionName: 'components_home_services';
  info: {
    displayName: 'services';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    cta: Attribute.Component<'shared.cta-button'> & Attribute.Required;
    items: Attribute.Component<'home.service-item', true> & Attribute.Required;
  };
}

export interface HomeServiceItem extends Schema.Component {
  collectionName: 'components_home_service_items';
  info: {
    displayName: 'service item';
    icon: 'layer';
  };
  attributes: {
    service: Attribute.Enumeration<['RETAIL', 'COMMERCIAL', 'CORE']> &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    dynamic_endpoint: Attribute.Text & Attribute.Required;
  };
}

export interface HomePublication extends Schema.Component {
  collectionName: 'components_home_publications';
  info: {
    displayName: 'publication';
    icon: 'book';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    endpoint: Attribute.String & Attribute.Required;
    params: Attribute.Component<'repeatable.params', true>;
    section_title: Attribute.String & Attribute.Required;
  };
}

export interface HomeOurClient extends Schema.Component {
  collectionName: 'components_home_our_clients';
  info: {
    displayName: 'our client';
    icon: 'command';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    endpoint: Attribute.String & Attribute.Required;
    params: Attribute.Component<'repeatable.params', true>;
    cta: Attribute.Component<'shared.cta-button'> & Attribute.Required;
  };
}

export interface HomeHero extends Schema.Component {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'hero';
    icon: 'monitor';
    description: '';
  };
  attributes: {
    slides: Attribute.Component<'home.slide', true> & Attribute.Required;
    achievements: Attribute.Component<'home.achievement'> & Attribute.Required;
    description: Attribute.Component<'home.company-description'> &
      Attribute.Required;
    desc_items: Attribute.Component<'home.desc-item', true>;
  };
}

export interface HomeDescItem extends Schema.Component {
  collectionName: 'components_menu_desc_items';
  info: {
    displayName: 'desc item';
    icon: 'grid';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    icon: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::react-icons.icon'>;
  };
}

export interface HomeCompanyDescription extends Schema.Component {
  collectionName: 'components_home_company_descriptions';
  info: {
    displayName: 'company description';
    icon: 'write';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    motto: Attribute.Text & Attribute.Required;
    item_title: Attribute.String;
  };
}

export interface HomeCis extends Schema.Component {
  collectionName: 'components_home_cis';
  info: {
    displayName: 'cis';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    image: Attribute.Media<'images'> & Attribute.Required;
    feature: Attribute.Component<'home.desc-item', true>;
    cta: Attribute.Component<'shared.cta-button'> & Attribute.Required;
    section_title: Attribute.String & Attribute.Required;
  };
}

export interface HomeAchievement extends Schema.Component {
  collectionName: 'components_home_achievements';
  info: {
    displayName: 'achievement';
    icon: 'crown';
    description: '';
  };
  attributes: {
    endpoint: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.whatsapp': SharedWhatsapp;
      'shared.socmed-link': SharedSocmedLink;
      'shared.social-media': SharedSocialMedia;
      'shared.dynamic-endpoint': SharedDynamicEndpoint;
      'shared.cta-button': SharedCtaButton;
      'service.our-partner': ServiceOurPartner;
      'service.other-service': ServiceOtherService;
      'service.main-service': ServiceMainService;
      'service-detail.promo': ServiceDetailPromo;
      'service-detail.promo-item': ServiceDetailPromoItem;
      'service-detail.products': ServiceDetailProducts;
      'service-detail.procedure': ServiceDetailProcedure;
      'service-detail.procedure-item': ServiceDetailProcedureItem;
      'service-detail.incentive': ServiceDetailIncentive;
      'service-detail.incentive-list': ServiceDetailIncentiveList;
      'service-detail.faq': ServiceDetailFaq;
      'service-detail.faq-item': ServiceDetailFaqItem;
      'repeatable.title-desc': RepeatableTitleDesc;
      'repeatable.seo-properties': RepeatableSeoProperties;
      'repeatable.params': RepeatableParams;
      'profile.vision': ProfileVision;
      'profile.value': ProfileValue;
      'profile.structure': ProfileStructure;
      'profile.shortcut': ProfileShortcut;
      'profile.mission': ProfileMission;
      'profile.history': ProfileHistory;
      'profile.history-item': ProfileHistoryItem;
      'profile.company-value': ProfileCompanyValue;
      'organization.director': OrganizationDirector;
      'organization.commissioner': OrganizationCommissioner;
      'menu.sub-menu': MenuSubMenu;
      'menu.menu': MenuMenu;
      'procurement.document': ProcurementDocument;
      'procurement.classification': ProcurementClassification;
      'procurement.announcement-period': ProcurementAnnouncementPeriod;
      'procurement.announcement-doc': ProcurementAnnouncementDoc;
      'investor.summary': InvestorSummary;
      'investor.data': InvestorData;
      'coverage.item': CoverageItem;
      'coverage.head-office': CoverageHeadOffice;
      'coverage.affiliation': CoverageAffiliation;
      'home.slide': HomeSlide;
      'home.services': HomeServices;
      'home.service-item': HomeServiceItem;
      'home.publication': HomePublication;
      'home.our-client': HomeOurClient;
      'home.hero': HomeHero;
      'home.desc-item': HomeDescItem;
      'home.company-description': HomeCompanyDescription;
      'home.cis': HomeCis;
      'home.achievement': HomeAchievement;
    }
  }
}
