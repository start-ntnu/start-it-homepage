export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f450f0f4419c3c1d6d96ed9',
                  title: 'Sanity Studio',
                  name: 'start-it-homepage-studio',
                  apiId: 'a27761e9-55f3-4a76-bd70-151c51e19be3'
                },
                {
                  buildHookId: '5f450f0f82dc022d6fa7abef',
                  title: 'Blog Website',
                  name: 'start-it-homepage',
                  apiId: '325f71b3-6472-4aa8-a81e-eacf7638bcdb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AndreasRikheim/start-it-homepage',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://start-it-homepage.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
