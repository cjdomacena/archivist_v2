
export const Badge = ({ children, className }: { children: React.ReactNode, className?: string; }) => {
    return <span className={"px-2 pt-0.5 pb-1 bg-neutral-700" + " " + className}>{children}</span>;
};