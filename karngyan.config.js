// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'Claudio Canales',
  domain: 'klaudioz.eth', // add without https:// , used in meta tags and share urls
  image: '/images/klaudioz.png',
  email: 'klaudioz@gmail.com',
  googleAnalyticsV4: {
    enabled: false,
    id: ''
  },
  plausibleAnalytics: {
    enabled: true,
    domain: 'klaudioz.eth',
    trackLocalhost: false,
    // leave it empty if plausible is not self hosted
    apiHost: '' // default: https://plausible.io
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: false
  },
  social: {
    github: 'klaudioz',
    linkedin: 'canalesclaudio',
    twitter: 'klaudioz',
    codestats: 'klaudioz' // https://codestats.net make a profile if you dont already have one.
  },
  books: {
    enabled: true,
    url: 'https://klaud10z.notion.site/Readwise-d45fc40a6a7f4bb7bf7197d028066fd5'
  },
  changelog: {
    enabled: true,
    url: 'https://www.polywork.com/klaudioz'
  },
  projects: {
    enabled: true,
  },
  stack: {
    enabled: true,
    meta: [
      {title: 'OS', value: 'macOS Catalina'},
      {title: 'Memory', value: '16 GB 2667 MHz DDR4'},
      {title: 'Keyboard', value: 'Keychron K2 - Gateron Brown Keys'},
      {title: 'Mouse', value: 'Apple Magic Mouse 2'},
      {title: 'Monitor', value: "Samsung 49'' CHG90 QLED Curved"},
      {title: 'Laptop • Processor • Graphics', value: 'MacBook Pro (16-inch, 2019) • 2.6 GHz 6-Core Intel Core i7'},
      {title: 'Cell phone', value: "iPhone SE 128GB"},
      {title: 'Headphones', value: "Sony WH-XB900N"},
      {title: 'Chair', value: "Office Star ProGrid"},
      {title: '', value: ''},
      {title: 'IDE', value: 'VSCode'},
      {title: 'Ethereum development', value: 'NodeJS • Yarn •  Hardhat • Solidity • The Graph'},
      {title: 'Communication', value: 'Slack • Spark • Discord • Telegram • Zoom • Gmail • Circle.so'},
      {title: 'Web browser', value: 'Google Chrome'},
      {title: 'Browser extensions', value: 'Workona • Dark Reader • Grammarly • Metamask'},
      {title: 'Terminal tools', value: 'zsh • git • kubectl • ohmyzsh'},
      {title: 'Zsh plugins', value: 'zplug • zsh-autosuggestions • zsh-syntax-highlighting • powerlevel10k • code-stats-zsh'},
      {title: 'Knowledge management', value: 'Obsidian • Readwise • Notion • 1Writer'},
      {title: 'Bookmark manager', value: 'Raindrop.io'},
      {title: 'Time administration', value: 'Todoist • Things3 • RescueTime'},
      {title: 'Automation', value: 'Bash • Python • Zapier • IFTTT • Shortcuts • Scriptable'},
      {title: 'Kubernetes administration', value: 'Lens'},
      {title: 'Social networking', value: 'LinkedIn • Twitter • Polywork'},
      {title: 'Password management', value: '1Password'},
      {title: 'Learning', value: 'Anki • Twitter • Udemy • Udacity • Coursera • Youtube • Apple Books'},
      {title: 'Hosting', value: 'Firebase • GitHub Pages • Fleek.co • Gumroad'},
      {title: 'Website analytics', value: 'Plausible.io'},
      {title: 'Website monitoring', value: 'Freshping • Pagecrawl'},
      {title: 'Blogging', value: 'Hugo • Hexo • NuxtJS'},
      {title: 'Domain management', value: 'Google Domains • app.ens.domains'},
      {title: 'Chilling', value: 'Netflix • Spotify • Crunchyroll • PPPoker'},
    ]
  },
  blog: {
    enabled: true,
  },
  resume: {
    enabled: true,
    pdfUrl: '/ccanales-resume.pdf',
    pdfdarkUrl: '/ccanales-resume-dark.pdf', // add files in static folder
    docxUrl: '/ccanales-resume.docx'
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
      { name: 'Seegrid', src: '/images/Seegrid.png', url: 'https://www.seegrid.com' },
      { name: 'Venausa', src: '/images/Venausa_banner.png', url: 'https://www.venausa.net' },
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
        home: 'Home',
        blog: 'Blog',
        projects: 'Projects',
        uses: 'Uses',
        resume: 'Resumé',
	      changelog: 'Changelog',
        stack: 'Stack',
        books: 'Books'
      },
      hero: {
        iBlogTech: 'Tech blog',
        haveALook: 'have a look',
        friendlyNeighborhood: 'your friendly',
        description: "I am a passionate technologist and engineer with ten years of experience working for important IT companies. Learning is the leitmotiv of my life, and I possess multiple certifications in the field and a master's degree in CS.",
        words: ['DevOps', 'engineer', 'technologist', 'Linux master', 'Kubernetes gurú'],
      },
      githubCalendar: {
        header: 'Contributions',
        subtext: 'Github calendar heatmap'
      },
      blog: {
        header: 'Blog',
        subtext: 'Let me know your thoughts in comments or klaudioz@gmail.com.'
      },
      recentBlog: {
        header: 'Recent blog entries',
        subtext: 'Trying to write more ..'
      },
      uses: {
        header: 'Uses',
        subtext: 'Some stats about my coding from codestats.net.'
      },
      projects: {
        header: 'Projects',
        subtext: 'Listing some of my personal and work projects.'
      },
      stack: {
        header: 'Stack',
        subtext: "Hardware and software stack I'm using."
      }
    }
  }
}
