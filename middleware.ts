export { default } from 'next-auth/middleware';

export const config = {
    matcher: [
        '/homepage',
        '/cart',
        '/admin',
        '/vendors',
    ]
}