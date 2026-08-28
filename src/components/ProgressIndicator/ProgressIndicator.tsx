const sizes = {
    xs: {
        bar: "w-12 h-0.5",
        verticalBar: "w-0.5 h-12",
        dot: "w-1 h-1",
        gap: "gap-1.5"
    },
    sm: {
        bar: "w-16 h-1",
        dot: "w-1.5 h-1.5",
        gap: "gap-2"
    },
    md: {
        bar: "w-20 h-[5px]",
        dot: "w-2 h-2",
        gap: "gap-2.5"
    },
    lg: {
        bar: "w-24 h-1.5",
        dot: "w-2.5 h-2.5",
        gap: "gap-3.5"
    },
    xl: {
        bar: "w-28 h-2",
        dot: "w-3 h-3",
        gap: "gap-4"
    },
};

const colors = {
    primary: {
        bar: "bg-primary",
        dot: "bg-primary"
    },
    gradient: {
        bar: "bg-gradient",
        dot: "bg-[#7049E8]"
    }
};

function ProgressIndicator({
    size = "md",
    direction = "horizontal",
    color = "gradient",
    className = ""
}) {
  const styles = sizes[size] ?? sizes.md;
  const colorStyles = colors[color] ?? colors.gradient;

  const isVertical = direction === "vertical";

  return (
    <div
        className={`
            flex items-center
            ${isVertical ? "flex-col" : "flex-row"}
            ${styles.gap}
            ${className}`}>
        <div
            className={`
            rounded-full
            ${isVertical ? "w-1 h-20" : styles.bar}
            ${colorStyles.bar}`}/>

      <div
            className={`
                shrink-0
                rounded-full
                ${styles.dot}
                ${colorStyles.dot}`}/>
        </div>
    );
}

export default ProgressIndicator;