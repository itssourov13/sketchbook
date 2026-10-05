import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../data/site';

export async function GET() {
  const posts = (await getCollection('journal', ({ data }) => data.status === 'published'))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: `${site.name} — Journal`,
    description: 'Technical notes, design decisions, experiments, and lessons from the workbench.',
    site: import.meta.env.PUBLIC_SITE_URL || 'https://example.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/journal/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
