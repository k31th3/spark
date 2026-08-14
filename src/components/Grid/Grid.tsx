import React from "react";

/* =========================================================
   TYPES
========================================================= */

type Breakpoint = "base" | "sm" | "md" | "lg" | "xl" | "2xl";

type Responsive<T> = Partial<Record<Breakpoint, T>>;

type GridProps = {
  children: React.ReactNode;
  cols?: Responsive<number>;
  gap?: number | Responsive<number>;
  className?: string;
};

type GridItemProps = {
  children: React.ReactNode;
  span?: Responsive<number>;
  show?: Responsive<boolean>;
  hide?: Responsive<boolean>;
  order?: Responsive<
    number | "first" | "last" | "none"
  >;
  className?: string;
  id?: string
};

type StackProps = {
  children: React.ReactNode;

  gap?: number | Responsive<number>;

  show?: Responsive<boolean>;
  hide?: Responsive<boolean>;

  className?: string;
};

/* =========================================================
   CLASS MAPS
========================================================= */

const GRID_COLS = {
  base: {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
    9: "grid-cols-9",
    10: "grid-cols-10",
    11: "grid-cols-11",
    12: "grid-cols-12",
  },
  sm: {
    1: "sm:grid-cols-1",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
    4: "sm:grid-cols-4",
    5: "sm:grid-cols-5",
    6: "sm:grid-cols-6",
    7: "sm:grid-cols-7",
    8: "sm:grid-cols-8",
    9: "sm:grid-cols-9",
    10: "sm:grid-cols-10",
    11: "sm:grid-cols-11",
    12: "sm:grid-cols-12",
  },
  md: {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
    6: "md:grid-cols-6",
    7: "md:grid-cols-7",
    8: "md:grid-cols-8",
    9: "md:grid-cols-9",
    10: "md:grid-cols-10",
    11: "md:grid-cols-11",
    12: "md:grid-cols-12",
  },
  lg: {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
    6: "lg:grid-cols-6",
    7: "lg:grid-cols-7",
    8: "lg:grid-cols-8",
    9: "lg:grid-cols-9",
    10: "lg:grid-cols-10",
    11: "lg:grid-cols-11",
    12: "lg:grid-cols-12",
  },
  xl: {
    1: "xl:grid-cols-1",
    2: "xl:grid-cols-2",
    3: "xl:grid-cols-3",
    4: "xl:grid-cols-4",
    5: "xl:grid-cols-5",
    6: "xl:grid-cols-6",
    7: "xl:grid-cols-7",
    8: "xl:grid-cols-8",
    9: "xl:grid-cols-9",
    10: "xl:grid-cols-10",
    11: "xl:grid-cols-11",
    12: "xl:grid-cols-12",
  },
  "2xl": {
    1: "2xl:grid-cols-1",
    2: "2xl:grid-cols-2",
    3: "2xl:grid-cols-3",
    4: "2xl:grid-cols-4",
    5: "2xl:grid-cols-5",
    6: "2xl:grid-cols-6",
    7: "2xl:grid-cols-7",
    8: "2xl:grid-cols-8",
    9: "2xl:grid-cols-9",
    10: "2xl:grid-cols-10",
    11: "2xl:grid-cols-11",
    12: "2xl:grid-cols-12",
  },
} as const;

const GAP = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  7: "gap-7",
  8: "gap-8",
  9: "gap-9",
  10: "gap-10",
  11: "gap-11",
  12: "gap-12",
  14: "gap-14",
  16: "gap-16",
} as const;

const RESPONSIVE_GAP = {
  base: {
    0: "gap-0",
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
    8: "gap-8",
    10: "gap-10",
    12: "gap-12",
    16: "gap-16",
  },
  sm: {
    0: "sm:gap-0",
    1: "sm:gap-1",
    2: "sm:gap-2",
    3: "sm:gap-3",
    4: "sm:gap-4",
    5: "sm:gap-5",
    6: "sm:gap-6",
    8: "sm:gap-8",
    10: "sm:gap-10",
    12: "sm:gap-12",
    16: "sm:gap-16",
  },
  md: {
    0: "md:gap-0",
    1: "md:gap-1",
    2: "md:gap-2",
    3: "md:gap-3",
    4: "md:gap-4",
    5: "md:gap-5",
    6: "md:gap-6",
    8: "md:gap-8",
    10: "md:gap-10",
    12: "md:gap-12",
    16: "md:gap-16",
  },
  lg: {
    0: "lg:gap-0",
    1: "lg:gap-1",
    2: "lg:gap-2",
    3: "lg:gap-3",
    4: "lg:gap-4",
    5: "lg:gap-5",
    6: "lg:gap-6",
    8: "lg:gap-8",
    10: "lg:gap-10",
    12: "lg:gap-12",
    16: "lg:gap-16",
  },
  xl: {
    0: "xl:gap-0",
    1: "xl:gap-1",
    2: "xl:gap-2",
    3: "xl:gap-3",
    4: "xl:gap-4",
    5: "xl:gap-5",
    6: "xl:gap-6",
    8: "xl:gap-8",
    10: "xl:gap-10",
    12: "xl:gap-12",
    16: "xl:gap-16",
  },
  "2xl": {
    0: "2xl:gap-0",
    1: "2xl:gap-1",
    2: "2xl:gap-2",
    3: "2xl:gap-3",
    4: "2xl:gap-4",
    5: "2xl:gap-5",
    6: "2xl:gap-6",
    8: "2xl:gap-8",
    10: "2xl:gap-10",
    12: "2xl:gap-12",
    16: "2xl:gap-16",
  },
} as const;

