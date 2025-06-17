// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-inference-time-scaling-with-verifiers-democratizing-ai-reasoning",
        
          title: "Inference-Time Scaling with Verifiers: Democratizing AI Reasoning",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/inference-time-scaling-with-verifiers/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-monte-carlo-tree-diffusion-for-system-2-planning-is-released-on-arxiv",
          title: 'Our paper Monte Carlo Tree Diffusion for System 2 Planning is released on...',
          description: "",
          section: "News",},{id: "news-our-paper-monte-carlo-tree-diffusion-for-system-2-planning-is-accepted-in-icml-2025-as-a-spotlight-top-2-5-of-all-submissions",
          title: 'Our paper Monte Carlo Tree Diffusion for System 2 Planning is accepted in...',
          description: "",
          section: "News",},{id: "news-our-paper-adaptive-cyclic-diffusion-for-inference-scaling-is-released-on-arxiv",
          title: 'Our paper Adaptive Cyclic Diffusion for Inference Scaling is released on Arxiv!',
          description: "",
          section: "News",},{id: "news-our-paper-fast-monte-carlo-tree-diffusion-100x-speedup-via-parallel-sparse-planning-is-released-on-arxiv",
          title: 'Our paper Fast Monte Carlo Tree Diffusion: 100x Speedup via Parallel Sparse Planning...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%69%6C@%6A%61%65%73%69%6B%79%6F%6F%6E.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jaesik-yoon-809726123", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qboyyIAAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/jaesikyoon_", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
