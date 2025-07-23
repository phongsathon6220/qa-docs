module.exports = {
  title: 'QA Knowledge Base',
  tagline: 'เอกสารภายในทีม QA',
  url: 'https://phongsathon6220.github.io',
  baseUrl: '/qa-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'phongsathon6220',
  projectName: 'qa-docs',
  i18n: {
    defaultLocale: 'th',
    locales: ['th'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'QA Docs',
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} QA Team – Powered by เพชร`,
    },
  },
};
