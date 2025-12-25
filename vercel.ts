import { type VercelConfig, routes } from '@vercel/config/v1';

export const config: VercelConfig = {
  redirects: [
    routes.redirect('/youtube', 'https://youtube.com/@shivamhwp_'),
    routes.redirect('/github', 'https://github.com/shivamhwp'),
    routes.redirect('/twitter', 'https://x.com/shivamhwp')
  ]
};