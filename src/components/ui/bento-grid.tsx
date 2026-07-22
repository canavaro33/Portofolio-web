import { cn } from "@/lib/utils";

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface BentoGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "dark" | "light";
  colSpan?: number;
  rowSpan?: number;
  className?: string;
}

export function BentoGridItem({
  children,
  variant = "dark",
  colSpan,
  rowSpan,
  className,
  ...props
}: BentoGridItemProps) {
  return (
    <div
      className={cn(
        "p-6 md:p-8 animate-slide-up",
        variant === "dark"
          ? "bg-[#1A1A1A] text-[#F8F9FA] border border-neutral-800"
          : "bg-[#F8F9FA] text-neutral-900 border border-neutral-200",
        colSpan && `md:col-span-${colSpan}`,
        rowSpan && `md:row-span-${rowSpan}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