const COL_SPAN = {
  base: {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
    5: "col-span-5",
    6: "col-span-6",
    7: "col-span-7",
    8: "col-span-8",
    9: "col-span-9",
    10: "col-span-10",
    11: "col-span-11",
    12: "col-span-12",
  },
  sm: {
    1: "sm:col-span-1",
    2: "sm:col-span-2",
    3: "sm:col-span-3",
    4: "sm:col-span-4",
    5: "sm:col-span-5",
    6: "sm:col-span-6",
    7: "sm:col-span-7",
    8: "sm:col-span-8",
    9: "sm:col-span-9",
    10: "sm:col-span-10",
    11: "sm:col-span-11",
    12: "sm:col-span-12",
  },
  md: {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
    4: "md:col-span-4",
    5: "md:col-span-5",
    6: "md:col-span-6",
    7: "md:col-span-7",
    8: "md:col-span-8",
    9: "md:col-span-9",
    10: "md:col-span-10",
    11: "md:col-span-11",
    12: "md:col-span-12",
  },
  lg: {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
    5: "lg:col-span-5",
    6: "lg:col-span-6",
    7: "lg:col-span-7",
    8: "lg:col-span-8",
    9: "lg:col-span-9",
    10: "lg:col-span-10",
    11: "lg:col-span-11",
    12: "lg:col-span-12",
  },
  xl: {
    1: "xl:col-span-1",
    2: "xl:col-span-2",
    3: "xl:col-span-3",
    4: "xl:col-span-4",
    5: "xl:col-span-5",
    6: "xl:col-span-6",
    7: "xl:col-span-7",
    8: "xl:col-span-8",
    9: "xl:col-span-9",
    10: "xl:col-span-10",
    11: "xl:col-span-11",
    12: "xl:col-span-12",
  },
  "2xl": {
    1: "2xl:col-span-1",
    2: "2xl:col-span-2",
    3: "2xl:col-span-3",
    4: "2xl:col-span-4",
    5: "2xl:col-span-5",
    6: "2xl:col-span-6",
    7: "2xl:col-span-7",
    8: "2xl:col-span-8",
    9: "2xl:col-span-9",
    10: "2xl:col-span-10",
    11: "2xl:col-span-11",
    12: "2xl:col-span-12",
  },
} as const;

const DISPLAY = {
  base: {
    show: "block",
    hide: "hidden",
  },
  sm: {
    show: "sm:block",
    hide: "sm:hidden",
  },
  md: {
    show: "md:block",
    hide: "md:hidden",
  },
  lg: {
    show: "lg:block",
    hide: "lg:hidden",
  },
  xl: {
    show: "xl:block",
    hide: "xl:hidden",
  },
  "2xl": {
    show: "2xl:block",
    hide: "2xl:hidden",
  },
} as const;

/* =========================================================
   HELPERS
========================================================= */

function getResponsiveClasses<T extends string | number>(
  config: Responsive<T> | undefined,
  map: Record<
    string,
    Partial<Record<string | number, string>>
  >
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

function getDisplayClasses(
  config: Responsive<boolean> | undefined,
  reverse = false
) {
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

      return DISPLAY[breakpoint as Breakpoint]?.[type];
    })
    .filter(Boolean)
    .join(" ");
}

function getGapClasses(gap?: number | Responsive<number>) {
  if (gap === undefined) return "";

  if (typeof gap === "number") {
    return GAP[gap as keyof typeof GAP] ?? "";
  }

  return getResponsiveClasses(gap, RESPONSIVE_GAP);
}

/* =========================================================
   GRID ITEM
========================================================= */

function GridItem({
  children,
  span = { base: 1 },
  show,
  hide,
  order,
  className = "",
  id
}: GridItemProps) {
  const spanClasses = getResponsiveClasses(
    span,
    COL_SPAN
  );

  const showClasses = getDisplayClasses(show);

  const hideClasses = getDisplayClasses(hide, true);

  return (
    <div
        id={id}
        className={[
            spanClasses,
            showClasses,
            hideClasses,
            className,
        ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

/* =========================================================
   VSTACK
========================================================= */

function GridVStack({
  children,
  gap = 0,
  show,
  hide,
  className = "",
}: StackProps) {
  const gapClasses = getGapClasses(gap);

  const showClasses = getDisplayClasses(show);

  const hideClasses = getDisplayClasses(hide, true);

  return (
    <div
      className={[
        "vstack",
        gapClasses,
        showClasses,
        hideClasses,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

/* =========================================================
   HSTACK
========================================================= */

function GridHStack({
  children,
  gap = 0,
  show,
  hide,
  className = "",
}: StackProps) {
  const gapClasses = getGapClasses(gap);

  const showClasses = getDisplayClasses(show);

  const hideClasses = getDisplayClasses(hide, true);

  return (
    <div
      className={[
        "hstack",
        gapClasses,
        showClasses,
        hideClasses,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

/* =========================================================
   GRID
========================================================= */

function Grid({
  children,
  cols = {
    base: 1,
    lg: 2,
  },
  gap = 8,
  className = "",
}: GridProps) {
  const columnClasses = getResponsiveClasses(
    cols,
    GRID_COLS
  );

  const gapClasses = getGapClasses(gap);

  return (
    <div
      className={[
        "grid",
        columnClasses,
        gapClasses,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

/* =========================================================
   COMPOUND COMPONENTS
========================================================= */

Grid.Item = GridItem;
Grid.VStack = GridVStack;
Grid.HStack = GridHStack;

export default Grid;
