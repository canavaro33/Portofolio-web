import { cn } from "@/lib/utils";

export function NoiseOverlay({ className }: { className?: string }) {
  return (
    <div
      data-testid="noise-overlay"
      aria-hidden="true"
      className={cn(
        "noise-overlay fixed inset-0 z-50 pointer-events-none",
        className
      )}
    />
  );
}
