declare module '@topcoder/micro-frontends-navbar-app' {
  export const login: any;
  export const logout: any;
  export const setAppMenu: any;
  export const getAuthUserTokens: any;
  export const getAuthUserProfile: any;
}

declare module "*.svg" {
  const content: any;
  export default content;
}