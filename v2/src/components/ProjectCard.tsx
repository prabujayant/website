import { useState } from "react";
import { Link } from "@tanstack/react-router";

export type ProjectCardProps = {
  isBlog?: boolean;
  title: string;
  description: string;
  imgPath?: string;
  demoLink: string;
  customButtonText?: string;
};

function isInternalLink(url: string): boolean {
  return url.startsWith("/");
}

export function ProjectCard(props: ProjectCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="relative flex w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <button
        type="button"
        onClick={() => setLiked((v) => !v)}
        aria-label={`${liked ? "Unlike" : "Like"} ${props.title}`}
        aria-pressed={liked}
        className="absolute right-3 top-3 z-10 rounded-full border border-white/15 bg-black/50 px-2.5 py-1.5 text-lg leading-none"
      >
        <span className={liked ? "text-rose-400" : "text-white/50"}>♥</span>
      </button>

      {props.imgPath ? (
        <img
          src={props.imgPath}
          alt={`${props.title} — project showcase image`}
          loading="lazy"
          className="h-44 w-full object-cover"
        />
      ) : (
        <div aria-hidden="true" className="flex h-44 w-full items-center justify-center bg-white/5 text-5xl">
          📖
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold leading-snug">{props.title}</h3>
        <p className="mt-2 flex-1 whitespace-pre-line text-sm text-white/60">{props.description}</p>
        <div className="mt-4">
          {isInternalLink(props.demoLink) ? (
            <Link
              to="/project/$projectId"
              params={{ projectId: props.demoLink.split("/").pop() ?? "" }}
              className="inline-block rounded-lg bg-amber-300 px-4 py-2 text-sm font-semibold text-black hover:bg-amber-200"
            >
              {props.customButtonText ?? "Demo"}
            </Link>
          ) : (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-lg bg-amber-300 px-4 py-2 text-sm font-semibold text-black hover:bg-amber-200"
            >
              {props.customButtonText ?? (props.isBlog ? "Blog" : "Demo")}
            </a>
          )}
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-amber-300 via-fuchsia-400 to-cyan-300" />
    </article>
  );
}
