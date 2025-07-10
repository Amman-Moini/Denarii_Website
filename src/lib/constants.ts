// src/lib/constants.ts - Updated Navigation Structure
import type { LucideIcon } from "lucide-react";
export type NavLink = {
 href: string;
 label: string;
 icon?: LucideIcon;
 children?: { href: string; label: string }[];
};
export const NAV_LINKS: NavLink[] = [
 {
 href: "/accelerator",
 label: "Accelerator",
 children: [
 { href: "/accelerator/cohort-003", label: "Current Cohort" },
 { href: "/accelerator/tracks", label: "Program Tracks" },
 { href: "/accelerator/alumni", label: "Alumni Network" },
 { href: "/accelerator/apply", label: "Apply Now" }
 ]
 },
 {
 href: "/consulting",
 label: "Consulting",
 children: [
 { href: "/consulting/tokenomics", label: "Tokenomics Design" },
 { href: "/consulting/strategy", label: "Go-to-Market Strategy" },
 { href: "/consulting/case-studies", label: "Case Studies" }
 ]
 },
 { href: "/portfolio", label: "Portfolio" },
 {
 href: "/about",
 label: "About",
 children: [
 { href: "/about/team", label: "Team" },
 { href: "/about/investors", label: "Investors" },
 { href: "/about/careers", label: "Careers" },
 { href: "/about/contact", label: "Contact" }
 ]
 }
];
export const SITE_NAME = "Denarii Labs";