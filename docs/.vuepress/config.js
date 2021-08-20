module.exports = {
    title: 'PROJECT',
    description: '',
    dest: 'docs',
    base: '/MFEE18_project/',
    repo: 'https://github.com/SmaHonda/MFEE18_project',
    themeConfig: {
      sidebarDepth: 0,
      sidebar: [
        ['/', '前言'],
        {
            title: '主要元件',
            collapsable: false,
            children: [
              '/product/add',
            //   '/component/state-storage-and-locking',
            //   '/component/backends',
            ]
          },
      ],
      nav: [
        { text: 'Home', link: '/' },
        // { text: 'Github', link: 'https://github.com/SmaHonda/MFEE18_project' }
      ]
    }
  }