import type { CaseStep, Metric } from "@/data/projects";

export function MetricRow({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {metrics.map((metric) => (
        <div key={metric.label} className="flex flex-col gap-1">
          <span className="whitespace-nowrap text-xl font-extrabold tracking-tight text-accent sm:text-[28px]">
            {metric.value}
          </span>
          <span className="text-[13px] leading-snug text-text-muted">
            {metric.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function CaseStepList({ steps }: { steps: CaseStep[] }) {
  return (
    <dl className="flex flex-col gap-3.5 text-[15px] leading-relaxed">
      {steps.map((step) => (
        <div key={step.label} className="flex gap-4">
          <dt className="w-11 shrink-0 font-bold text-text-muted">
            {step.label}
          </dt>
          <dd className="m-0 text-text-body">{step.text}</dd>
        </div>
      ))}
    </dl>
  );
}

/** 화면 캡처 대신 원인과 조치의 흐름을 보여준다. */
export function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-col gap-0 rounded-xl border border-border bg-surface-muted p-6">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <li key={step} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  isLast
                    ? "bg-accent text-white"
                    : "border border-border-strong bg-white text-text-secondary"
                }`}
              >
                {index + 1}
              </span>
              {!isLast && (
                <span className="w-px flex-1 bg-border-strong" aria-hidden="true" />
              )}
            </div>
            <p
              className={`pt-0.5 text-[15px] leading-relaxed ${
                isLast ? "pb-0 font-bold text-accent-dark" : "pb-6 text-text-body"
              }`}
            >
              {step}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
