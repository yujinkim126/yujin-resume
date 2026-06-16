"use client";

import { INTRO_TEXT, TECH_STACK } from "@/data/site";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const TYPING_SPEED = 35;
const INITIAL_DELAY = 600;

export default function ChatHero() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timeoutId = 0;
    let index = 0;

    setDisplayedText("");
    setIsTypingComplete(false);

    const typeNext = () => {
      if (cancelled) return;

      if (index < INTRO_TEXT.length) {
        index += 1;
        setDisplayedText(INTRO_TEXT.slice(0, index));
        timeoutId = window.setTimeout(typeNext, TYPING_SPEED);
      } else {
        setIsTypingComplete(true);
      }
    };

    timeoutId = window.setTimeout(typeNext, INITIAL_DELAY);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="mb-16" aria-label="자기소개">
      <div className="flex flex-col gap-4">
        <div className="flex justify-end">
          <div className="max-w-sm rounded-2xl rounded-tr-sm bg-surface-muted px-4 py-3 text-sm text-text-secondary">
            이 사람은 어떤 개발자인가요?
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100"
            aria-hidden="true"
          >
            <Sparkles
              className="h-4 w-4 text-text-secondary"
              strokeWidth={1.75}
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="min-h-[5.1em] text-base leading-relaxed whitespace-pre-line text-text-primary">
              {displayedText}
              {!isTypingComplete && (
                <span
                  className="ml-0.5 inline-block h-[1.1em] w-0.5 animate-pulse bg-text-muted align-middle"
                  aria-hidden="true"
                />
              )}
            </p>

            <div
              className={`mt-5 flex flex-wrap gap-2 transition-opacity duration-700 ${
                isTypingComplete ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={!isTypingComplete}
            >
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-[#EEF2FF] px-3 py-1 font-en text-xs text-[#4F46E5]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
