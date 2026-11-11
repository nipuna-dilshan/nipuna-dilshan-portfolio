/**
 * Portfolio Projects & Case Studies Data
 *
 * Asset & Configuration Guide:
 * - Add real screenshots to `public/projects/` and set `image` / `gallery` paths below.
 * - Configure `liveUrl` and `githubUrl` when ready; links are hidden while null.
 * - Add verified technologies inside `techGroups` once confirmed for each project.
 */

export const PROJECTS = [
  {
    id: '01',
    slug: 'lead-follow-up-management',
    status: 'LIVE PROJECT',
    category: 'Software System',
    isConcept: false,
    title: 'Lead Follow-up Management System',
    headline: 'Never Lose Track of a Lead Again.',
    shortDescription:
      'A centralized lead management system designed to organize prospects, schedule follow-ups, and track pipeline progress.',
    cardProblem:
      'Incoming leads and follow-up dates easily get missed across scattered chats and spreadsheets.',
    cardSolution:
      'Unifies lead profiles, pipeline status, and follow-up scheduling into one clear workspace.',
    problem:
      'Businesses often struggle to manage incoming leads, remember follow-up dates, and keep track of customer interactions when information is scattered across spreadsheets, messages, and disconnected tools.',
    solution:
      'A centralized management platform that helps organize leads, monitor their current pipeline status, schedule and manage follow-up activities, and give teams a clearer operational view of every prospect.',
    // Set to e.g. '/projects/lead-followup-dashboard.png' once real asset is placed in public/projects/
    image: null,
    imageAlt: 'Lead Follow-up Management System dashboard interface',
    requiredAssetHint: 'public/projects/lead-followup-dashboard.png',
    gallery: [],
    // Set actual URLs when available; null links remain hidden in UI
    liveUrl: null,
    githubUrl: null,
    // Keep domain focus tags until the exact technology stack is confirmed
    cardTags: ['Lead Organization', 'Pipeline Tracking', 'Follow-up Scheduling'],
    challengeDetails: [
      'Incoming prospect inquiries frequently get buried across chat threads, spreadsheets, and personal notes, leading to delayed responses.',
      'Without structured follow-up reminders and status stages, sales teams risk forgetting warm opportunities at critical decision points.',
      'Fragmented customer interaction records make it difficult to see who contacted a lead last and what the next concrete action should be.',
    ],
    solutionDetails: [
      'Unifies incoming prospects into one structured workspace where each lead has a clear status, assigned context, and scheduled next step.',
      'Keeps follow-up dates visible and actionable so teams can prioritize daily outreach instead of manually searching through scattered lists.',
      'Organizes interaction history alongside lead profiles, giving a clear overview of the active sales pipeline.',
    ],
    featuresHeading: 'Core System Capabilities',
    features: [
      {
        title: 'Centralized Lead Management',
        description:
          'Stores prospect profiles and inquiry details in a single organized repository rather than scattered spreadsheets.',
      },
      {
        title: 'Lead Status Tracking',
        description:
          'Provides structured pipeline stages so teams can immediately see where every prospect stands.',
      },
      {
        title: 'Follow-up Scheduling',
        description:
          'Tracks upcoming follow-up dates and pending actions to reduce missed outreach opportunities.',
      },
      {
        title: 'Customer Interaction History',
        description:
          'Maintains context around past conversations and updates so follow-ups stay informed and consistent.',
      },
      {
        title: 'Pipeline Overview & Reporting',
        description:
          'Surfaces active leads and follow-up workloads through a clearer operational overview.',
      },
      {
        title: 'Search, Filtering & Organization',
        description:
          'Makes it fast to locate specific leads or filter prospects by stage, priority, or status.',
      },
    ],
    // Populate with verified stack groups once confirmed
    techGroups: [],
    developmentApproach:
      'Designed around day-to-day operational clarity first—prioritizing fast lead lookup, unambiguous status transitions, and low-friction follow-up logging so teams actually use the system consistently rather than reverting to ad-hoc spreadsheets.',
    businessValue: [
      'Reduces the risk of losing warm leads due to forgotten follow-ups or disorganized notes.',
      'Gives business owners and teams an immediate, single-screen overview of active pipeline opportunities.',
      'Creates repeatable accountability around lead response times and ongoing prospect communication.',
    ],
  },
  {
    id: '02',
    slug: 'business-management-platform',
    status: 'CONCEPT / DEMO',
    category: 'Concept Product Architecture',
    isConcept: true,
    title: 'Business Management Platform',
    headline: 'Bring Your Business Operations Together.',
    shortDescription:
      'A concept business platform designed to simplify everyday operations, organize records, and improve activity visibility.',
    cardProblem:
      'Teams lose time piecing together updates across disconnected spreadsheets and separate tools.',
    cardSolution:
      'Brings customer records, daily operations, and reporting views into one structured interface.',
    problem:
      'Growing businesses frequently rely on disconnected tools for customer records, daily task tracking, and operational visibility, forcing owners to piece together updates manually.',
    solution:
      'A unified operational concept workspace bringing customer records, activity oversight, and structured reporting views together under one consistent interface.',
    image: null,
    imageAlt: 'Business Management Platform concept overview',
    requiredAssetHint: null,
    gallery: [],
    liveUrl: null,
    githubUrl: null,
    cardTags: ['Concept Architecture', 'Operations Overview', 'Customer Records'],
    challengeDetails: [
      'Switching between separate customer lists, spreadsheets, and reporting tools slows down everyday decision-making.',
      'Lack of a unified operational overview makes it harder for teams to spot bottlenecks or track active work cleanly.',
    ],
    solutionDetails: [
      'Models an integrated operational layout where business overview metrics, customer records, and reporting views share one predictable navigation structure.',
      'Focuses on clean information hierarchy so managers can inspect key activities without navigating cluttered enterprise menus.',
    ],
    featuresHeading: 'Concept Scope & Demonstrated Areas',
    features: [
      {
        title: 'Business Operations Overview',
        description:
          'Concept workspace organizing day-to-day operational status and priority activities in one place.',
      },
      {
        title: 'Customer Management View',
        description:
          'Structured customer directory concept linking client profiles with active operational context.',
      },
      {
        title: 'Activity Tracking & Coordination',
        description:
          'Clean workflow views intended to keep team responsibilities and status updates transparent.',
      },
      {
        title: 'Structured Reporting Layout',
        description:
          'Editorial reporting interface concept focused on clear operational summaries.',
      },
    ],
    techGroups: [],
    developmentApproach:
      'Structured as a concept exploration focused on reducing interface noise in business software—organizing high-density operational data with clear typographic hierarchy and modular card boundaries.',
    businessValue: [
      'Intended to minimize context switching across separate internal spreadsheets and tools.',
      'Designed to improve operational visibility for small and growing teams.',
      'Establishes a scalable UI blueprint adaptable to custom company workflows.',
    ],
  },
  {
    id: '03',
    slug: 'ai-learning-platform',
    status: 'CONCEPT / DEMO',
    category: 'Concept EdTech Platform',
    isConcept: true,
    title: 'AI-Powered Learning Platform',
    headline: 'Make Learning More Connected.',
    shortDescription:
      'A concept learning platform designed to simplify course delivery, organize study materials, and support learner progress.',
    cardProblem:
      'Scattered course modules and rigid menus leave students disconnected from steady learning momentum.',
    cardSolution:
      'Structures courses, organized materials, and progress checkpoints into a calm student flow.',
    problem:
      'Traditional learning portals often scatter course modules, study materials, and progress updates across rigid menus, leaving students disconnected from clear study momentum.',
    solution:
      'A calm, connected learning interface concept that structures courses, study resources, and student progress into an intuitive, distraction-free flow.',
    image: null,
    imageAlt: 'AI-Powered Learning Platform concept interface',
    requiredAssetHint: null,
    gallery: [],
    liveUrl: null,
    githubUrl: null,
    cardTags: ['Concept Architecture', 'Course Delivery', 'Student Experience'],
    challengeDetails: [
      'Students often struggle to stay oriented across fragmented modules, downloadable files, and scattered progress checkpoints.',
      'Educators need a straightforward structure for organizing course materials without wrestling with overly complex LMS interfaces.',
    ],
    solutionDetails: [
      'Proposes a unified student dashboard pairing clear course progression with well-organized lesson materials.',
      'Designed around structured study paths where learning resources and progress tracking remain immediately visible.',
    ],
    featuresHeading: 'Concept Scope & Demonstrated Areas',
    features: [
      {
        title: 'Course Management Structure',
        description:
          'Modular layout concept for organizing courses into clear lessons and structured milestones.',
      },
      {
        title: 'Student Learning Dashboard',
        description:
          'Focused student home view highlighting active courses, upcoming lessons, and recent materials.',
      },
      {
        title: 'Organized Learning Materials',
        description:
          'Clean resource indexing so readings, guides, and lesson notes remain easy to revisit.',
      },
      {
        title: 'Progress Tracking',
        description:
          'Clear visual completion states intended to help learners maintain steady momentum.',
      },
    ],
    techGroups: [],
    developmentApproach:
      'Explored as a concept platform prioritizing learner clarity and calm pacing—stripping away cluttered LMS chrome so course content and student progress take center stage.',
    businessValue: [
      'Intended to make course navigation more intuitive for both students and instructors.',
      'Designed to keep study materials structured and accessible in one connected workspace.',
      'Provides a clean product foundation for modern digital course delivery.',
    ],
  },
];

export function getProjectBySlug(slug) {
  return PROJECTS.find((project) => project.slug === slug) || null;
}

export function getAdjacentProjects(slug) {
  const index = PROJECTS.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return { prevProject: null, nextProject: null };
  }

  return {
    prevProject: index > 0 ? PROJECTS[index - 1] : null,
    nextProject: index < PROJECTS.length - 1 ? PROJECTS[index + 1] : null,
  };
}
