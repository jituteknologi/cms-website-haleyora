import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginReactIconsIconlibrary extends Schema.CollectionType {
  collectionName: 'iconlibrary';
  info: {
    singularName: 'iconlibrary';
    pluralName: 'iconlibraries';
    displayName: 'IconLibrary';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    abbreviation: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 3;
      }>;
    isEnabled: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::react-icons.iconlibrary',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::react-icons.iconlibrary',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiClientClient extends Schema.CollectionType {
  collectionName: 'clients';
  info: {
    singularName: 'client';
    pluralName: 'clients';
    displayName: 'Master Client';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    logo: Attribute.Media<'images'> & Attribute.Required;
    client_category: Attribute.Relation<
      'api::client.client',
      'manyToOne',
      'api::client-category.client-category'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::client.client',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::client.client',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiClientCategoryClientCategory extends Schema.CollectionType {
  collectionName: 'client_categories';
  info: {
    singularName: 'client-category';
    pluralName: 'client-categories';
    displayName: 'Master Client Category';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    clients: Attribute.Relation<
      'api::client-category.client-category',
      'oneToMany',
      'api::client.client'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::client-category.client-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::client-category.client-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCoverageCoverage extends Schema.SingleType {
  collectionName: 'coverages';
  info: {
    singularName: 'coverage';
    pluralName: 'coverages';
    displayName: 'Page Coverage';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    head_office: Attribute.Component<'coverage.head-office'>;
    affiliation: Attribute.Component<'coverage.affiliation'> &
      Attribute.Required;
    operational_area_title: Attribute.String & Attribute.Required;
    dynamic_endpoint: Attribute.Component<'shared.dynamic-endpoint'> &
      Attribute.Required;
    subsidiary: Attribute.Component<'coverage.affiliation'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::coverage.coverage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::coverage.coverage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCsrCsr extends Schema.CollectionType {
  collectionName: 'csrs';
  info: {
    singularName: 'csr';
    pluralName: 'csrs';
    displayName: 'TJSL';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::csr.csr', 'title'> & Attribute.Required;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    featured_image: Attribute.Media<'images'> & Attribute.Required;
    csr_categories: Attribute.Relation<
      'api::csr.csr',
      'manyToMany',
      'api::csr-category.csr-category'
    >;
    short_description: Attribute.Text;
    subtitle: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::csr.csr', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::csr.csr', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCsrCategoryCsrCategory extends Schema.CollectionType {
  collectionName: 'csr_categories';
  info: {
    singularName: 'csr-category';
    pluralName: 'csr-categories';
    displayName: 'TJSL Category';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::csr-category.csr-category', 'name'> &
      Attribute.Required;
    csrs: Attribute.Relation<
      'api::csr-category.csr-category',
      'manyToMany',
      'api::csr.csr'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::csr-category.csr-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::csr-category.csr-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGovernanceGovernance extends Schema.SingleType {
  collectionName: 'governances';
  info: {
    singularName: 'governance';
    pluralName: 'governances';
    displayName: 'Page Governance';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    dynamic_endpoint: Attribute.Component<'shared.dynamic-endpoint'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::governance.governance',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::governance.governance',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGuidelineAndPolicyGuidelineAndPolicy
  extends Schema.CollectionType {
  collectionName: 'guideline_and_policies';
  info: {
    singularName: 'guideline-and-policy';
    pluralName: 'guideline-and-policies';
    displayName: 'Guideline & Policy';
    description: '';
  };
  options: {
    draftAndPublish: false;
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
    cover: Attribute.Media<'images'> & Attribute.Required;
    file: Attribute.Media<'files'>;
    link: Attribute.String;
    subtitle: Attribute.String;
    order: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::guideline-and-policy.guideline-and-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::guideline-and-policy.guideline-and-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomeHome extends Schema.SingleType {
  collectionName: 'homes';
  info: {
    singularName: 'home';
    pluralName: 'homes';
    displayName: 'Page Home';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    home_page: Attribute.DynamicZone<
      [
        'home.hero',
        'home.services',
        'home.cis',
        'home.publication',
        'home.our-client'
      ]
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiIntroPopupIntroPopup extends Schema.SingleType {
  collectionName: 'intro_popups';
  info: {
    singularName: 'intro-popup';
    pluralName: 'intro-popups';
    displayName: 'Intro Popup';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    file: Attribute.Media<'images'>;
    link: Attribute.String;
    start_date: Attribute.Date & Attribute.Required;
    end_date: Attribute.Date & Attribute.Required;
    cta: Attribute.Component<'shared.cta-button'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::intro-popup.intro-popup',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::intro-popup.intro-popup',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInvestorInvestor extends Schema.SingleType {
  collectionName: 'investors';
  info: {
    singularName: 'investor';
    pluralName: 'investors';
    displayName: 'Page Investor';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text;
    summary_title: Attribute.String & Attribute.Required;
    summary: Attribute.Component<'investor.summary', true>;
    dynamic_endpoint: Attribute.Component<'shared.dynamic-endpoint'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::investor.investor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::investor.investor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMagazineMagazine extends Schema.CollectionType {
  collectionName: 'magazines';
  info: {
    singularName: 'magazine';
    pluralName: 'magazines';
    displayName: 'Magazine';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    cover: Attribute.Media<'images'> & Attribute.Required;
    file: Attribute.Media<'files'>;
    link: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::magazine.magazine',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::magazine.magazine',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMenuListMenuList extends Schema.CollectionType {
  collectionName: 'menu_lists';
  info: {
    singularName: 'menu-list';
    pluralName: 'menu-lists';
    displayName: 'Menu';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::menu-list.menu-list', 'title'> &
      Attribute.Required;
    menus: Attribute.DynamicZone<['menu.menu']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::menu-list.menu-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::menu-list.menu-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOperationalAreaOperationalArea
  extends Schema.CollectionType {
  collectionName: 'operational_areas';
  info: {
    singularName: 'operational-area';
    pluralName: 'operational-areas';
    displayName: 'Operational Area';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    address: Attribute.Text;
    google_maps_link: Attribute.Text & Attribute.Required;
    working_area: Attribute.Text;
    slug: Attribute.UID<'api::operational-area.operational-area', 'title'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::operational-area.operational-area',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::operational-area.operational-area',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrganizationMemberOrganizationMember
  extends Schema.CollectionType {
  collectionName: 'organization_members';
  info: {
    singularName: 'organization-member';
    pluralName: 'organization-members';
    displayName: 'Organization Member';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    organizational_position: Attribute.Relation<
      'api::organization-member.organization-member',
      'manyToOne',
      'api::organizational-position.organizational-position'
    >;
    photo: Attribute.Media<'images'> & Attribute.Required;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    slug: Attribute.UID<
      'api::organization-member.organization-member',
      'name'
    > &
      Attribute.Required;
    type: Attribute.Enumeration<
      ['Dewan Komisaris', 'Dewan Direksi', 'Kepala Divisi']
    > &
      Attribute.Required;
    short_description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::organization-member.organization-member',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::organization-member.organization-member',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrganizationalPositionOrganizationalPosition
  extends Schema.CollectionType {
  collectionName: 'organizational_positions';
  info: {
    singularName: 'organizational-position';
    pluralName: 'organizational-positions';
    displayName: 'Organizational Position';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    organization_members: Attribute.Relation<
      'api::organizational-position.organizational-position',
      'oneToMany',
      'api::organization-member.organization-member'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::organizational-position.organizational-position',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::organizational-position.organizational-position',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPagePage extends Schema.CollectionType {
  collectionName: 'pages';
  info: {
    singularName: 'page';
    pluralName: 'pages';
    displayName: 'Pages';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::page.page', 'title'> & Attribute.Required;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    featured_image: Attribute.Media<'images'>;
    subtitle: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiPageClientPageClient extends Schema.SingleType {
  collectionName: 'page_clients';
  info: {
    singularName: 'page-client';
    pluralName: 'page-clients';
    displayName: 'Page Client';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    description: Attribute.Text;
    dynamic_endpoint: Attribute.Component<'shared.dynamic-endpoint'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-client.page-client',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-client.page-client',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPageCsrPageCsr extends Schema.SingleType {
  collectionName: 'page_csrs';
  info: {
    singularName: 'page-csr';
    pluralName: 'page-csrs';
    displayName: 'Page CSR';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    dynamic_endpoint: Attribute.Component<'shared.dynamic-endpoint'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-csr.page-csr',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-csr.page-csr',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPageGuidelinePageGuideline extends Schema.SingleType {
  collectionName: 'page_guidelines';
  info: {
    singularName: 'page-guideline';
    pluralName: 'page-guidelines';
    displayName: 'Page Guidelines & Policies';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    dynamic_endpoint: Attribute.Component<'shared.dynamic-endpoint'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-guideline.page-guideline',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-guideline.page-guideline',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPageMagazinePageMagazine extends Schema.SingleType {
  collectionName: 'page_magazines';
  info: {
    singularName: 'page-magazine';
    pluralName: 'page-magazines';
    displayName: 'Page Magazine';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    dynamic_endpoint: Attribute.Component<'shared.dynamic-endpoint'> &
      Attribute.Required;
    subtitle: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-magazine.page-magazine',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-magazine.page-magazine',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPageOrganizationPageOrganization extends Schema.SingleType {
  collectionName: 'page_organizations';
  info: {
    singularName: 'page-organization';
    pluralName: 'page-organizations';
    displayName: 'Page Organization';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    organization: Attribute.DynamicZone<
      ['organization.director', 'organization.commissioner']
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-organization.page-organization',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-organization.page-organization',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPagePartnerPagePartner extends Schema.SingleType {
  collectionName: 'page_partners';
  info: {
    singularName: 'page-partner';
    pluralName: 'page-partners';
    displayName: 'Page Partner';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    description: Attribute.Text;
    dynamic_endpoint: Attribute.Component<'shared.dynamic-endpoint'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-partner.page-partner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-partner.page-partner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPageProcurementPageProcurement extends Schema.SingleType {
  collectionName: 'page_procurements';
  info: {
    singularName: 'page-procurement';
    pluralName: 'page-procurements';
    displayName: 'Page Procurement';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    procedure: Attribute.Component<'procurement.document'> & Attribute.Required;
    registration: Attribute.Component<'procurement.document'> &
      Attribute.Required;
    classification_title: Attribute.String & Attribute.Required;
    dynamic_endpoint: Attribute.Component<'shared.dynamic-endpoint'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-procurement.page-procurement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-procurement.page-procurement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPageServicePageService extends Schema.SingleType {
  collectionName: 'page_services';
  info: {
    singularName: 'page-service';
    pluralName: 'page-services';
    displayName: 'Page Service';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    services: Attribute.DynamicZone<
      [
        'service.other-service',
        'service.main-service',
        'home.our-client',
        'service.our-partner'
      ]
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-service.page-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-service.page-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPartnerPartner extends Schema.CollectionType {
  collectionName: 'partners';
  info: {
    singularName: 'partner';
    pluralName: 'partners';
    displayName: 'Master Partner';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    logo: Attribute.Media<'images'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::partner.partner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::partner.partner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPostPost extends Schema.CollectionType {
  collectionName: 'posts';
  info: {
    singularName: 'post';
    pluralName: 'posts';
    displayName: 'News';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::post.post', 'title'> & Attribute.Required;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    featured_image: Attribute.Media<'images'> & Attribute.Required;
    post_categories: Attribute.Relation<
      'api::post.post',
      'manyToMany',
      'api::post-category.post-category'
    >;
    views: Attribute.Integer & Attribute.DefaultTo<0>;
    short_description: Attribute.Text & Attribute.Required;
    subtitle: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::post.post', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::post.post', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiPostCategoryPostCategory extends Schema.CollectionType {
  collectionName: 'post_categories';
  info: {
    singularName: 'post-category';
    pluralName: 'post-categories';
    displayName: 'News Category';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    slug: Attribute.UID<'api::post-category.post-category', 'name'> &
      Attribute.Required;
    posts: Attribute.Relation<
      'api::post-category.post-category',
      'manyToMany',
      'api::post.post'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::post-category.post-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::post-category.post-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProcAnnouncementPeriodProcAnnouncementPeriod
  extends Schema.SingleType {
  collectionName: 'proc_announcement_periods';
  info: {
    singularName: 'proc-announcement-period';
    pluralName: 'proc-announcement-periods';
    displayName: 'Procurement Announcement Period';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    vendor: Attribute.Component<'procurement.announcement-period'> &
      Attribute.Required;
    schedule: Attribute.Component<'procurement.announcement-period'> &
      Attribute.Required;
    result: Attribute.Component<'procurement.announcement-period'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::proc-announcement-period.proc-announcement-period',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::proc-announcement-period.proc-announcement-period',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProcAnouncementProcAnouncement
  extends Schema.CollectionType {
  collectionName: 'proc_anouncements';
  info: {
    singularName: 'proc-anouncement';
    pluralName: 'proc-anouncements';
    displayName: 'Procurement Anouncement';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    number: Attribute.String & Attribute.Required & Attribute.Unique;
    tender: Attribute.Relation<
      'api::proc-anouncement.proc-anouncement',
      'oneToOne',
      'api::proc-tender.proc-tender'
    >;
    objection_period: Attribute.Date;
    vendors: Attribute.Relation<
      'api::proc-anouncement.proc-anouncement',
      'oneToMany',
      'api::proc-vendor.proc-vendor'
    >;
    announcement_doc: Attribute.Component<
      'procurement.announcement-doc',
      true
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::proc-anouncement.proc-anouncement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::proc-anouncement.proc-anouncement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProcClassificationProcClassification
  extends Schema.CollectionType {
  collectionName: 'proc_classifications';
  info: {
    singularName: 'proc-classification';
    pluralName: 'proc-classifications';
    displayName: 'Procurement Classification';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    class_item: Attribute.Component<'repeatable.title-desc', true> &
      Attribute.Required;
    proc_sub_classifications: Attribute.Relation<
      'api::proc-classification.proc-classification',
      'oneToMany',
      'api::proc-sub-classification.proc-sub-classification'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::proc-classification.proc-classification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::proc-classification.proc-classification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProcSubClassificationProcSubClassification
  extends Schema.CollectionType {
  collectionName: 'proc_sub_classifications';
  info: {
    singularName: 'proc-sub-classification';
    pluralName: 'proc-sub-classifications';
    displayName: 'Procurement Sub Classification';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    kbli_number: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    proc_classification: Attribute.Relation<
      'api::proc-sub-classification.proc-sub-classification',
      'manyToOne',
      'api::proc-classification.proc-classification'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::proc-sub-classification.proc-sub-classification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::proc-sub-classification.proc-sub-classification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProcTenderProcTender extends Schema.CollectionType {
  collectionName: 'proc_tenders';
  info: {
    singularName: 'proc-tender';
    pluralName: 'proc-tenders';
    displayName: 'Procurement Tender';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    rks_number: Attribute.String & Attribute.Required & Attribute.Unique;
    title: Attribute.String & Attribute.Required;
    registration_start: Attribute.DateTime & Attribute.Required;
    registration_deadline: Attribute.DateTime & Attribute.Required;
    aanwijizing_start: Attribute.DateTime & Attribute.Required;
    aawijizing_end: Attribute.DateTime;
    document: Attribute.Media<'files'> & Attribute.Required;
    type: Attribute.Enumeration<['KHS', 'Non-KHS']> & Attribute.Required;
    anouncement: Attribute.Relation<
      'api::proc-tender.proc-tender',
      'oneToOne',
      'api::proc-anouncement.proc-anouncement'
    >;
    tender_value: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::proc-tender.proc-tender',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::proc-tender.proc-tender',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProcVendorProcVendor extends Schema.CollectionType {
  collectionName: 'proc_vendors';
  info: {
    singularName: 'proc-vendor';
    pluralName: 'proc-vendors';
    displayName: 'Procurement Vendor';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    company_name: Attribute.String & Attribute.Required;
    location: Attribute.String & Attribute.Required;
    last_update: Attribute.Date;
    next_update: Attribute.Date;
    certificate_expiry: Attribute.Date;
    status: Attribute.Enumeration<
      [
        'MENDAFTAR',
        'DIPERIKSA',
        'DITERIMA',
        'DITOLAK',
        'MASA SANGGAH',
        'PERLU PERPANJANGAN',
        'TIDAK AKTIF'
      ]
    > &
      Attribute.Required;
    vendor_id: Attribute.String & Attribute.Required & Attribute.Unique;
    classes: Attribute.Component<'procurement.classification', true> &
      Attribute.Required;
    company_owner: Attribute.String & Attribute.Required;
    company_address: Attribute.Text & Attribute.Required;
    company_npwp: Attribute.String & Attribute.Required;
    company_phone: Attribute.String & Attribute.Required;
    company_email: Attribute.Email & Attribute.Required;
    anouncement: Attribute.Relation<
      'api::proc-vendor.proc-vendor',
      'manyToOne',
      'api::proc-anouncement.proc-anouncement'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::proc-vendor.proc-vendor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::proc-vendor.proc-vendor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductProduct extends Schema.CollectionType {
  collectionName: 'products';
  info: {
    singularName: 'product';
    pluralName: 'products';
    displayName: 'Master Product';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    type: Attribute.String;
    power: Attribute.String;
    price: Attribute.BigInteger & Attribute.Required;
    service: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::service.service'
    >;
    image: Attribute.Media<'images'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProfileProfile extends Schema.SingleType {
  collectionName: 'profiles';
  info: {
    singularName: 'profile';
    pluralName: 'profiles';
    displayName: 'Page Profile';
    description: '';
  };
  options: {
    draftAndPublish: false;
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
    vision: Attribute.Component<'profile.vision'> & Attribute.Required;
    mission: Attribute.Component<'profile.mission'> & Attribute.Required;
    history: Attribute.Component<'profile.history'> & Attribute.Required;
    company_structure: Attribute.Media<'images'> & Attribute.Required;
    company_value: Attribute.Component<'profile.company-value'> &
      Attribute.Required;
    shortcut: Attribute.Component<'profile.shortcut'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::profile.profile',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::profile.profile',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiReportReport extends Schema.CollectionType {
  collectionName: 'reports';
  info: {
    singularName: 'report';
    pluralName: 'reports';
    displayName: 'Annual Report';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    cover: Attribute.Media<'images'> & Attribute.Required;
    file: Attribute.Media<'files'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::report.report',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::report.report',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiReportYearReportYear extends Schema.CollectionType {
  collectionName: 'report_years';
  info: {
    singularName: 'report-year';
    pluralName: 'report-years';
    displayName: 'Report Year';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    year: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 4;
        maxLength: 4;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::report-year.report-year',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::report-year.report-year',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceService extends Schema.CollectionType {
  collectionName: 'services';
  info: {
    singularName: 'service';
    pluralName: 'services';
    displayName: 'Master Service';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    slug: Attribute.UID<'api::service.service', 'name'> & Attribute.Required;
    service_category: Attribute.Relation<
      'api::service.service',
      'manyToOne',
      'api::service-category.service-category'
    >;
    image: Attribute.Media<'images'>;
    image_title: Attribute.String;
    image_subtitle: Attribute.String;
    show_link: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    products: Attribute.Relation<
      'api::service.service',
      'oneToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceCategoryServiceCategory
  extends Schema.CollectionType {
  collectionName: 'service_categories';
  info: {
    singularName: 'service-category';
    pluralName: 'service-categories';
    displayName: 'Master Service Category';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    image: Attribute.Media<'images'>;
    services: Attribute.Relation<
      'api::service-category.service-category',
      'oneToMany',
      'api::service.service'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service-category.service-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::service-category.service-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceDetailServiceDetail extends Schema.SingleType {
  collectionName: 'service_details';
  info: {
    singularName: 'service-detail';
    pluralName: 'service-details';
    displayName: 'Page Service Detail';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    incentive: Attribute.Component<'service-detail.incentive'>;
    title: Attribute.String & Attribute.Required;
    banner_video_url: Attribute.String & Attribute.Required;
    promo: Attribute.Component<'service-detail.promo'>;
    faq: Attribute.Component<'service-detail.faq'>;
    procedure: Attribute.Component<'service-detail.procedure'>;
    product_title: Attribute.String & Attribute.Required;
    dynamic_endpoint: Attribute.Component<'shared.dynamic-endpoint'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service-detail.service-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::service-detail.service-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSettingSetting extends Schema.SingleType {
  collectionName: 'settings';
  info: {
    singularName: 'setting';
    pluralName: 'settings';
    displayName: 'Setting';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    company_name: Attribute.String;
    company_logo: Attribute.Media<'images'>;
    company_address: Attribute.Text;
    company_phone: Attribute.String;
    whatsapp: Attribute.Component<'shared.whatsapp'> & Attribute.Required;
    social_media: Attribute.Component<'shared.social-media'>;
    iso_number: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::setting.setting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::setting.setting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSustainabilitySustainability extends Schema.SingleType {
  collectionName: 'sustainabilities';
  info: {
    singularName: 'sustainability';
    pluralName: 'sustainabilities';
    displayName: 'Page Sustainability';
    description: '';
  };
  options: {
    draftAndPublish: false;
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
    image: Attribute.Media<'images'>;
    image_label: Attribute.String;
    image_description: Attribute.Text;
    dynamic_endpoint: Attribute.Component<'shared.dynamic-endpoint'> &
      Attribute.Required;
    subtitle: Attribute.String;
    report_title: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sustainability.sustainability',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sustainability.sustainability',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSustainabilityReportSustainabilityReport
  extends Schema.CollectionType {
  collectionName: 'sustainability_reports';
  info: {
    singularName: 'sustainability-report';
    pluralName: 'sustainability-reports';
    displayName: 'Sustainability Report';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    report_file: Attribute.Media<'files'> & Attribute.Required;
    report_cover: Attribute.Media<'images'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sustainability-report.sustainability-report',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sustainability-report.sustainability-report',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWhistleblowerWhistleblower extends Schema.SingleType {
  collectionName: 'whistleblowers';
  info: {
    singularName: 'whistleblower';
    pluralName: 'whistleblowers';
    displayName: 'Page Whistleblower';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    image: Attribute.Media<'images'>;
    cta: Attribute.Component<'shared.cta-button'> & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::whistleblower.whistleblower',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::whistleblower.whistleblower',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::react-icons.iconlibrary': PluginReactIconsIconlibrary;
      'plugin::i18n.locale': PluginI18NLocale;
      'api::client.client': ApiClientClient;
      'api::client-category.client-category': ApiClientCategoryClientCategory;
      'api::coverage.coverage': ApiCoverageCoverage;
      'api::csr.csr': ApiCsrCsr;
      'api::csr-category.csr-category': ApiCsrCategoryCsrCategory;
      'api::governance.governance': ApiGovernanceGovernance;
      'api::guideline-and-policy.guideline-and-policy': ApiGuidelineAndPolicyGuidelineAndPolicy;
      'api::home.home': ApiHomeHome;
      'api::intro-popup.intro-popup': ApiIntroPopupIntroPopup;
      'api::investor.investor': ApiInvestorInvestor;
      'api::magazine.magazine': ApiMagazineMagazine;
      'api::menu-list.menu-list': ApiMenuListMenuList;
      'api::operational-area.operational-area': ApiOperationalAreaOperationalArea;
      'api::organization-member.organization-member': ApiOrganizationMemberOrganizationMember;
      'api::organizational-position.organizational-position': ApiOrganizationalPositionOrganizationalPosition;
      'api::page.page': ApiPagePage;
      'api::page-client.page-client': ApiPageClientPageClient;
      'api::page-csr.page-csr': ApiPageCsrPageCsr;
      'api::page-guideline.page-guideline': ApiPageGuidelinePageGuideline;
      'api::page-magazine.page-magazine': ApiPageMagazinePageMagazine;
      'api::page-organization.page-organization': ApiPageOrganizationPageOrganization;
      'api::page-partner.page-partner': ApiPagePartnerPagePartner;
      'api::page-procurement.page-procurement': ApiPageProcurementPageProcurement;
      'api::page-service.page-service': ApiPageServicePageService;
      'api::partner.partner': ApiPartnerPartner;
      'api::post.post': ApiPostPost;
      'api::post-category.post-category': ApiPostCategoryPostCategory;
      'api::proc-announcement-period.proc-announcement-period': ApiProcAnnouncementPeriodProcAnnouncementPeriod;
      'api::proc-anouncement.proc-anouncement': ApiProcAnouncementProcAnouncement;
      'api::proc-classification.proc-classification': ApiProcClassificationProcClassification;
      'api::proc-sub-classification.proc-sub-classification': ApiProcSubClassificationProcSubClassification;
      'api::proc-tender.proc-tender': ApiProcTenderProcTender;
      'api::proc-vendor.proc-vendor': ApiProcVendorProcVendor;
      'api::product.product': ApiProductProduct;
      'api::profile.profile': ApiProfileProfile;
      'api::report.report': ApiReportReport;
      'api::report-year.report-year': ApiReportYearReportYear;
      'api::service.service': ApiServiceService;
      'api::service-category.service-category': ApiServiceCategoryServiceCategory;
      'api::service-detail.service-detail': ApiServiceDetailServiceDetail;
      'api::setting.setting': ApiSettingSetting;
      'api::sustainability.sustainability': ApiSustainabilitySustainability;
      'api::sustainability-report.sustainability-report': ApiSustainabilityReportSustainabilityReport;
      'api::whistleblower.whistleblower': ApiWhistleblowerWhistleblower;
    }
  }
}
