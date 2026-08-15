import {
  Activity,
  LayoutDashboard,
  MapPinned,
  Route,
  ShieldCheck,
  TrendingDown,
  Unlock,
  type LucideIcon,
} from "lucide-react";

// Shared navy-to-gold diagonal gradient used for project covers and, in a
// lower-opacity form, other empty-state panels that borrow the same language.
export const coverGradient = "linear-gradient(135deg, #0B1E3D 0%, #3C3014 100%)";

export const projectCoverIcons: Record<string, LucideIcon> = {
  "core-analytics-platform-migration": LayoutDashboard,
  "payroll-integrity-analytics": ShieldCheck,
  "client-risk-dashboard": TrendingDown,
  "field-visit-tracking-system": Route,
  "internal-bi-portfolio-analytics-panel": Activity,
  "asset-tracking-dashboard": MapPinned,
  "data-democratization-governance-contribution": Unlock,
};

// These icons read as visually thin at the default size, so their cover
// treatment renders ~12% larger to hold their own next to bolder icons.
export const largeProjectCoverIcons = new Set([
  "field-visit-tracking-system",
  "data-democratization-governance-contribution",
]);
