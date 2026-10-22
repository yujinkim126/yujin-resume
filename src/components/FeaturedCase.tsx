import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { CaseStepList, FlowDiagram, MetricRow } from "./CaseParts";

export default function FeaturedCase({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-10 border-b border-border py-16 md:flex-row md:items-start md:gap-12 md:py-[72px]">
      <div className="flex min-w-0 flex-col gap-5 md:basis-[45%]">
        <p className="text-sm text-text-muted">
          {project.company} · {project.period}
        </p>
        <h3 className="text-[28px] font-extrabold tracking-tight sm:text-[30px]">
          {project.title}
          <span className="mt-1 block text-xl font-medium text-text-secondary sm:text-[22px]">
            {project.subtitle}
          </span>
        </h3>
        {project.metrics && <MetricRow metrics={project.metrics} />}
        <CaseStepList steps={project.caseSteps} />
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex min-h-[44px] w-fit items-center text-[15px] font-bold text-accent hover:text-accent-dark"
        >
          케이스 자세히 보기 →
        </Link>
      </div>

      <figure className="m-0 flex min-w-0 flex-col gap-2.5 md:basis-[55%]">
        {project.thumbnail ? (
          <>
            <div className="overflow-hidden rounded-xl border border-border bg-surface-muted">
              <Image
                src={project.thumbnail}
                alt={`${project.title} 화면`}
                width={0}
                height={0}
                unoptimized
                className="h-auto w-full"
                sizes="(max-width: 768px) 100vw, 640px"
              />
            </div>
            {project.caption && (
              <figcaption className="text-[13px] text-text-muted">
                {project.caption}
              </figcaption>
            )}
          </>
        ) : (
          project.flow && <FlowDiagram steps={project.flow} />
        )}
      </figure>
    </article>
  );
}
