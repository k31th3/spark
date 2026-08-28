import type React from "react";

export type Breakpoint =
  | "base"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl";

export type Responsive<T> =
    Partial<Record<Breakpoint, T>>;

export type GridProps = {
    children: React.ReactNode;
    cols?: Responsive<number>;
    gap?: number | Responsive<number>;
    className?: string;
};

export type GridItemProps = {
    children: React.ReactNode;
    span?: Responsive<number>;
    start?: Responsive<number>;
    show?: Responsive<boolean>;
    hide?: Responsive<boolean>;
    order?: Responsive<
    number | "first" | "last" | "none"
    >;
    justify?: "start" | "center" | "end";
    className?: string;
    id?: string;
};

export type StackProps = {
    children: React.ReactNode;

    gap?: number | Responsive<number>;

    justify?:
        | "start"
        | "center"
        | "end"
        | "between"
        | "around"
        | "evenly";

    align?:
        | "start"
        | "center"
        | "end"
        | "stretch"
        | "baseline";

    show?: Responsive<boolean>;
    hide?: Responsive<boolean>;

    className?: string;
};
