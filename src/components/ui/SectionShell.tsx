import { ReactNode } from "react";

interface SectionHeadingProps {
  chapter: string;
  title: string;
  className?: string;
}

export function SectionHeading({ chapter, title, className = "" }: SectionHeadingProps) {
  return (
    <div className={className}>
      <span className="chapter-badge">{chapter}</span>
      <h2 className="heading-section mt-4">{title}</h2>
    </div>
  );
}

interface SectionShellProps {
  id: string;
  chapter: string;
  title: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionShell({
  id,
  chapter,
  title,
  children,
  className = "",
  dark = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`section-padding ${dark ? "bg-black" : "bg-background"} ${className}`}
    >
      <div className="content-wrap">
        <SectionHeading chapter={chapter} title={title} />
        <div className="mt-10 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
