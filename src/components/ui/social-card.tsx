import { cn } from "@/lib/utils";
import { Linkedin, Github, MessageCircle } from "lucide-react";

type Platform = "linkedin" | "github" | "whatsapp";

interface SocialCardProps {
  label: string;
  href: string;
  platform: Platform;
  className?: string;
}

const platformIcons: Record<Platform, React.ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  github: Github,
  whatsapp: MessageCircle,
};

export function SocialCard({
  label,
  href,
  platform,
  className,
}: SocialCardProps) {
  const Icon = platformIcons[platform];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "gold-border-hover flex items-center gap-4 p-5 transition-all duration-300 group",
        className
      )}
    >
      <span
        data-testid={`social-icon-${platform}`}
        className="text-gold group-hover:scale-110 transition-transform duration-300"
      >
        <Icon className="w-6 h-6" />
      </span>
      <span className="text-sm font-medium tracking-wide">{label}</span>
    </a>
  );
}
