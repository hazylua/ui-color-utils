import * as db from '$lib/server/database';

export async function load() {
  return {
    routes: db.getRoutes()
  };
}
