

export type SubChildren = {
  href: string;
  label: string;
  active: boolean;
  children?: SubChildren[];
};
export type Submenu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus?: Submenu[];
  children?: SubChildren[];
};

export type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
  id: string;
};

export type Group = {
  groupLabel: string;
  menus: Menu[];
  id: string;
};

export function getMenuList(pathname: string, t: any): Group[] {

  return [
    {
      groupLabel: t("dashboard"),
      id: "dashboard",
      menus: [
        {
          id: "dashboard",
          href: "/dashboard",
          label: t("dashboard"),
          active: pathname.includes("/dashboard"),
          icon: "heroicons-outline:home",
          submenus: [],
        },
      ],
    },
    {
      groupLabel: t("management"),
      id:"management",
      menus:[
        {
          id: "vendors",
          href: "/vendors",
          label: t("vendors"),
          active: pathname.includes("/vendors"),
          icon: "heroicons-outline:user-group",
          submenus: [
            {
              href: "/vendors/vendor-list",
              label: t("vendorList"),
              active: pathname.includes("/vendors/vendor-list"),
              icon: "heroicons-outline:user-group",
              children: [], 
            }, 
          ],
        },
      ],
    },
  ];
}
export function getHorizontalMenuList(pathname: string, t: any): Group[] {
  return [
    {
      groupLabel: t("dashboard"),
      id: "dashboard",
      menus: [
        {
          id: "dashboard",
          href: "/",
          label: t("dashboard"),
          active: pathname.includes("/"),
          icon: "heroicons-outline:home",
          submenus:[],
        },
      ],
    },
    {
      groupLabel: t("management"),
      id:"management",
      menus:[
        {
          id: "vendors",
          href: "/vendors",
          label: t("vendors"),
          active: pathname.includes("/vendors"),
          icon: "heroicons-outline:user-group",
          submenus: [],
        },
      ],
    },
  ];
}


