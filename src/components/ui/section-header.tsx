import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export function SectionHeader({ title, className }: SectionHeaderProps) {
  return (
    <div
      data-testid="section-header"
      className={cn("flex items-center mb-6 md:mb-8", className)}
    >
      <span data-testid="gold-motif" className="gold-motif" aria-hidden="true" />
      <h2 className="text-sm font-bold uppercase tracking-widest">{title}</h2>
    </div>
  );
}
