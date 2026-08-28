import { cn } from "@/lib/utils";

import {
    CHIP_SIZE_MAP,
    CHIP_VARIANT_MAP
} from "./Chip.maps";

import type {
    ChipSize,
    ChipVariant
} from "./Chip.types";

export function getChipClassName(
    variant: ChipVariant,
    size: ChipSize,
    className?: string
) {
    return cn(
        "w-fit border inline-flex items-center gap-1",
        "rounded-full font-medium transition-colors",
        CHIP_VARIANT_MAP[variant],
        CHIP_SIZE_MAP[size],
        className
    );
}