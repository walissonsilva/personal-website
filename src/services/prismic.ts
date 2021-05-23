import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

// interface IPortfolioProjectData {
//   data: {
//     title: {
//       text: string
//     }[],
//     image_url: {
//       url: string,
//     },
//     description: {
//       text: 
//     }
//   }
// }

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(
    process.env.PRISMIC_ENDPOINT,
    {
      req,
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    }
  );

  return prismic;
}

export async function getPortfolioProjects() {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'portfolio-project')
  ], {
    // fetch: ['publication.title', 'publication.content'],
    // pageSize: 100,
  });

  const portfolioProjects = response.results.map(project => {
    return {
      id: project.uid,
      title: project.data.title[0].text,
      imageUrl: project.data.image_url.url,
      description: RichText.asHtml(project.data.description),
      projectUrl: project.data.project_url.url,
    }
  });

  return portfolioProjects;
}