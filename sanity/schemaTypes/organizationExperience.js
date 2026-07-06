export const organizationExperience = {
  name: 'organizationExperience',
  title: 'Organizational Experience',
  type: 'document',
  fields: [
    {
      name: 'organization',
      title: 'Organization',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
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
