export const personalProject = {
  name: 'personalProject',
  title: 'Personal Project',
  type: 'document',
  fields: [
    {
      name: 'num',
      title: 'Number',
      type: 'string',
      description: 'e.g. 01, 02',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'stack',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
      description: 'e.g. HTML, CSS, JavaScript',
    },
    {
      name: 'itchLink',
      title: 'Itch.io Link',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Preview Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
