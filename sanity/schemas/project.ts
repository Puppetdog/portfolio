const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },

    { name: "description", title: "Description", type: "string" },
    {
      title: "Badges",
      name: "badges",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "alt",
          type: "string",
        },
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "probStatement",
      title: "Problem Statement",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "HFdesign",
      name: "hfDesign",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "alt",
          type: "string",
        },
      ],
    },
    {
      title: "Start Date",
      name: "startDate",
      type: "date",
    },
    {
      title: "End Date",
      name: "endDate",
      type: "date",
    },
    { name: "role", title: "Role", type: "string" },
    {
      title: "Challenges",
      name: "challenges",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Learnings",
      name: "learnings",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default project;
