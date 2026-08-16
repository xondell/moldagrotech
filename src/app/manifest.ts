import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest { return { name:"MoldAgroTech", short_name:"MoldAgroTech", description:"Agricultural technology from Moldova.", start_url:"/ro", display:"standalone", background_color:"#f5f3ec", theme_color:"#0b2419" }; }
