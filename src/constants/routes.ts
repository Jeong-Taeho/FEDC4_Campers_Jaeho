export const ROUTES = {
  MAIN: '/',
  NOT_FOUND: '/not-found',
  AUTH: '/auth',
  SEARCH: '/search',
  SEARCH_All: '/search/:keyword',
  CREATE_POST: '/createpost',
  USER_PROFILE: '/users/:userId',
  DETAIL: '/post/:postId',
  USER_INFO: (userId: string) => `/users/${userId}`,
  POST_DETAIL: (postId: string) => `/post/${postId}`,
  FOLLOW_BY_USER_ID: (userId: string) => `/follow/${userId}`,
  FOLLOWER_BY_USER_ID: (userId: string) => `/follower/${userId}`,
};
