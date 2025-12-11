declare module 'js-cookie' {
  export interface CookieAttributes {
    expires?: number | Date | undefined;
    path?: string | undefined;
    domain?: string | undefined;
    secure?: boolean | undefined;
    sameSite?: 'Lax' | 'Strict' | 'None' | undefined;
  }

  export interface CookiesStatic {
    get(name: string): string | undefined;
    get(): { [key: string]: string };
    set(name: string, value: string | object, attributes?: CookieAttributes): void;
    remove(name: string, attributes?: CookieAttributes): void;
  }

  const Cookies: CookiesStatic;
  export default Cookies;
}
