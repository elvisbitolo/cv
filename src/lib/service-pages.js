export const SITE_URL = "https://elvis-bitolo.vercel.app";

/*
 * Long-tail service landing pages.
 *
 * Each entry drives /services/[slug]: unique title, meta description,
 * on-page copy, FAQ (FAQPage schema) and internal links aimed at a
 * specific search intent around web development in Kenya.
 */
export const servicePages = [
  {
    slug: "freelance-web-developer-nairobi",
    label: "Freelance Web Developer",
    eyebrow: "Freelance Web Development",
    h1: "Freelance Web Developer in Nairobi, Kenya",
    metaTitle:
      "Freelance Web Developer in Nairobi, Kenya | Elvis Bitolo",
    metaDescription:
      "Hire a freelance web developer in Nairobi, Kenya for business websites, web apps and M-Pesa integration. Fast delivery, clear pricing and a free first quote.",
    serviceType: "Freelance web development",
    intro:
      "I am a freelance web developer based in Nairobi, Kenya, building fast, modern websites and web applications for businesses, schools, NGOs and campaigns. As a freelancer you work directly with the person writing the code — no account managers, no handovers, and no inflated agency pricing.",
    highlights: [
      "Direct communication with the developer building your site",
      "Clear, itemised quotes before any work starts",
      "Mobile-first, fast-loading websites built to rank on Google",
      "Delivery, deployment and post-launch support handled end to end"
    ],
    sections: [
      {
        heading: "Why hire a freelancer instead of an agency",
        body:
          "Agencies add layers of account management, and their costs reflect that. As a freelance web developer I handle the design, development, deployment and SEO myself, so your budget goes into the actual product. You get a single point of contact who understands every part of the build and can respond quickly to changes.",
        points: [
          "Lower cost than an agency for the same scope",
          "Faster turnaround with fewer approval layers",
          "One person accountable from first call to launch"
        ]
      },
      {
        heading: "What I build for freelance clients",
        body:
          "Most of my work falls into business and organization websites, full-stack web applications, and campaign or community platforms. If your project needs user accounts, dashboards, chat or payments, I build those too — using React, Next.js and Firebase or PostgreSQL.",
        points: [
          "Business, school, CBO and NGO websites",
          "Full-stack web apps with logins and dashboards",
          "M-Pesa donations and payments via Safaricom Daraja",
          "Landing pages built for SEO and conversions"
        ]
      },
      {
        heading: "Working remotely across Kenya and beyond",
        body:
          "The work is fully remote. I have delivered for clients in Nairobi and communicate over email, WhatsApp or calls. Whether you are in Kenya, elsewhere in East Africa or overseas, the process is the same: a short brief, a clear quote, progress previews, then launch.",
      }
    ],
    faqs: [
      {
        question: "How much does a freelance web developer charge in Kenya?",
        answer:
          "It depends on scope. A focused business website costs less than a custom web application with accounts, payments and dashboards. Send a short description of what you need and you will get a clear, itemised quote before any work starts — the first consultation is free."
      },
      {
        question: "Can you work with clients outside Nairobi?",
        answer:
          "Yes. I work remotely with clients across Kenya and internationally, communicating over email, WhatsApp or calls. Time zones are not a blocker."
      },
      {
        question: "Do you offer support after the website launches?",
        answer:
          "Yes. Every project includes launch checks and a handover so you can manage day-to-day content yourself. Ongoing maintenance and improvements are available if you want them."
      }
    ],
    related: [
      "nextjs-developer-nairobi",
      "full-stack-developer-nairobi",
      "mpesa-integration-kenya"
    ]
  },
  {
    slug: "nextjs-developer-nairobi",
    label: "Next.js Developer",
    eyebrow: "Next.js Development",
    h1: "Next.js Developer in Nairobi, Kenya",
    metaTitle: "Next.js Developer in Nairobi, Kenya | Elvis Bitolo",
    metaDescription:
      "Hire a Next.js developer in Nairobi, Kenya for fast, SEO-friendly websites and web apps. React, Next.js, Firebase and Vercel deployment. Free quote.",
    serviceType: "Next.js web development",
    intro:
      "I build websites and web applications with Next.js and React, deployed on Vercel for global speed and reliability. If you want a fast, modern site that search engines can crawl easily and users actually enjoy, Next.js is one of the best tools for the job — and I use it on every production project.",
    highlights: [
      "Next.js App Router with React server components",
      "Server-side rendering and static generation for SEO",
      "Image, font and bundle optimisation out of the box",
      "Zero-config deployment on Vercel with preview links"
    ],
    sections: [
      {
        heading: "Why Next.js for your website",
        body:
          "Next.js renders pages on the server and can pre-build them as static HTML, which means faster load times and pages that search engines read without running JavaScript. For businesses competing in Kenya, that combination of speed and SEO is a real advantage over slow, template-built sites.",
        points: [
          "Faster first paint and better Core Web Vitals",
          "Server-rendered HTML that Google can index reliably",
          "Built-in routing, metadata and image optimisation"
        ]
      },
      {
        heading: "What I build with Next.js",
        body:
          "I use Next.js for marketing sites, blogs, dashboards and full-stack apps. The App Router lets me mix static pages for speed with dynamic server-rendered pages where content changes or lives in a database.",
        points: [
          "Business and organization websites",
          "Content sites and blogs with easy editing",
          "Full-stack apps with API routes and databases",
          "Campaign and community platforms"
        ]
      },
      {
        heading: "Next.js and technical SEO",
        body:
          "Because Next.js can pre-render pages and generate metadata on the server, it is an excellent fit for SEO. I configure per-page titles and descriptions, structured data, sitemaps, robots rules and canonical URLs so every page is eligible to rank.",
        points: [
          "Per-page metadata and Open Graph tags",
          "JSON-LD structured data for rich results",
          "Generated sitemap and robots.txt",
          "Fast, mobile-friendly, accessible layouts"
        ]
      }
    ],
    faqs: [
      {
        question: "Do you use the Next.js App Router or Pages Router?",
        answer:
          "I build with the App Router, which is the current generation of Next.js. It supports React server components, streaming and the file-based metadata system I use for SEO."
      },
      {
        question: "Can you convert my existing website to Next.js?",
        answer:
          "Yes. I can rebuild an existing site on Next.js while preserving your content and URLs, and improve speed and SEO in the process. Send me the link to your current site for an assessment."
      },
      {
        question: "Where will my Next.js site be hosted?",
        answer:
          "Usually Vercel, which is built by the makers of Next.js. It gives fast global hosting, automatic HTTPS and preview deployments. Other platforms are possible if you prefer."
      }
    ],
    related: [
      "react-developer-kenya",
      "full-stack-developer-nairobi",
      "freelance-web-developer-nairobi"
    ]
  },
  {
    slug: "react-developer-kenya",
    label: "React Developer",
    eyebrow: "React Development",
    h1: "React Developer in Kenya",
    metaTitle: "React Developer in Kenya | Elvis Bitolo",
    metaDescription:
      "Hire a React developer in Kenya for interactive, high-performance web applications. React, Redux, Next.js and Tailwind CSS. Based in Nairobi, working remotely.",
    serviceType: "React web development",
    intro:
      "I build interfaces with React, the JavaScript library behind many of the web apps people use every day. From single-page marketing sites to complex dashboards, I use React to create responsive, interactive experiences that stay fast as they grow.",
    highlights: [
      "Component-based React interfaces that scale",
      "State management with hooks and Redux",
      "Responsive, accessible UI with Tailwind CSS",
      "Integration with REST APIs and databases"
    ],
    sections: [
      {
        heading: "Why React",
        body:
          "React lets me break a product into reusable components, which keeps the codebase maintainable and makes new features faster to build. It is also one of the most in-demand skills in Kenya's tech market, which means your site is built on technology other developers can support in future.",
        points: [
          "Reusable components for consistent UI",
          "Interactive features without full page reloads",
          "A large ecosystem and long-term support"
        ]
      },
      {
        heading: "What I build with React",
        body:
          "React is my tool of choice for anything interactive: dashboards, chat, forms, filters, tables and real-time interfaces. Combined with Next.js it also powers fully server-rendered, SEO-friendly websites.",
        points: [
          "Web apps with authentication and dashboards",
          "Chat, job boards, directories and live data",
          "Marketing sites using React with Next.js",
          "Admin panels for managing content"
        ]
      },
      {
        heading: "Fast, mobile-first React interfaces",
        body:
          "Most visitors in Kenya browse on mobile, often over mobile data. Every React interface I build is designed mobile-first, kept lean, and tested on real devices so it feels quick even on slower connections.",
      }
    ],
    faqs: [
      {
        question: "What is the difference between React and Next.js?",
        answer:
          "React is the UI library for building components. Next.js is a framework built on top of React that adds routing, server rendering and SEO features. For websites that need to rank, I usually use React together with Next.js."
      },
      {
        question: "Do you use Redux for state management?",
        answer:
          "I use React hooks for most state, and Redux where an application genuinely benefits from centralised state — for example complex apps with many shared pieces of data."
      },
      {
        question: "Can you work on an existing React codebase?",
        answer:
          "Yes. I can join an existing React project, fix bugs, add features or refactor and modernise the code. Share access to the repository or a description of the stack to get started."
      }
    ],
    related: [
      "nextjs-developer-nairobi",
      "full-stack-developer-nairobi",
      "freelance-web-developer-nairobi"
    ]
  },
  {
    slug: "full-stack-developer-nairobi",
    label: "Full-Stack Developer",
    eyebrow: "Full-Stack Development",
    h1: "Full-Stack Developer in Nairobi, Kenya",
    metaTitle:
      "Full-Stack Developer in Nairobi, Kenya | Elvis Bitolo",
    metaDescription:
      "Hire a full-stack developer in Nairobi, Kenya for web apps with frontend, backend, databases and payments. React, Next.js, Firebase and PostgreSQL.",
    serviceType: "Full-stack web development",
    intro:
      "As a full-stack developer I build the whole product — the interface users see and the servers, databases and logic behind it. That means one person can take a web application from idea to live, without stitching together separate frontend and backend specialists.",
    highlights: [
      "Frontend with React, Next.js and Tailwind CSS",
      "Backend with Node.js, API routes and Firebase",
      "Databases including Firestore, PostgreSQL and MongoDB",
      "Authentication, payments and third-party integrations"
    ],
    sections: [
      {
        heading: "Frontend and backend in one project",
        body:
          "A web application is more than a pretty page — it needs data, accounts, security and logic. As a full-stack developer I design the database, build the APIs and create the interface, so the parts fit together cleanly and there are no gaps between teams.",
        points: [
          "Database design and data modelling",
          "APIs and server-side business logic",
          "User authentication and role-based access",
          "Responsive frontend that connects to it all"
        ]
      },
      {
        heading: "The full-stack projects I have built",
        body:
          "My portfolio includes a community platform with neighbourhood chat, a local job board, a business directory and a live map, as well as client websites with M-Pesa donations. These projects cover the full stack from UI to database to deployment.",
        points: [
          "Githogoro community app with chat and job board",
          "Brilliant Angels Academy school and CBO website",
          "Austine Omondi MCA 2027 campaign platform",
          "Developer portfolio with Firebase backend"
        ]
      },
      {
        heading: "A stack chosen for speed and maintenance",
        body:
          "I use Next.js and React on the frontend, Node.js with Firebase or PostgreSQL on the backend, and deploy on Vercel. The stack is chosen so your product is fast to load, simple to maintain and easy for another developer to pick up later.",
      }
    ],
    faqs: [
      {
        question: "What does a full-stack developer do?",
        answer:
          "A full-stack developer builds both the frontend users interact with and the backend that stores data and runs business logic. That includes databases, APIs, authentication and deployment — which is what I do for clients in Kenya."
      },
      {
        question: "Which database do you use?",
        answer:
          "It depends on the project. Firebase Firestore is excellent for real-time apps, while PostgreSQL suits structured, relational data. I also work with MongoDB, SQLite and Prisma ORM."
      },
      {
        question: "Can you build a web app from an idea I have?",
        answer:
          "Yes. Tell me the problem you want to solve and who it is for. I will help shape the scope into a realistic first version, quote it, and build and launch it."
      }
    ],
    related: [
      "nextjs-developer-nairobi",
      "react-developer-kenya",
      "mpesa-integration-kenya"
    ]
  },
  {
    slug: "mpesa-integration-kenya",
    label: "M-Pesa Integration",
    eyebrow: "M-Pesa Integration",
    h1: "M-Pesa Integration Developer in Kenya",
    metaTitle: "M-Pesa Integration Developer in Kenya | Elvis Bitolo",
    metaDescription:
      "M-Pesa integration for Kenyan websites and apps. Safaricom Daraja STK Push payments and donations, tested in sandbox and launched live. Get a free quote.",
    serviceType: "M-Pesa payment integration",
    intro:
      "If your customers pay by phone — and in Kenya, they do — your website should let them pay on their phone too. I integrate Safaricom M-Pesa through the Daraja API so businesses can collect payments and organizations can accept donations directly on their site.",
    highlights: [
      "Safaricom Daraja API integration (STK Push)",
      "Checkout and one-off donation flows",
      "Full testing in the Safaricom sandbox before launch",
      "Callback handling and payment confirmation"
    ],
    sections: [
      {
        heading: "How M-Pesa integration works",
        body:
          "Using the Daraja API, your site sends a payment request to a customer's phone. They enter their M-Pesa PIN to confirm, and Safaricom notifies your site that the payment succeeded. The customer sees a confirmation, and your records are updated automatically.",
        points: [
          "Customer enters amount and phone number on your site",
          "An STK Push prompt appears on their phone",
          "They confirm with their M-Pesa PIN",
          "Your system receives and records the confirmation"
        ]
      },
      {
        heading: "Payments and donations",
        body:
          "The same integration powers two common use cases: e-commerce checkout for businesses, and donation buttons for schools, CBOs, NGOs and campaigns. I have used it on live donation pages, with clear amounts, confirmations and records.",
        points: [
          "One-off payments for products or services",
          "Recurring or goal-based donation pages",
          "Clear success and failure messages to the payer",
          "A record you can reconcile with M-Pesa statements"
        ]
      },
      {
        heading: "Tested in sandbox, launched with confidence",
        body:
          "M-Pesa integrations involve real money, so they must be tested carefully. I build and run the full flow in Safaricom's sandbox environment first, then switch to production credentials and verify with a live transaction before handover.",
      }
    ],
    faqs: [
      {
        question: "What do I need to accept M-Pesa on my website?",
        answer:
          "You need an M-Pesa paybill or till number and Daraja API credentials from Safaricom. I handle the technical integration on the site; you handle the Safaricom business account setup, and I can guide you through it."
      },
      {
        question: "Can I accept donations as well as payments?",
        answer:
          "Yes. The same Daraja integration supports both product/service payments and donation flows. I have built donation pages for a school CBO and a political campaign."
      },
      {
        question: "Is it safe to integrate M-Pesa on a website?",
        answer:
          "Yes, when implemented correctly. Credentials are kept server-side and never exposed in the browser, requests are validated, and the flow is thoroughly tested in the sandbox before going live."
      }
    ],
    related: [
      "full-stack-developer-nairobi",
      "cbo-ngo-website-kenya",
      "campaign-website-kenya"
    ]
  },
  {
    slug: "school-website-kenya",
    label: "School Website Design",
    eyebrow: "School Websites",
    h1: "School Website Design in Kenya",
    metaTitle: "School Website Design in Kenya | Elvis Bitolo",
    metaDescription:
      "Professional school website design in Kenya. Multi-page sites with programs, admissions, news, gallery, WhatsApp contact and M-Pesa fee or donation payments.",
    serviceType: "School website design and development",
    intro:
      "A school website is often the first place parents look before they visit or call. I design and build clear, trustworthy school websites in Kenya that present your programs, staff and achievements — and make it easy for parents to enquire, apply or donate.",
    highlights: [
      "Multi-page sites: programs, admissions, staff, news, gallery",
      "Mobile-first design for parents browsing on phones",
      "WhatsApp click-to-contact and enquiry forms",
      "Optional M-Pesa fee or donation payments"
    ],
    sections: [
      {
        heading: "What a good school website includes",
        body:
          "Parents want to quickly understand what your school offers, where it is, and how to reach you. I structure school sites around those questions, so information is easy to find and the school looks credible and well organised.",
        points: [
          "Home page with a clear identity and call to action",
          "Programs and curriculum explained simply",
          "Admissions information and enquiry forms",
          "News, events and a photo gallery",
          "Contact details, map and WhatsApp link"
        ]
      },
      {
        heading: "Built for Kenyan parents on mobile",
        body:
          "Most parents will visit your site on a phone, often over mobile data. Every school site I build is mobile-first and lightweight, so pages open quickly and everything is readable without pinching and zooming.",
      },
      {
        heading: "Payments, donations and administration",
        body:
          "For schools and the CBOs that support them, I can add M-Pesa so parents can pay fees and well-wishers can donate. Content is simple to update, so your office can post news and photos without a developer.",
        points: [
          "M-Pesa fee payments and donations",
          "Easy-to-update news and gallery",
          "SEO so parents searching for schools find you"
        ]
      }
    ],
    faqs: [
      {
        question: "How much does a school website cost in Kenya?",
        answer:
          "It depends on the number of pages and features such as M-Pesa payments. A standard multi-page school website is more affordable than a custom school management system. Send your requirements for a clear, itemised quote."
      },
      {
        question: "Can staff update the website themselves?",
        answer:
          "Yes. I build school sites so non-technical staff can add news, events and photos without touching code, and I provide a short handover so your team is confident using it."
      },
      {
        question: "Can you add online fee payment?",
        answer:
          "Yes. I integrate M-Pesa so parents can pay fees from their phones, with confirmations sent to both the payer and the school. This uses the same Safaricom Daraja integration I use for other Kenyan clients."
      }
    ],
    related: [
      "cbo-ngo-website-kenya",
      "mpesa-integration-kenya",
      "freelance-web-developer-nairobi"
    ]
  },
  {
    slug: "cbo-ngo-website-kenya",
    label: "CBO & NGO Websites",
    eyebrow: "CBO & NGO Websites",
    h1: "CBO and NGO Website Design in Kenya",
    metaTitle: "CBO & NGO Website Design in Kenya | Elvis Bitolo",
    metaDescription:
      "Websites for CBOs, NGOs and community organizations in Kenya. Showcase your programs and impact, collect M-Pesa donations and reach donors and volunteers online.",
    serviceType: "CBO and NGO website design",
    intro:
      "For a community-based organization or NGO, your website is how donors, partners and beneficiaries find and trust you. I build clear, credible websites for Kenyan CBOs and NGOs that explain your mission, show your impact and make it easy to donate or get involved.",
    highlights: [
      "Programs, impact and stories presented clearly",
      "M-Pesa donation pages and volunteer sign-up",
      "News, gallery and partner sections",
      "SEO so donors and communities can find you"
    ],
    sections: [
      {
        heading: "Telling your story with credibility",
        body:
          "Donors and partners want to see what you do and the difference you make. I help structure CBO and NGO sites around your mission, programs and results, using plain language and real stories rather than jargon.",
        points: [
          "Mission, vision and background pages",
          "Programs and the communities they serve",
          "Impact numbers and success stories",
          "Team, partners and transparency information"
        ]
      },
      {
        heading: "Making it easy to support you",
        body:
          "A supporter who wants to help should not have to search for how. I build clear donation and volunteer flows, including M-Pesa donations, so people can give or get involved in a few taps.",
        points: [
          "M-Pesa donation pages with confirmations",
          "Volunteer and contact forms",
          "Newsletter or updates sign-up",
          "Contact details and location on every page"
        ]
      },
      {
        heading: "Accessible to the communities you serve",
        body:
          "Your audience may be on low-end phones and slow connections. I build lightweight, mobile-first sites that load quickly and remain readable and usable for everyone, including people using assistive technology.",
      }
    ],
    faqs: [
      {
        question: "Do you offer discounted rates for CBOs and NGOs?",
        answer:
          "I try to keep CBO and NGO projects affordable and will scope a version that fits your budget. Share your goals and funding situation and we can agree on a realistic scope."
      },
      {
        question: "Can supporters donate through the website?",
        answer:
          "Yes. I integrate M-Pesa donation flows so supporters can give from their phones, with confirmations to both the donor and your organization."
      },
      {
        question: "Can our team update the site without a developer?",
        answer:
          "Yes. Content such as news, events, gallery and program updates is designed to be editable by your team, with a handover session to get everyone comfortable."
      }
    ],
    related: [
      "school-website-kenya",
      "mpesa-integration-kenya",
      "freelance-web-developer-nairobi"
    ]
  },
  {
    slug: "campaign-website-kenya",
    label: "Campaign Websites",
    eyebrow: "Campaign Websites",
    h1: "Campaign Website Development in Kenya",
    metaTitle: "Campaign Website Development in Kenya | Elvis Bitolo",
    metaDescription:
      "Political and community campaign websites in Kenya. Manifesto, events, countdown, volunteer sign-up and M-Pesa donations. Built to engage supporters online.",
    serviceType: "Campaign website development",
    intro:
      "A campaign website is a campaign tool, not a brochure. I build political and community campaign websites in Kenya that present your message clearly, capture supporters and volunteers, and make it easy for people to donate and share.",
    highlights: [
      "Manifesto, biography and policy pages",
      "Events, news and election countdown",
      "Volunteer sign-up and supporter capture",
      "M-Pesa donation support"
    ],
    sections: [
      {
        heading: "Presenting the candidate and the message",
        body:
          "Voters look for a clear message and a reason to trust a candidate. I structure campaign sites around who you are, what you stand for and why it matters, with a clean, confident design that works on every phone.",
        points: [
          "Biography, background and values",
          "Manifesto and key policies, easy to scan",
          "Trust signals and community endorsements"
        ]
      },
      {
        heading: "Organising events and volunteers",
        body:
          "Campaigns run on people and momentum. I build sections for events and rallies, and simple forms to capture supporters and volunteers so your team can follow up and organise.",
        points: [
          "Events and rally listings",
          "Volunteer and supporter sign-up forms",
          "News and update posts",
          "Election countdown to build urgency"
        ]
      },
      {
        heading: "Fundraising with M-Pesa",
        body:
          "Donations should take seconds, not minutes. I integrate M-Pesa so supporters can contribute from their phones, with confirmations to both the supporter and the campaign.",
      }
    ],
    faqs: [
      {
        question: "How fast can a campaign website go live?",
        answer:
          "A focused campaign site can go live quickly once your content — biography, manifesto and photos — is ready. Timelines are tight on campaigns, so I prioritise speed without cutting quality."
      },
      {
        question: "Can supporters donate via M-Pesa on the site?",
        answer:
          "Yes. I integrate M-Pesa donation flows so supporters can give from their phones, with confirmations to the supporter and the campaign team."
      },
      {
        question: "Can the site show an election countdown and events?",
        answer:
          "Yes. Site features include an election countdown, events listings, news posts and volunteer sign-up, all updatable by your team."
      }
    ],
    related: [
      "full-stack-developer-nairobi",
      "mpesa-integration-kenya",
      "freelance-web-developer-nairobi"
    ]
  }
];

export function getServicePage(slug) {
  return servicePages.find((page) => page.slug === slug);
}

export function getRelatedServicePages(slug) {
  const page = getServicePage(slug);
  if (!page) return [];
  return page.related
    .map((relatedSlug) => getServicePage(relatedSlug))
    .filter(Boolean);
}
