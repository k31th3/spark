import type {
    Responsive,
    Breakpoint
} from "./Grid.types";

import {
    GAP,
    RESPONSIVE_GAP,
    DISPLAY
} from "./Grid.maps";

/* =========================================================
   RESPONSIVE CLASSES
========================================================= */

export function getResponsiveClasses<T extends string | number>(
  config: Responsive<T> | undefined,
  map: Record< string, Partial<Record<string | number, string>> >
) {
  
    if (!config) return "";

    return Object.entries(config)
        .map(([breakpoint, value]) => {
          if (value === undefined) return "";

          return map[breakpoint]?.[value];
        })
        .filter(Boolean)
        .join(" ");
}

/* =========================================================
   DISPLAY CLASSES
========================================================= */

export function getDisplayClasses( config: Responsive<boolean> | undefined, reverse = false ) {
    if (!config) return "";

    return Object.entries(config)
        .map(([breakpoint, value]) => {
            
            if (value === undefined) return "";
            const type = reverse
            ? value
              ? "hide"
              : "show"
            : value
              ? "show"
              : "hide";

            return DISPLAY[
                breakpoint as Breakpoint
            ]?.[type];
        })
        .filter(Boolean)
        .join(" ");
}

/* =========================================================
   GAP CLASSES
========================================================= */

export function getGapClasses( gap?: number | Responsive<number> ) {
    if (gap === undefined) return "";

    if (typeof gap === "number") {
        return GAP[
        gap as keyof typeof GAP
        ] ?? "";
    }

    return getResponsiveClasses(
        gap,
        RESPONSIVE_GAP
    );
}
