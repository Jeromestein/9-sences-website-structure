"use client";

import { useEffect } from "react";

type ThemeBodyClassProps = {
    theme: "light" | "dark";
};

export default function ThemeBodyClass({ theme }: ThemeBodyClassProps) {
    useEffect(() => {
        document.body.classList.remove("light-theme", "dark-theme");
        document.body.classList.add(`${theme}-theme`);

        return () => {
            document.body.classList.remove(`${theme}-theme`);
        };
    }, [theme]);

    return null;
}
