export const education = {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'institution',
      title: 'Institution',
      type: 'string',
    },
    {
      name: 'degree',
      title: 'Degree',
      type: 'string',
    },
    {
      name: 'grade',
      title: 'Grade (Optional)',
      type: 'string',
      description: 'e.g., 3.85 / 4.00',
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., Aug 2019 - Aug 2023',
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
