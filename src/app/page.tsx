import { getProjectSections } from "@/data/projects";
import { careers } from "@/data/site";
import CareerTimeline from "@/components/CareerTimeline";
import ChatHero from "@/components/ChatHero";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  const projectSections = getProjectSections();

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-5 py-16 sm:px-8">
      <header className="mb-12">
        <p className="mb-3 font-en text-sm text-[#4F46E5]">Frontend Developer</p>
        <h1 className="text-2xl text-text-primary sm:text-3xl">
        AI 서비스를 화면으로 구현해내는
          <br />
          프론트엔드 개발자
        </h1>
      </header>

      <ChatHero />

      <section className="mb-16" aria-label="프로젝트">
        <h2 className="mb-8 text-lg text-text-primary">프로젝트</h2>
        <div className="flex flex-col gap-10">
          {projectSections.map((section) => (
            <div key={section.company}>
              <div className="mb-4 flex items-baseline gap-3">
                <h3 className="text-base text-text-primary">{section.company}</h3>
                <span className="text-sm text-text-muted">{section.period}</span>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {section.projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CareerTimeline careers={careers} />
    </main>
  );
}
