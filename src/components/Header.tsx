"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { ArrowRight, CloseIcon, MailIcon, MenuIcon, PhoneIcon } from "@/components/Icons";
import { locations, mainNav, primaryPhone, studio, telHref } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Chiude il menu al cambio pagina
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = panelRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = Array.from(
          panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
        );
        const all = [toggleRef.current!, ...focusables];
        const idx = all.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey && idx <= 0) {
          e.preventDefault();
          all[all.length - 1].focus();
        } else if (!e.shiftKey && idx === all.length - 1) {
          e.preventDefault();
          all[0].focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled || open
          ? "border-b border-line-warm bg-ivory/95 shadow-[0_8px_30px_-22px_rgba(23,38,56,0.45)] backdrop-blur-md"
          : "border-b border-transparent bg-ivory"
      }`}
    >
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        <Logo />

        <nav aria-label="Navigazione principale" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative py-2 text-[0.9375rem] font-medium transition-colors duration-300 hover:text-navy ${
                    isActive(item.href) ? "text-navy" : "text-anthracite/85"
                  } after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-bronze after:transition-transform after:duration-300 ${
                    isActive(item.href) ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={telHref(primaryPhone)}
            className="hidden items-center gap-2 text-[0.9375rem] font-medium text-navy transition-colors hover:text-bronze-ink xl:inline-flex"
          >
            <PhoneIcon className="text-bronze-ink" />
            {primaryPhone}
          </a>
          <Link href="/contatti" className="btn btn-primary btn-sm">
            Richiedi una consulenza
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={telHref(primaryPhone)}
            className="grid size-11 place-items-center text-navy"
            aria-label={`Chiama lo studio: ${primaryPhone}`}
          >
            <PhoneIcon width={20} height={20} />
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-11 items-center gap-2 pl-2 text-[0.875rem] font-semibold text-navy"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
            <span>{open ? "Chiudi" : "Menu"}</span>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        ref={panelRef}
        hidden={!open}
        className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-line-warm bg-ivory lg:hidden"
      >
        <div className="container-site flex min-h-full flex-col pb-10 pt-6">
          <nav aria-label="Menu mobile">
            <ul className="border-t border-line-warm">
              {[{ href: "/", label: "Home" }, ...mainNav, { href: "/approfondimenti", label: "Approfondimenti" }].map(
                (item) => (
                  <li key={item.href} className="border-b border-line-warm">
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className="flex items-center justify-between py-4 font-serif text-[1.75rem] leading-tight text-navy"
                    >
                      {item.label}
                      <ArrowRight className="text-bronze" />
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <Link href="/contatti" className="btn btn-primary mt-8 w-full">
            Richiedi una consulenza
          </Link>

          <div className="mt-10 grid gap-5 text-[0.9375rem]">
            {locations
              .filter((l) => l.phone.value)
              .map((l) => (
                <a key={l.slug} href={telHref(l.phone.value!)} className="flex items-center justify-between">
                  <span className="text-muted">Sede di {l.city}</span>
                  <span className="inline-flex items-center gap-2 font-semibold text-navy">
                    <PhoneIcon className="text-bronze-ink" />
                    {l.phone.value}
                  </span>
                </a>
              ))}
            <a href={`mailto:${studio.email}`} className="flex items-center justify-between">
              <span className="text-muted">Email</span>
              <span className="inline-flex items-center gap-2 font-semibold text-navy">
                <MailIcon className="text-bronze-ink" />
                {studio.email}
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
