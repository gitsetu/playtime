import { db } from "../models/db.js";

export const aboutController = {
  index: {
    handler: async function (request, h) {
      // const playlists = await db.playlistStore.getAllPlaylists();
      const viewData = {
        title: "About Playtime",
        // playlists: playlists,
      };
      return h.view("about-view", viewData);
    },
  },
};
