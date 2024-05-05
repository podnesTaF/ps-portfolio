/** @type {import('next').NextConfig} */
import { withContentlayer } from "next-contentlayer";
export default withContentlayer({
  images: {
    domains: ["storage.googleapis.com"],
  },
});

