import type { ReactNode } from "react";
import { Arrow } from "./icons";

type Variant = "gold" | "navy" | "white";

const pill: Record<Variant, string> = {
  gold: "bg-gold text-ink hover:bg-gold-2",
  navy: "bg-navy text-white hover:bg-navy-2",
  white: "bg-white text-ink hover:bg-mist",
};

const chip: Record<Variant, string> = {
  gold: "bg-ink text-white",
  navy: "bg-gold text-ink",
  white: "bg-navy text-white",
};

/** Botón principal: píldora con flecha que gira al pasar el cursor. */
export default function Cta({
  href,
  children,
  variant = "gold",
  external = false,
  icon,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group/cta inline-flex min-h-12 items-center gap-3 rounded-full py-1.5 pl-5 pr-1.5 text-base font-600 transition-colors duration-200 ${pill[variant]} ${className}`}
    >
      {icon}
      <span>{children}</span>
      <span className={`grid h-9 w-9 shrink-0 -rotate-45 place-items-center rounded-full transition-transform duration-200 group-hover/cta:rotate-0 ${chip[variant]}`}>
        <Arrow className="h-4 w-4" />
      </span>
    </a>
  );
}
