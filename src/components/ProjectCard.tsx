import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-xl card-border bg-surface transition-colors duration-200 hover:bg-surface-hover"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-surface-muted">
        <Image
          src={project.thumbnail}
          alt={`${project.title} 썸네일`}
          fill
          unoptimized
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-5">
        <h3 className="mb-1 text-base text-text-primary">{project.title}</h3>
        <p className="mb-3 text-sm text-text-muted">{project.period}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-surface-muted px-2 py-0.5 font-en text-xs text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
