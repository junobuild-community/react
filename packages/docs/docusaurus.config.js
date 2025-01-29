module.exports = {
  title: "My Project",
  tagline: "Dinosaurs are cool",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "your-org", // Usually your GitHub org/user name.
  projectName: "your-project", // Usually your repo name.
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "content",
          routeBasePath: "/", // Set to '/' to make docs the homepage
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/junobuild-community/react/edit/main/packages/docs/",
        },
        blog: false, // Disable the blog if not needed
      },
    ],
  ],
};
