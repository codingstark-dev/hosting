import { GetStaticPropsContext } from "next";
import { getHostingPages, getPostsTable } from "../config/notion";
import { getPageBlocks } from "./../config/notion";

function page({ pages }: { pages: any }) {
  return <div></div>;
}
export async function getStaticPaths() {
  const project = await getPostsTable("01f14251b4f741a2bbc526786725b5f5");

  return {
    paths: project.map((p: any) => { return `/${p.slug} ` })||[],
    fallback: "blocking",
  };
}
export async function getStaticProps(context: GetStaticPropsContext) {
  const project = await getPostsTable("01f14251b4f741a2bbc526786725b5f5");
  console.log(project);
  if (!project) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      project,
    },
    revalidate: 10,
  };
}

export default page;
