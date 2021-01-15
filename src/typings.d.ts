declare module '@topcoder/micro-frontends-navbar-app' {
  export const login: any;
  export const logout: any;
  export const setAppMenu: any;
  export const getAuthUserTokens: any;
  export const getAuthUserProfile: any;
  export const disableSidebarForRoute: any;
  export const enableSidebarForRoute: any;
  export const setNotificationPlatform: (platform: string) => void;
  export const PLATFORM: { [key: string]: string };
}

declare module "*.svg" {
  const content: any;
  export default content;
}
