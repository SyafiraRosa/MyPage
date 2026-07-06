export const workExperience = {
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {
      name: 'organization',
      title: 'Organization / Company',
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
      description: 'e.g. May 2024 - Present',
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
}
