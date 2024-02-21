import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";


import { apiVersion, projectId, dataset } from "./sanity/env";
import Landing from "./sanity/Landing";


export default defineConfig({
  name: "default",
  title: "Food App",
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: {
    types: [Landing],
  },
});

