const sizes = {
  sm: {
    bar: "w-16 h-1",
    dot: "w-1.5 h-1.5",
    gap: "gap-2",
  },
  md: {
    bar: "w-20 h-[5px]",
    dot: "w-2 h-2",
    gap: "gap-2.5",
  },
  lg: {
    bar: "w-24 h-1.5",
    dot: "w-2.5 h-2.5",
    gap: "gap-3.5",
  },
  xl: {
    bar: "w-28 h-2",
    dot: "w-3 h-3",
    gap: "gap-4",
  },
};

function ProgressIndicator({ size = "md" }) {
    const styles = sizes[size] ?? sizes.md;

    return (
        <div className={`flex items-center ${styles.gap}`}>
            <div
                className={`
                    ${styles.bar}
                    rounded-full
                    bg-gradient
                `}/>

            <div
                className={`
                    ${styles.dot}
                    shrink-0
                    rounded-full
                    bg-[#7049E8]
                `}
            />
        </div>
    );
}

export default ProgressIndicator;