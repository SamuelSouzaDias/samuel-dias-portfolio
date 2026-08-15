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
