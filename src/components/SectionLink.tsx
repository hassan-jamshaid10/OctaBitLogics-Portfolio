"use client";
import React from "react";
import Link from "next/link";
import { useScrollToHome } from "../lib/useScrollToHome";

interface SectionLinkProps {
    /** The section id on the home page, e.g. "services", "contact", "case-studies" */
    section: string;
    className?: string;
    children: React.ReactNode;
}

/**
 * A link component that navigates to a section on the home page without hash fragments.
 * Uses sessionStorage to pass the scroll target and navigates to "/" cleanly.
 */
const SectionLink = React.memo(function SectionLink({ section, className, children }: SectionLinkProps) {
    const navigateToSection = useScrollToHome();

    return (
        <a
            href="/"
            className={className}
            onClick={(e) => {
                e.preventDefault();
                navigateToSection(section);
            }}
        >
            {children}
        </a>
    );
});

export default SectionLink;
