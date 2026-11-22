"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { ArrowRight, CloseIcon, MailIcon, MenuIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { locations, primaryPhone, studio, telHref } from "@/content/site";
import { services } from "@/content/services";

type MenuKey = "servizi" | "sedi" | null;

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 12 8"
    width={10}
    height={7}
    aria-hidden="true"
    className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
  >
    <path d="m1 1.5 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuKey>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  const openMenu = useCallback((m: Exclude<MenuKey, null>) => {
    window.clearTimeout(closeTimer.current);
    setMenu(m);
  }, []);
  const scheduleClose = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMenu(null), 180);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Chiude menu e pannelli al cambio pagina
  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  // Pannelli desktop: chiusura con Esc, clic esterno o uscita del focus
  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const trigger = document.getElementById(`trigger-${menu}`);
        setMenu(null);
        trigger?.focus();
      }
    };
    const onDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [menu]);

  // Menu mobile: blocco dello scroll e focus trap
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = Array.from(panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"));
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

  const linkClass = (active: boolean) =>
    `relative inline-flex items-center gap-2 py-2 text-[0.9375rem] font-medium transition-colors duration-300 hover:text-navy ${
      active ? "text-navy" : "text-anthracite/80"
    } after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-bronze after:transition-transform after:duration-300 ${
      active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
    }`;

  return (
    <header
      ref={headerRef}
      onBlur={(e) => {
        if (menu && headerRef.current && !headerRef.current.contains(e.relatedTarget as Node)) setMenu(null);
      }}
      className={`sticky top-0 z-40 transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled || open || menu
          ? "border-b border-line-warm bg-ivory/95 shadow-[0_10px_40px_-28px_rgba(16,28,42,0.55)] backdrop-blur-md"
          : "border-b border-transparent bg-ivory"
      }`}
    >
      <div
        className={`container-site flex items-center justify-between gap-6 transition-[height] duration-300 ${
          scrolled ? "h-[4.5rem] lg:h-[4.75rem]" : "h-[4.5rem] lg:h-[5.75rem]"
        }`}
      >
        <Logo />

        <nav aria-label="Navigazione principale" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            <li>
              <Link
                href="/filippo-rosini"
                aria-current={isActive("/filippo-rosini") ? "page" : undefined}
                className={linkClass(isActive("/filippo-rosini"))}
              >
                Filippo Rosini
              </Link>
            </li>
            {(["servizi", "sedi"] as const).map((key) => (
              <li key={key} onMouseEnter={() => openMenu(key)} onMouseLeave={scheduleClose}>
                <button
                  id={`trigger-${key}`}
                  type="button"
                  aria-expanded={menu === key}
                  aria-controls={`pannello-${key}`}
                  onClick={() => setMenu(menu === key ? null : key)}
                  className={linkClass(isActive(`/${key}`) || menu === key)}
                >
                  {key === "servizi" ? "Servizi" : "Sedi"}
                  <Chevron open={menu === key} />
                </button>
              </li>
            ))}
            <li>
              <Link
                href="/contatti"
                aria-current={isActive("/contatti") ? "page" : undefined}
                className={linkClass(isActive("/contatti"))}
              >
                Contatti
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden items-center lg:flex">
          <Link href="/contatti" className="btn btn-primary btn-sm">
            Richiedi una consulenza
            <ArrowRight className="btn-arrow" />
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

      {/* Pannello Servizi (desktop) */}
      <div
        id="pannello-servizi"
        hidden={menu !== "servizi"}
        onMouseEnter={() => openMenu("servizi")}
        onMouseLeave={scheduleClose}
        className="absolute inset-x-0 top-full hidden border-t border-line-warm bg-white shadow-[0_30px_60px_-40px_rgba(16,28,42,0.55)] lg:block"
      >
        <div className="container-site grid grid-cols-12 gap-10 py-10">
          <div className="col-span-4 border-r border-line-warm pr-10">
            <p className="eyebrow">Aree di consulenza</p>
            <p className="mt-5 font-serif text-[1.75rem] leading-snug text-navy">
              Competenze integrate per ogni fase della tua attività.
            </p>
            <Link href="/servizi" className="link-arrow mt-7">
              <span className="link-underline">Tutti i servizi</span>
              <ArrowRight />
            </Link>
          </div>
          <ul className="col-span-8 grid grid-cols-2 gap-x-8 gap-y-1">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/servizi/${s.slug}`}
                  className="group flex gap-4 rounded-[2px] px-4 py-3.5 transition-colors duration-300 hover:bg-ivory"
                >
                  <span className="pt-0.5 font-serif text-[1rem] italic text-bronze-ink">{s.number}</span>
                  <span>
                    <span className="flex items-center gap-2 font-semibold text-navy">
                      {s.title}
                      <ArrowRight className="-translate-x-1 text-bronze opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </span>
                    <span className="mt-1 block text-[0.875rem] leading-snug text-muted">{s.tagline}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pannello Sedi (desktop) */}
      <div
        id="pannello-sedi"
        hidden={menu !== "sedi"}
        onMouseEnter={() => openMenu("sedi")}
        onMouseLeave={scheduleClose}
        className="absolute inset-x-0 top-full hidden border-t border-line-warm bg-white shadow-[0_30px_60px_-40px_rgba(16,28,42,0.55)] lg:block"
      >
        <div className="container-site grid grid-cols-12 gap-10 py-10">
          <div className="col-span-3 border-r border-line-warm pr-10">
            <p className="eyebrow">Le sedi</p>
            <p className="mt-5 font-serif text-[1.75rem] leading-snug text-navy">Tre sedi in Toscana.</p>
            <Link href="/sedi" className="link-arrow mt-7">
              <span className="link-underline">Tutte le sedi</span>
              <ArrowRight />
            </Link>
          </div>
          <ul className="col-span-9 grid grid-cols-3 gap-6">
            {locations.map((l) => (
              <li key={l.slug} className="border border-line-warm p-6">
                <Link href={`/sedi/${l.slug}`} className="group inline-flex items-center gap-2 font-serif text-[1.625rem] text-navy">
                  {l.city}
                  <ArrowRight className="text-bronze transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <p className="mt-3 flex gap-2.5 text-[0.875rem] leading-relaxed text-anthracite">
                  <PinIcon className="mt-0.5 shrink-0 text-bronze-ink" width={16} height={16} />
                  <span>
                    {l.street.value}
                    <br />
                    {l.postalCode.value} {l.locality} ({l.province})
                  </span>
                </p>
                {l.phone.value ? (
                  <a
                    href={telHref(l.phone.value)}
                    className="mt-2 flex items-center gap-2.5 text-[0.875rem] font-semibold text-navy hover:text-bronze-ink"
                  >
                    <PhoneIcon className="shrink-0 text-bronze-ink" width={16} height={16} />
                    {l.phone.value}
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        ref={panelRef}
        hidden={!open}
        className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-line-warm bg-ivory lg:hidden"
      >
        <div className="container-site flex min-h-full flex-col pb-10 pt-4">
          <nav aria-label="Menu mobile">
            <ul>
              {[
                { href: "/", label: "Home" },
                { href: "/filippo-rosini", label: "Filippo Rosini" },
                { href: "/servizi", label: "Servizi" },
                { href: "/sedi", label: "Sedi" },
                { href: "/approfondimenti", label: "Approfondimenti" },
                { href: "/contatti", label: "Contatti" },
              ].map((item) => (
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
              ))}
            </ul>
          </nav>

          <Link href="/contatti" className="btn btn-primary mt-8 w-full">
            Richiedi una consulenza
          </Link>

          <div className="mt-10 grid gap-4 text-[0.9375rem]">
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
