"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const ROUTES_EE = [
  ...(window.strapi.features.isEnabled(window.strapi.features.AUDIT_LOGS)
    ? [
        {
          async Component() {
            const { ProtectedListPage } = await Promise.resolve().then(() =>
              require("./ListPage-tkJ_3XtP.js")
            );
            return ProtectedListPage;
          },
          to: "/settings/audit-logs",
          exact: true,
        },
      ]
    : []),
  ...(window.strapi.features.isEnabled(window.strapi.features.REVIEW_WORKFLOWS)
    ? [
        {
          async Component() {
            const { ProtectedReviewWorkflowsPage } =
              await Promise.resolve().then(() =>
                require("./ListPage-pIynCOwO.js")
              );
            return ProtectedReviewWorkflowsPage;
          },
          to: "/settings/review-workflows",
          exact: true,
        },
        {
          async Component() {
            const { ReviewWorkflowsCreatePage } = await Promise.resolve().then(
              () => require("./CreatePage-1uKKLoXZ.js")
            );
            return ReviewWorkflowsCreatePage;
          },
          to: "/settings/review-workflows/create",
          exact: true,
        },
        {
          async Component() {
            const { ReviewWorkflowsEditPage } = await Promise.resolve().then(
              () => require("./EditPage-PlgV4-L7.js")
            );
            return ReviewWorkflowsEditPage;
          },
          to: "/settings/review-workflows/:workflowId",
          exact: true,
        },
      ]
    : []),
  ...(window.strapi.features.isEnabled(window.strapi.features.SSO)
    ? [
        {
          async Component() {
            const { ProtectedSSO } = await Promise.resolve().then(() =>
              require("./SingleSignOnPage-NyiQL_wU.js")
            );
            return ProtectedSSO;
          },
          to: "/settings/single-sign-on",
          exact: true,
        },
      ]
    : []),
];
exports.ROUTES_EE = ROUTES_EE;
//# sourceMappingURL=constants-t8b57vSd.js.map
