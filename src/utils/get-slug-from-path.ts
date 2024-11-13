export default function getSlugFromPath(pathname: string) {
  return pathname.split("/").at(-1)?.replace(".md", "");
}
