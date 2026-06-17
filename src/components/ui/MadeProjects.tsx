"use client";

import { made_projects } from "@/data";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type DescriptionPart = (typeof made_projects)[number]["description"][number];

function ProjectDescription({ description }: { description: DescriptionPart[] }) {
  return (
    <span className="inline-flex flex-wrap items-baseline gap-x-1">
      {description.map((part, index) =>
        typeof part === "string" ? (
          <span key={`${part}-${index}`}>{part.trim()}</span>
        ) : (
          <a
            key={part.link}
            href={part.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
          >
            {part.text}
          </a>
        ),
      )}
    </span>
  );
}

export function MadeProjects() {
  return (
    <section className="flex min-h-8 flex-wrap items-center gap-x-3 gap-y-1">
      <h2 className="text-foreground/70 font-normal shrink-0">some stuff that i have made</h2>
      <hr className="min-w-8 flex-1 border-muted-foreground/20" />
      <TooltipProvider>
        <div className="flex min-w-0 flex-wrap justify-end gap-x-2 gap-y-1">
          {made_projects.map((project) => (
            <Tooltip key={project.name}>
              <TooltipTrigger asChild>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/40 hover:text-foreground/85"
                >
                  {project.name}
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <ProjectDescription description={project.description} />
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </section>
  );
}
