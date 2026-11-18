import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";

export function PageHeader({
  crumbs,
  eyebrow,
  title,
  lead,
  children,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line-warm">
      <div className="container-site pb-16 pt-10 lg:pb-24 lg:pt-14">
        <Breadcrumbs items={crumbs} />
        <div className="mt-14 max-w-4xl lg:mt-20">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h1 mt-6">{title}</h1>
          {lead ? <div className="lead mt-7 max-w-3xl">{lead}</div> : null}
          {children}
        </div>
      </div>
    </section>
  );
}
