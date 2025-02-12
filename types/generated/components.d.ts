import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedWhatsapp extends Schema.Component {
  collectionName: 'components_shared_whatsapps';
  info: {
    displayName: 'whatsapp';
    icon: 'message';
  };
  attributes: {
    phone_number: Attribute.String & Attribute.Required;
    initial_message: Attribute.Text & Attribute.Required;
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
    background: Attribute.Media<'images' | 'videos'> & Attribute.Required;
    cta_label: Attribute.String & Attribute.Required;
    cta_url: Attribute.String & Attribute.Required;
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
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    endpoint: Attribute.String & Attribute.Required;
    params: Attribute.Component<'repeatable.params', true>;
  };
}

export interface HomeOurClient extends Schema.Component {
  collectionName: 'components_home_our_clients';
  info: {
    displayName: 'our client';
    icon: 'command';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    endpoint: Attribute.String & Attribute.Required;
    params: Attribute.Component<'repeatable.params', true>;
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
    achievements: Attribute.Component<'home.achievement', true> &
      Attribute.Required;
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
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    motto: Attribute.Text & Attribute.Required;
  };
}

export interface HomeCis extends Schema.Component {
  collectionName: 'components_home_cis';
  info: {
    displayName: 'cis';
    icon: 'discuss';
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
  };
}

export interface HomeAchievement extends Schema.Component {
  collectionName: 'components_home_achievements';
  info: {
    displayName: 'achievement';
    icon: 'crown';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    caption: Attribute.Text;
    image: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.whatsapp': SharedWhatsapp;
      'shared.cta-button': SharedCtaButton;
      'service.other-service': ServiceOtherService;
      'service.main-service': ServiceMainService;
      'repeatable.title-desc': RepeatableTitleDesc;
      'repeatable.seo-properties': RepeatableSeoProperties;
      'repeatable.params': RepeatableParams;
      'profile.vision': ProfileVision;
      'profile.value': ProfileValue;
      'profile.structure': ProfileStructure;
      'profile.mission': ProfileMission;
      'profile.history': ProfileHistory;
      'profile.history-item': ProfileHistoryItem;
      'menu.sub-menu': MenuSubMenu;
      'menu.menu': MenuMenu;
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
