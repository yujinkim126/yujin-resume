import Link from "next/link";
import { notFound } from "next/navigation";
import { FlowDiagram, MetricRow } from "@/components/CaseParts";
import ProjectImageGallery from "@/components/ProjectImageGallery";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  projects,
  type Story,
} from "@/data/projects";

interface ProjectDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return { title: "프로젝트를 찾을 수 없습니다" };
  }

  return {
    title: `${project.title} | 김유진`,
    description: project.summary,
  };
}

const STORY_PARTS: { key: keyof Story; label: string }[] = [
  { key: "problem", label: "문제" },
  { key: "decision", label: "결정" },
  { key: "why", label: "이유" },
  { key: "result", label: "결과" },
];

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="min-h-screen bg-surface">
      <main className="mx-auto max-w-[880px] px-5 pb-28 pt-12 sm:px-6">
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center text-sm text-text-muted hover:text-text-primary"
        >
          ← 전체 프로젝트
        </Link>

        <header className="flex flex-col gap-5 border-b border-border pb-12 pt-8">
          <p className="text-sm text-text-muted">
            {project.company} · {project.period}
          </p>
          <h1 className="text-[34px] font-extrabold tracking-tight sm:text-[40px]">
            {project.title}
            <span className="mt-2 block text-xl font-medium text-text-secondary sm:text-2xl">
              {project.subtitle}
            </span>
          </h1>
          <p className="whitespace-pre-line text-[17px] leading-relaxed text-text-secondary">
            {project.summary}
          </p>
          {project.metrics && (
            <div className="max-w-[560px] pt-2">
              <MetricRow metrics={project.metrics} />
            </div>
          )}
        </header>

        <section className="grid grid-cols-1 gap-6 border-b border-border py-10 sm:grid-cols-[120px_1fr]">
          <h2 className="text-sm font-bold text-text-muted">담당 역할</h2>
          <p className="text-[15px] text-text-body">{project.role}</p>
          <h2 className="text-sm font-bold text-text-muted">기술</h2>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md bg-surface-hover px-2.5 py-1 text-[13px] text-text-secondary"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-5 py-12">
          <h2 className="text-xl font-bold">주요 구현 내용</h2>
          <ul className="flex list-disc flex-col gap-2.5 pl-5 text-[15px] leading-relaxed text-text-body marker:text-text-muted">
            {project.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </section>

        {project.flow && (
          <section className="flex flex-col gap-5 border-t border-border py-12">
            <h2 className="text-xl font-bold">흐름</h2>
            <FlowDiagram steps={project.flow} />
          </section>
        )}

        <section className="flex flex-col gap-6 border-t border-border py-12">
          <h2 className="text-xl font-bold">문제 해결과 결정</h2>
          <div className="flex flex-col gap-5">
            {project.stories.map((story) => (
              <article
                key={story.title}
                className="flex flex-col gap-4 rounded-xl border border-border p-6"
              >
                <h3 className="text-lg font-bold">{story.title}</h3>
                <dl className="flex flex-col gap-3 text-[15px] leading-relaxed">
                  {STORY_PARTS.filter((part) => story[part.key]).map((part) => (
                    <div key={part.key} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                      <dt
                        className={`w-11 shrink-0 font-bold ${
                          part.key === "decision" || part.key === "why"
                            ? "text-accent"
                            : "text-text-muted"
                        }`}
                      >
                        {part.label}
                      </dt>
                      <dd className="m-0 text-text-body">{story[part.key]}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>

        {project.images.length > 0 && (
          <section className="flex flex-col gap-5 border-t border-border py-12">
            <h2 className="text-xl font-bold">화면</h2>
            <ProjectImageGallery
              title={project.title}
              images={project.images}
              isPortrait={project.imageOrientation === "portrait"}
            />
          </section>
        )}

        <nav
          aria-label="다음 프로젝트"
          className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8"
        >
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center text-sm text-text-muted hover:text-text-primary"
          >
            ← 전체 프로젝트
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="inline-flex min-h-[44px] items-center text-[15px] font-bold text-accent hover:text-accent-dark"
          >
            다음: {next.title} →
          </Link>
        </nav>
      </main>
    </div>
  );
}
