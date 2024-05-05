import { LucideIcon } from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: LucideIcon;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: any[];
    }
);

export const sideBarNavContent: SidebarNavItem[] = [
  {
    title: "Getting Get Started",
    items: [
      {
        title: "Introduction",
        href: "/projects",
      },
      {
        title: "Ace Battle Mile Web",
        href: "/projects/abm-web",
      },
      {
        title: "Ace Battle Mile Mobile",
        href: "/projects/abm-mobile",
      },
    ],
  },
];
