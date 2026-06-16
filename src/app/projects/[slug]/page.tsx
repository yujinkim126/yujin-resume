import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProjectBySlug } from "@/data/projects";

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

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-5 py-16 sm:px-8">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-text-secondary"
      >
        ← 목록으로
      </Link>

      <header className="mb-10">
        <h1 className="mb-2 text-2xl text-text-primary">{project.title}</h1>
        <p className="mb-4 text-sm text-text-muted">{project.period}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-1 font-en text-xs text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      <section className="mb-10">
        <h2 className="mb-3 text-base text-text-primary">개요</h2>
        <p className="text-text-secondary">{project.summary}</p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-base text-text-primary">스크린샷</h2>
        <div className="flex flex-col gap-4">
          {project.images.map((image, index) => (
            <div
              key={image}
              className="relative aspect-[16/9] overflow-hidden rounded-xl card-border bg-surface-muted"
            >
              <Image
                src={image}
                alt={`${project.title} 스크린샷 ${index + 1}`}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-base text-text-primary">담당 역할</h2>
        <p className="text-text-secondary">{project.role}</p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-base text-text-primary">주요 구현 내용</h2>
        <ul className="list-disc space-y-2 pl-5 text-text-secondary">
          {project.achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-base text-text-primary">트러블슈팅</h2>
        <div className="flex flex-col gap-5">
          {project.troubleshooting.map((item) => (
            <div
              key={item.problem}
              className="rounded-xl card-border p-5"
            >
              <p className="mb-2 text-sm font-medium text-text-primary">
                문제
              </p>
              <p className="mb-4 text-sm text-text-secondary">{item.problem}</p>
              <p className="mb-2 text-sm font-medium text-text-primary">
                해결
              </p>
              <p className="text-sm text-text-secondary">{item.solution}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
