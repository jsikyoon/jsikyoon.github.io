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
          section: "News",},{id: "news-our-code-for-mctd-and-fast-mctd-is-released-and-you-can-find-it-here",
          title: 'Our code for MCTD and Fast-MCTD is released, and you can find it...',
          description: "",
          section: "News",},{id: "news-our-three-papers-are-accepted-in-neurips-2025-and-two-of-them-are-accepted-as-spotlights-top-3-2-of-submissions",
          title: 'Our three papers are accepted in NeurIPS 2025 and two of them are...',
          description: "",
          section: "News",},{id: "news-our-paper-loopholing-discrete-diffusion-deterministic-bypass-of-the-sampling-wall-is-released-on-arxiv",
          title: 'Our paper Loopholing Discrete Diffusion: Deterministic Bypass of the Sampling Wall is released...',
          description: "",
          section: "News",},{id: "news-our-paper-compositional-monte-carlo-tree-diffusion-for-extendable-planning-is-released-on-arxiv",
          title: 'Our paper Compositional Monte Carlo Tree Diffusion for Extendable Planning is released on...',
          description: "",
          section: "News",},{id: "news-our-paper-loopholing-discrete-diffusion-deterministic-bypass-of-the-sampling-wall-is-accepted-to-iclr-2026",
          title: 'Our paper Loopholing Discrete Diffusion: Deterministic Bypass of the Sampling Wall is accepted...',
          description: "",
          section: "News",},{id: "projects-compositional-monte-carlo-tree-diffusion-for-extendable-planning",
          title: 'Compositional Monte Carlo Tree Diffusion for Extendable Planning',
          description: "A novel approach to extend the capabilities of Monte Carlo Tree Diffusion beyond trained trajectory lengths",
          section: "Projects",handler: () => {
              window.location.href = "/projects/c-mctd/";
            },},{id: "projects-fast-monte-carlo-tree-diffusion-100x-speedup-via-parallel-sparse-planning",
          title: 'Fast Monte Carlo Tree Diffusion: 100x Speedup via Parallel Sparse Planning',
          description: "A novel approach to optimize the efficiency of Monte Carlo Tree Diffusion",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fast-mctd/";
            },},{id: "projects-monte-carlo-tree-diffusion-for-system-2-planning",
          title: 'Monte Carlo Tree Diffusion for System 2 Planning',
          description: "A novel approach blending Monte Carlo Tree Search and Diffusion Models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mctd/";
            },},{
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
