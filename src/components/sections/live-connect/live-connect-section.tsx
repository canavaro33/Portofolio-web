import { SectionHeader } from "@/components/ui/section-header";
import { SocialCard } from "@/components/ui/social-card";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/canavaro-daud-139913279",
    platform: "linkedin" as const,
  },
  {
    label: "GitHub",
    href: "https://github.com/canavaro33",
    platform: "github" as const,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/085781169656",
    platform: "whatsapp" as const,
  },
];

export function LiveConnectSection() {
  return (
    <div
      data-testid="live-connect-section"
      className="bg-matte-black text-off-white p-6 md:p-8 md:col-span-3 animate-slide-up animate-delay-200"
    >
      <SectionHeader title="Live Connect" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {SOCIAL_LINKS.map((link) => (
          <SocialCard
            key={link.platform}
            label={link.label}
            href={link.href}
            platform={link.platform}
          />
        ))}
      </div>
    </div>
  );
}
