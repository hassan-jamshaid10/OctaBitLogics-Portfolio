"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

/**
 * Hook that returns a click handler for navigating to a section on the home page.
 * Instead of using hash fragments (/#services), it stores the target in sessionStorage
 * and navigates to "/" cleanly, where the home page picks up the target and scrolls.
 */
export function useScrollToHome() {
    const router = useRouter();

    const navigateToSection = useCallback(
        (sectionId: string) => {
            const id = sectionId.replace("#", "");
            if (typeof window !== "undefined") {
                sessionStorage.setItem("scrollToSection", id);
            }
            router.push("/");
        },
        [router]
    );

    return navigateToSection;
}
