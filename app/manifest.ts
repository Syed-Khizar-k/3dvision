import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
 return {
  name: "3D Vision Edge",
  short_name: "3D Vision",
  description:
   "Premium 3D Architectural Visualization, Interior Design, and Rendering Services in Lahore, Pakistan.",
  start_url: "/",
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#ffffff",
  icons: [
   {
    src: "/favicon.ico",
    sizes: "any",
    type: "image/x-icon",
   },
   {
    src: "/logo.jpg", // Assuming logo.jpg acts as icon, ideally should be png 192/512
    sizes: "192x192",
    type: "image/jpeg",
   },
  ],
 };
}
