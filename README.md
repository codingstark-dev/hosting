import { getPostsTable } from '../config/notion';

// function page() {
//   return <div></div>;
// }
// export async function getStaticPaths() {
//   const project = await getPostsTable('01f14251b4f741a2bbc526786725b5f5');

//   return {
//     paths:
//       project.map((p: any) => {
//         return `/${p.slug} `;
//       }) || [],
//     fallback: 'blocking',
//   };
// }
// export async function getStaticProps() {
//   const project = await getPostsTable('01f14251b4f741a2bbc526786725b5f5');
//   console.log(project);
//   if (!project) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: {
//       project,
//     },
//     revalidate: 10,
//   };
// }

// export default page;
