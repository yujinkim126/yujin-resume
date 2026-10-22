import Link from "next/link";
import type { Project } from "@/data/projects";

export default function OtherProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex flex-col gap-1.5 rounded-xl border border-border p-5 transition-colors hover:border-border-strong hover:bg-surface-muted"
    >
      <span className="text-[13px] text-text-muted">
        {project.company} · {project.period}
      </span>
      <strong className="text-base font-bold text-text-primary">
        {project.title}
      </strong>
      <span className="text-sm leading-relaxed text-text-secondary">
        {project.caseSteps.find((step) => step.label === "결정")?.text ??
          project.subtitle}
      </span>
    </Link>
  );
}
