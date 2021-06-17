// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'Claudio Canales',
  domain: 'klaudioz.eth', // add without https:// , used in meta tags and share urls
  image: '/images/bigheadkarngyan.png',
  email: 'klaudioz@gmail.com',
  googleAnalyticsV4: {
    enabled: false,
    id: ''
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: false
  },
  social: {
    github: 'klaudioz',
    linkedin: 'canalesclaudio',
    facebook: 'karnsometimes',
    twitter: 'klaudioz',
    instagram: 'klaud10z',
    codestats: 'klaudioz' // https://codestats.net make a profile if you dont already have one.
  },
  buyMeACoffee: {
    enabled: true,
    url: 'https://www.buymeacoffee.com/klaudioz'
  },
  projects: {
    enabled: true,
  },
  blog: {
    enabled: true,
  },
  resume: {
    enabled: true,
    pdfUrl: '/RESUME_KLAUDIOZ.pdf' // add files in static folder
  },
  uses: {
    enabled: true,
    meta: [
      {title: 'OS', value: 'macOS Catalina'},
      {title: 'Memory', value: '16 GB 2667 MHz DDR4'},
      {title: 'Keyboard', value: 'Keychron K2 - Gateron Brown Keys'},
      {title: 'Mouse', value: 'Apple Magic Mouse 2'},
      {title: 'Monitor', value: "Samsung 49'' CHG90 QLED Curved"},
      {title: 'Laptop • Processor • Graphics', value: 'MacBook Pro (16-inch, 2019) • 2.6 GHz 6-Core Intel Core i7 • AMD Radeon Pro 5300M 4 GB + Intel UHD Graphics 630 1536 MB'}
    ]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: true,
    meta: [
      { name: 'Progrexion', src: '/images/Progrexion.png', url: 'https://www.progrexion.com' },
      { name: 'Kasten', src: '/images/Kasten.png', url: 'https://www.kasten.io' },
      { name: 'Seegrid', src: '/images/Seegrid.png', url: 'https://seegrid.com' },
    ]
  },
  loadingIndicator: {
    name: 'pulse'
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  strings: {
    en_US: {
      download: 'download',
      nav: {
        home: 'home',
        blog: 'blog',
        projects: 'projects',
        uses: 'uses',
        resume: 'resumé',
        buyMeACoffee: 'buy me a beer',
        signIn: 'sign in',
        signOut: 'sign out'
      },
      hero: {
        iBlogTech: 'Tech blog',
        haveALook: 'have a look',
        friendlyNeighborhood: 'your friendly',
        description: "I am a passionate technologist and engineer with ten years of experience working for important IT companies. Learning is the leitmotiv of my life, and I possess multiple certifications in the field and a master's degree in CS.",
        words: ['DevOps', 'engineer', 'technologist', 'Linux master', 'Kubernetes guru'],
      },
      githubCalendar: {
        header: 'contributions',
        subtext: 'github calendar heatmap'
      },
      blog: {
        header: 'blog',
        subtext: 'i try to write once in a while. let me know your thoughts in comments or mail@karngyan.com'
      },
      recentBlog: {
        header: 'recent blogs',
        subtext: 'it takes a lot of time to write man'
      },
      uses: {
        header: 'uses',
        subtext: 'Some codestats.net stats about my coding'
      },
      projects: {
        header: 'projects',
        subtext: 'this page lists some of my personal and work projects. every project has some story, click on the title to read'
      }
    }
  }
}
