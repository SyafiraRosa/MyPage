export const research = {
  name: 'research',
  title: 'Research',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link (Optional)',
      type: 'url',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of details for this research',
    },
    {
      name: 'startDate',
      title: 'Start Date (For sorting)',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM',
      },
      description: 'Pick the start month/year so the system can automatically sort this item.',
    },
  ],
};
