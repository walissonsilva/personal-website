import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(process.env.PRISMIC_ENDPOINT, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return prismic;
}

export async function getPortfolioProjects() {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "portfolio-project")],
    {
      // fetch: ['publication.title', 'publication.content'],
      // pageSize: 100,
      orderings: "[document.first_publication_date desc]",
    }
  );

  const portfolioProjects = response.results.map((project) => {
    return {
      id: project.uid,
      title: project.data.title[0].text,
      imageUrl: project.data.image_url.url,
      description: RichText.asHtml(project.data.description),
      projectUrl: project.data.project_url.url,
    };
  });

  return portfolioProjects;
}

export async function getPostsToHome() {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "post")],
    {
      // fetch: [
      //   'post.uid',
      //   'post.level',
      //   'post.cover',
      //   'post.title',
      //   'post.subtitle'
      // ],
      pageSize: 6,
      orderings: "[document.first_publication_date desc]",
    }
  );

  const qntWordsReadPerMinute = 150;

  const posts = response.results.map((post) => {
    const qntWordsOnPost = post.data.content.reduce((wordsContent, content) => {
      if (content.text) {
        return (wordsContent += content.text.split(" ").length);
      }

      return wordsContent;
    }, 0);

    return {
      id: post.uid,
      title: post.data.title[0].text,
      subtitle: post.data.subtitle[0].text,
      imageUrl: post.data.cover.url,
      level: post.data.level,
      readingTime: Math.ceil(qntWordsOnPost / qntWordsReadPerMinute),
      updatedAt: new Date(post.first_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }
      ),
    };
  });

  return posts;
}

export async function getPostsToBlogPage() {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "post")],
    { orderings: "[document.first_publication_date desc]" }
  );

  const qntWordsReadPerMinute = 150;

  const posts = response.results.map((post) => {
    const qntWordsOnPost = post.data.content.reduce((wordsContent, content) => {
      if (content.text) {
        return (wordsContent += content.text.split(" ").length);
      }
      return wordsContent;
    }, 0);

    return {
      id: post.uid,
      title: post.data.title[0].text,
      subtitle: post.data.subtitle[0].text,
      imageUrl: post.data.cover?.url ?? "",
      level: post.data.level,
      readingTime: Math.ceil(qntWordsOnPost / qntWordsReadPerMinute),
      updatedAt: new Date(post.first_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }
      ),
    };
  });

  return posts;
}

export async function getPost(id: string) {
  const prismic = getPrismicClient();

  const response = await prismic.getByUID("post", id, {});

  const qntWordsReadPerMinute = 150;
  const qntWordsOnPost = response.data.content.reduce(
    (wordsContent, content) => {
      if (content.text) {
        return (wordsContent += content.text.split(" ").length);
      }

      return wordsContent;
    },
    0
  );

  const readingTime = Math.ceil(qntWordsOnPost / qntWordsReadPerMinute);

  const post = {
    id,
    title: RichText.asText(response.data.title),
    subtitle: RichText.asText(response.data.subtitle),
    imageUrl: response.data.cover.url,
    level: response.data.level,
    content: RichText.asHtml(response.data.content),
    readingTime,
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  return post;
}

export async function getCourses() {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "course")],
    { orderings: "[document.first_publication_date desc]" }
  );

  const courses = response.results.map((course) => {
    return {
      id: course.uid,
      title: course.data.title[0].text,
      youtubeUrl: course.data.youtube_link?.url,
      imageUrl: course.data.thumbnail?.url ?? "",
      category: course.data.category,
      description: RichText.asHtml(course.data.description),
      updatedAt: new Date(course.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }
      ),
    };
  });

  return courses;
}
