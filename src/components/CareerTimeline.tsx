import type { CareerItem } from "@/data/site";

interface CareerTimelineProps {
  careers: CareerItem[];
}

export default function CareerTimeline({ careers }: CareerTimelineProps) {
  return (
    <section aria-label="경력">
      <h2 className="mb-6 text-lg text-text-primary">경력</h2>
      <div className="relative">
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-border"
          aria-hidden="true"
        />
        <ul className="space-y-8">
          {careers.map((career) => (
            <li key={`${career.company}-${career.period}`} className="relative pl-7">
              <span
                className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-border bg-surface"
                aria-hidden="true"
              />
              <p className="text-base text-text-primary">{career.company}</p>
              <p className="text-sm text-text-secondary">{career.role}</p>
              <p className="text-sm text-text-muted">{career.period}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
