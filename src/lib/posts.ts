import { getCollection, type CollectionEntry } from "astro:content";

export type PostEntry = CollectionEntry<"posts">;

export async function getSortedPosts() {
  const posts = await getCollection("posts");

  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export function getPostPath(post: PostEntry) {
  const year = post.data.pubDate.getFullYear();
  const month = String(post.data.pubDate.getMonth() + 1).padStart(2, "0");
  const day = String(post.data.pubDate.getDate()).padStart(2, "0");

  return `/${year}/${month}/${day}/${post.data.urlSlug}.html`;
}

export function formatPostDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function getPostExcerpt(post: PostEntry, maxWords = 40) {
  const text = post.body
    .replace(/<[^>]+>/g, " ")
    .replace(/!\[[^\]]*]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]+\)/g, "$1")
    .replace(/`{1,3}[^`]*`{1,3}/g, " ")
    .replace(/[*_>#-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const words = text.split(" ");

  if (words.length <= maxWords) {
    return text;
  }

  return `${words.slice(0, maxWords).join(" ")}...`;
}
