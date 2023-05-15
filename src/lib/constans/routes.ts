export const routes = {
  ROOT: '/',
  AUTH_NEW_USER: '/auth/new-user',
} as const

export type RoutePath = (typeof routes)[keyof typeof routes]
