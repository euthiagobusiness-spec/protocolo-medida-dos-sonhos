import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type SharedProps = {
  children: ReactNode;
  className?: string;
};

type ButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const baseClass =
  "liquid-button focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-copper px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-copper transition disabled:cursor-not-allowed disabled:opacity-60";

export function PrimaryButton({ children, className = "", ...props }: ButtonProps) {
  return (
    <button className={`${baseClass} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function PrimaryLink({ children, className = "", href, ...props }: LinkProps) {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a className={`${baseClass} ${className}`} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={`${baseClass} ${className}`} href={href} {...props}>
      {children}
    </Link>
  );
}
