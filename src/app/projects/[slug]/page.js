import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  FolderGit2,
  ImageIcon,
  Layers,
} from 'lucide-react';
import {
  PROJECTS,
  getAdjacentProjects,
  getProjectBySlug,
} from '@/data/projects';
import ProjectVisualFrame from '@/components/ProjectVisualFrame';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found — Nipuna Dilshan',
    };
  }

  return {
    title: `${project.title} — Case Study | Nipuna Dilshan`,
    description: project.shortDescription,
  };
}

export default async function ProjectCaseStudyPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prevProject, nextProject } = getAdjacentProjects(slug);
  const hasAnyExternalLink = Boolean(project.liveUrl || project.githubUrl);

  return (
    <div className="min-h-screen bg-[#111315] text-white selection:bg-[#F47745] selection:text-white bg-editorial-grid-dark">
      {/* Top Case Study Navigation Header */}
      <header className="sticky top-0 z-40 border-b border-[#24272D] bg-[#111315]/85 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#C8CBD0] hover:text-white transition-colors group"
          >
            <ArrowLeft
              className="w-4 h-4 text-[#F47745] transition-transform duration-200 group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            <span>Back to Projects</span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-0.5 focus:outline-none"
            aria-label="Nipuna Dilshan - Home"
          >
            <span className="font-display font-extrabold text-lg tracking-tight text-white">
              NIPUNA
            </span>
            <span className="font-display font-extrabold text-lg text-[#F47745]">
              .
            </span>
          </Link>

          <span className="font-mono-tech text-xs text-[#85878C]">
            {project.id} / 0{PROJECTS.length}
          </span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16 sm:space-y-24">
        {/* 01. Project Hero */}
        <section aria-labelledby="case-study-title" className="space-y-8">
          <div className="space-y-5 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono-tech text-xs tracking-[0.14em] uppercase text-[#F47745] font-semibold">
                {project.category}
              </span>
              <span className="text-[#3E434D]" aria-hidden="true">
                /
              </span>
              <span
                className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-md font-mono-tech text-[11px] tracking-[0.12em] uppercase border ${
                  project.isConcept
                    ? 'bg-[#181B20] border-[#2E323A] text-[#9CA0A8]'
                    : 'bg-[#161B19] border-[#253B31] text-[#D1FAE5]'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    project.isConcept ? 'bg-[#85878C]' : 'bg-[#10B981]'
                  }`}
                  aria-hidden="true"
                />
                <span>{project.status}</span>
              </span>
            </div>

            <h1
              id="case-study-title"
              className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.1]"
            >
              {project.title}
            </h1>

            <p className="font-display font-semibold text-lg sm:text-2xl text-[#F47745]">
              {project.headline}
            </p>

            <p className="text-base sm:text-lg text-[#9CA0A8] leading-relaxed font-normal">
              {project.shortDescription}
            </p>
          </div>

          <ProjectVisualFrame project={project} priority />
        </section>

        {/* 02. The Challenge & 03. The Solution */}
        <section
          aria-label="Challenge and Solution"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 pt-4 border-t border-[#24272D]"
        >
          {/* 02. The Challenge */}
          <div className="rounded-2xl bg-[#14171A] border border-[#262930] p-6 sm:p-8 space-y-5">
            <div className="space-y-1.5">
              <span className="font-mono-tech text-[11px] tracking-[0.16em] uppercase text-[#F47745] font-semibold">
                02 // THE CHALLENGE
              </span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                Operational Problem
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#D0D3D9] leading-relaxed">
              {project.problem}
            </p>

            <ul className="space-y-3 pt-2 border-t border-[#22252C]">
              {project.challengeDetails.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-2.5 text-sm text-[#9CA0A8] leading-relaxed"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#F47745] mt-2 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 03. The Solution */}
          <div className="rounded-2xl bg-[#14171A] border border-[#262930] p-6 sm:p-8 space-y-5">
            <div className="space-y-1.5">
              <span className="font-mono-tech text-[11px] tracking-[0.16em] uppercase text-[#F47745] font-semibold">
                03 // THE SOLUTION
              </span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                System Overview
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#D0D3D9] leading-relaxed">
              {project.solution}
            </p>

            <ul className="space-y-3 pt-2 border-t border-[#22252C]">
              {project.solutionDetails.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-2.5 text-sm text-[#9CA0A8] leading-relaxed"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-[#F47745] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 04. Key Features */}
        <section
          aria-labelledby="features-heading"
          className="space-y-8 pt-8 border-t border-[#24272D]"
        >
          <div className="space-y-2">
            <span className="font-mono-tech text-[11px] tracking-[0.16em] uppercase text-[#F47745] font-semibold">
              04 // {project.isConcept ? 'CONCEPT SCOPE' : 'KEY FEATURES'}
            </span>
            <h2
              id="features-heading"
              className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight"
            >
              {project.featuresHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {project.features.map((feature, idx) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-[#14171A] border border-[#262930] p-6 space-y-3"
              >
                <span className="font-mono-tech text-xs text-[#F47745] font-semibold block">
                  0{idx + 1}
                </span>
                <h3 className="font-display font-bold text-lg text-white leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#9CA0A8] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 05. Interface Showcase */}
        <section
          aria-labelledby="showcase-heading"
          className="space-y-8 pt-8 border-t border-[#24272D]"
        >
          <div className="space-y-2">
            <span className="font-mono-tech text-[11px] tracking-[0.16em] uppercase text-[#F47745] font-semibold">
              05 // INTERFACE SHOWCASE
            </span>
            <h2
              id="showcase-heading"
              className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight"
            >
              Application Views
            </h2>
          </div>

          {project.gallery.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((shot) => (
                <figure
                  key={shot.src}
                  className="rounded-2xl border border-[#262930] bg-[#14171A] overflow-hidden"
                >
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={shot.src}
                      alt={shot.alt || project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  {shot.caption && (
                    <figcaption className="px-5 py-3 text-xs font-mono-tech text-[#9CA0A8] border-t border-[#22252C]">
                      {shot.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#2F333B] bg-[#14171A]/70 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-11 h-11 rounded-xl bg-[#1B1E24] border border-[#2C3038] flex items-center justify-center text-[#F47745] shrink-0">
                {project.isConcept ? (
                  <Layers className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <ImageIcon className="w-5 h-5" aria-hidden="true" />
                )}
              </div>
              <div className="space-y-1">
                <p className="font-display font-semibold text-base text-white">
                  {project.isConcept
                    ? 'Concept Demo Visuals Pending'
                    : 'Additional Application Screenshots Pending'}
                </p>
                <p className="text-sm text-[#9CA0A8] leading-relaxed">
                  {project.isConcept
                    ? 'This entry represents a concept/demo architecture rather than a completed client deployment. Real screenshots will be added as interactive views are built.'
                    : 'Additional module screenshots (lead detail drawer, follow-up scheduler, interaction timeline) can be added to src/data/projects.js once exported from the application.'}
                </p>
              </div>
            </div>
          )}
        </section>

        {/* 06. Technology Stack & 07. Development Approach */}
        <section
          aria-label="Technology Stack and Development Approach"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-[#24272D]"
        >
          {/* 06. Technology Stack */}
          <div className="lg:col-span-6 rounded-2xl bg-[#14171A] border border-[#262930] p-6 sm:p-8 space-y-5">
            <div className="space-y-1.5">
              <span className="font-mono-tech text-[11px] tracking-[0.16em] uppercase text-[#F47745] font-semibold">
                06 // TECHNOLOGY STACK
              </span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                Confirmed Stack
              </h2>
            </div>

            {project.techGroups.length > 0 ? (
              <div className="space-y-4">
                {project.techGroups.map((group) => (
                  <div
                    key={group.category}
                    className="pt-3 border-t border-[#22252C] first:border-t-0 first:pt-0"
                  >
                    <h3 className="font-mono-tech text-[11px] uppercase tracking-[0.14em] text-[#85878C] mb-2.5">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-md bg-[#1A1D22] border border-[#2C3038] font-mono-tech text-xs text-[#E5E7EB]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl bg-[#111315] border border-[#24272D] p-5 space-y-2">
                <p className="text-sm font-medium text-[#D0D3D9]">
                  {project.isConcept
                    ? 'Concept-level architecture (stack not finalized)'
                    : 'Verified technology stack pending confirmation'}
                </p>
                <p className="text-xs text-[#85878C] leading-relaxed">
                  {project.isConcept
                    ? 'Because this is a concept/demo case study, specific backend and database selections are kept unpinned until implementation scope is finalized.'
                    : 'To keep this case study strictly accurate, the exact frontend, backend, and database technologies will be listed once confirmed from the application repository.'}
                </p>
              </div>
            )}
          </div>

          {/* 07. Development Approach */}
          <div className="lg:col-span-6 rounded-2xl bg-[#14171A] border border-[#262930] p-6 sm:p-8 space-y-5">
            <div className="space-y-1.5">
              <span className="font-mono-tech text-[11px] tracking-[0.16em] uppercase text-[#F47745] font-semibold">
                07 // DEVELOPMENT APPROACH
              </span>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                Engineering Focus
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#D0D3D9] leading-relaxed">
              {project.developmentApproach}
            </p>
          </div>
        </section>

        {/* 08. Results / Business Value */}
        <section
          aria-labelledby="business-value-heading"
          className="rounded-2xl bg-[#14171A] border border-[#262930] p-6 sm:p-8 space-y-5"
        >
          <div className="space-y-1.5">
            <span className="font-mono-tech text-[11px] tracking-[0.16em] uppercase text-[#F47745] font-semibold">
              08 // {project.isConcept ? 'INTENDED VALUE' : 'BUSINESS VALUE'}
            </span>
            <h2
              id="business-value-heading"
              className="font-display font-bold text-xl sm:text-2xl text-white"
            >
              Practical Operational Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {project.businessValue.map((value) => (
              <div
                key={value}
                className="rounded-xl bg-[#111315] border border-[#24272D] p-5 flex items-start gap-3"
              >
                <CheckCircle2
                  className="w-4 h-4 text-[#F47745] mt-1 shrink-0"
                  aria-hidden="true"
                />
                <p className="text-sm text-[#D0D3D9] leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 09. Project Links & Case Study Navigation */}
        <footer className="pt-8 border-t border-[#24272D] space-y-10">
          {hasAnyExternalLink && (
            <div className="flex flex-wrap items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#F47745] hover:bg-[#e26735] text-white font-semibold text-sm transition-all"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#16181B] hover:bg-[#1E2127] border border-[#2C3038] text-white font-semibold text-sm transition-all"
                >
                  <FolderGit2 className="w-4 h-4 text-[#F47745]" aria-hidden="true" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
            </div>
          )}

          {/* Previous / Next Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group rounded-2xl bg-[#14171A] border border-[#262930] hover:border-[#F47745]/50 p-5 sm:p-6 flex items-center justify-between gap-4 transition-colors"
              >
                <div className="space-y-1">
                  <span className="font-mono-tech text-[11px] uppercase tracking-wider text-[#85878C] inline-flex items-center gap-1.5">
                    <ArrowLeft
                      className="w-3.5 h-3.5 text-[#F47745] transition-transform group-hover:-translate-x-0.5"
                      aria-hidden="true"
                    />
                    Previous Project
                  </span>
                  <p className="font-display font-bold text-base sm:text-lg text-white">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <Link
                href="/#projects"
                className="group rounded-2xl bg-[#14171A] border border-[#262930] hover:border-[#F47745]/50 p-5 sm:p-6 flex items-center gap-3 transition-colors"
              >
                <ArrowLeft
                  className="w-4 h-4 text-[#F47745] transition-transform group-hover:-translate-x-0.5"
                  aria-hidden="true"
                />
                <span className="font-display font-semibold text-sm sm:text-base text-white">
                  Back to All Projects
                </span>
              </Link>
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group rounded-2xl bg-[#14171A] border border-[#262930] hover:border-[#F47745]/50 p-5 sm:p-6 flex items-center justify-end text-right gap-4 transition-colors"
              >
                <div className="space-y-1">
                  <span className="font-mono-tech text-[11px] uppercase tracking-wider text-[#85878C] inline-flex items-center gap-1.5">
                    Next Project
                    <ArrowRight
                      className="w-3.5 h-3.5 text-[#F47745] transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                  <p className="font-display font-bold text-base sm:text-lg text-white">
                    {nextProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <Link
                href="/#projects"
                className="group rounded-2xl bg-[#14171A] border border-[#262930] hover:border-[#F47745]/50 p-5 sm:p-6 flex items-center justify-end gap-3 transition-colors"
              >
                <span className="font-display font-semibold text-sm sm:text-base text-white">
                  Back to Projects
                </span>
                <ArrowUpRight
                  className="w-4 h-4 text-[#F47745] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            )}
          </div>
        </footer>
      </main>
    </div>
  );
}
