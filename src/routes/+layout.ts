import { redirect } from '@sveltejs/kit';

export const ssr = false;

export async function load({ route }) {
  if(route.id !== '/login') {
    throw redirect(302, '/login');
  }
}
