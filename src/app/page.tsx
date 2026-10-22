import FeaturedCase from "@/components/FeaturedCase";
import OtherProjectCard from "@/components/OtherProjectCard";
import {
  getFeaturedProjects,
  getOtherProjects,
  otherWorks,
} from "@/data/projects";
import { careers, profile, skillGroups } from "@/data/site";

export default function HomePage() {
  const featured = getFeaturedProjects();
  const others = getOtherProjects();

  return (
    <div className="min-h-screen bg-surface">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-page flex-col gap-8 px-5 pb-14 pt-20 sm:px-6 md:flex-row md:items-end md:justify-between md:pb-16 md:pt-[88px]">
          <div className="flex max-w-[640px] flex-col gap-4">
            <p className="text-sm font-medium text-accent">{profile.label}</p>
            <h1 className="text-[44px] font-extrabold tracking-tight sm:text-5xl">
              {profile.name}
            </h1>
            <p className="whitespace-pre-line text-lg leading-relaxed text-text-secondary sm:text-[19px]">
              {profile.intro}
            </p>
          </div>
          <div className="flex flex-col gap-1 text-[15px] md:items-end">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-[36px] items-center text-accent hover:text-accent-dark"
            >
              {profile.email}
            </a>
            <a
              href={profile.github}
              className="inline-flex min-h-[36px] items-center text-accent hover:text-accent-dark"
            >
              github.com/yujinkim126
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-page px-5 pb-28 sm:px-6">
        <section aria-labelledby="featured-heading">
          <h2 id="featured-heading" className="sr-only">
            대표 프로젝트
          </h2>
          {featured.map((project) => (
            <FeaturedCase key={project.slug} project={project} />
          ))}
        </section>

        <section aria-labelledby="others-heading" className="flex flex-col gap-5 pt-14">
          <h2 id="others-heading" className="text-xl font-bold">
            그 밖의 프로젝트
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {others.map((project) => (
              <OtherProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <ul className="mt-2 flex flex-col divide-y divide-border border-y border-border">
            {otherWorks.map((work) => (
              <li
                key={work.title}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6"
              >
                <span className="shrink-0 text-[15px] font-bold sm:w-48">
                  {work.title}
                </span>
                <div className="flex flex-col gap-2">
                  {"heading" in work && work.heading && (
                    <p className="text-[15px] leading-relaxed">
                      <span className="text-base font-bold text-text-primary">
                        {work.heading.name}
                      </span>
                      <span className="ml-2 text-text-muted">
                        {work.heading.description}
                      </span>
                    </p>
                  )}
                  {Array.isArray(work.summary) ? (
                    <ul className="flex list-disc flex-col gap-1 pl-5 text-[15px] leading-relaxed text-text-secondary marker:text-text-muted">
                      {work.summary.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-[15px] leading-relaxed text-text-secondary">
                      {work.summary}
                    </span>
                  )}
                  {"link" in work && work.link && (
                    <a
                      href={work.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] w-fit items-center text-[15px] font-bold text-accent hover:text-accent-dark"
                    >
                      {work.link.label} →
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className="grid grid-cols-1 gap-12 pt-20 md:grid-cols-2">
          <section aria-labelledby="career-heading" className="flex flex-col gap-5">
            <h2 id="career-heading" className="text-xl font-bold">
              경력
            </h2>
            <ul className="flex flex-col gap-4">
              {careers.map((career) => (
                <li
                  key={career.company}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
                >
                  <span className="text-base">
                    <strong className="font-bold">{career.company}</strong>
                    <span className="text-text-secondary"> · {career.role}</span>
                  </span>
                  <span className="text-sm text-text-muted">{career.period}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="skill-heading" className="flex flex-col gap-5">
            <h2 id="skill-heading" className="text-xl font-bold">
              기술
            </h2>
            <dl className="flex flex-col gap-3">
              {skillGroups.map((group) => (
                <div key={group.label} className="flex gap-4 text-[15px]">
                  <dt className="w-24 shrink-0 font-bold text-text-muted">
                    {group.label}
                  </dt>
                  <dd className="m-0 text-text-body">{group.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </main>
    </div>
  );
}
