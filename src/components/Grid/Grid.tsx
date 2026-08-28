import type {
    GridProps,
    GridItemProps,
    StackProps
} from "./Grid.types";

import {
    GRID_COLS,
    COL_SPAN,
    COL_START,
    JUSTIFY_SELF,
    JUSTIFY,
    ALIGN,
    ORDER
} from "./Grid.maps";

import {
    getResponsiveClasses,
    getDisplayClasses,
    getGapClasses
} from "./Grid.helpers";

/* =========================================================
   GRID ITEM
========================================================= */

function GridItem({
    children,
    span = { base: 1 },
    start,
    show,
    hide,
    order,
    justify,
    className = "",
    id
}: GridItemProps) {
    const spanClasses = getResponsiveClasses( span, COL_SPAN );
    const startClasses = getResponsiveClasses( start, COL_START );
    const orderClasses = getResponsiveClasses( order, ORDER );

    const justifyClass = justify ? JUSTIFY_SELF[justify] : "";

    const showClasses = getDisplayClasses(show);
    const hideClasses = getDisplayClasses(hide, true);

    return (
    <div
        id={id}
        className={[
            spanClasses,
            startClasses,
            orderClasses,
            justifyClass,
            showClasses,
            hideClasses,
            className
        ]
        .filter(Boolean)
        .join(" ")}>
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
    justify,
    align,
    show,
    hide,
    className = ""
}: StackProps) {
  
    const gapClasses = getGapClasses(gap);
    const showClasses = getDisplayClasses(show);
    const hideClasses = getDisplayClasses(hide, true);

    return (
        <div
            className={[
                "vstack",
                justify ? JUSTIFY[justify] : "",
                align ? ALIGN[align] : "",
                gapClasses,
                showClasses,
                hideClasses,
                className
              ]
                .filter(Boolean)
                .join(" ")}>
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
    justify,
    align,
    show,
    hide,
    className = ""
}: StackProps) {
  
    const gapClasses = getGapClasses(gap);
    const showClasses = getDisplayClasses(show);
    const hideClasses = getDisplayClasses(hide, true);

    return (
        <div
            className={[
                "hstack",
                justify ? JUSTIFY[justify] : "",
                align ? ALIGN[align] : "",
                gapClasses,
                showClasses,
                hideClasses,
                className
            ]
            .filter(Boolean)
            .join(" ")}>
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
        lg: 2
    },
    gap = 8,
    className = ""
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
            .join(" ")}>
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

