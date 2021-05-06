export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6093dced69dcffd2d72a596d",
                  title: "Sanity Studio",
                  name: "example-blog-gatsby-studio",
                  apiId: "452fe380-e703-4b46-be49-697bee5c6276",
                },
                {
                  buildHookId: "6093dcedf5e021ce2ea9b2f1",
                  title: "Blog Website",
                  name: "example-blog-gatsby",
                  apiId: "910df38f-5b5c-43f4-b5f7-8cc276ff4bfb",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/digitalaksjon/example-blog-gatsby",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://example-blog-gatsby.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
