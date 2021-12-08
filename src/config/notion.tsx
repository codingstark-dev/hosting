const books = process.env.NOTION_BOOKS;
const bookmarks = process.env.NOTION_BOOKMARKS;
const techstack = process.env.NOTION_TECHSTACK;
const hostingpages = process.env.HOSTED_PROJECTS;

export const getBooksTable = async () =>
  fetch(`https://notion-api.splitbee.io/v1/table/${books}`).then((res) =>
    res.json()
  );

export const getBookmarksTable = async () =>
  fetch(`https://notion-api.splitbee.io/v1/table/${bookmarks}`).then((res) =>
    res.json()
  );
export const getPostsTable = async (page:any) =>
  fetch(`https://notion-api.splitbee.io/v1/table/${page}`).then((res) =>
    res.json()
  );

export const getPageBlocks = async (pageId: any) =>
  fetch(`https://notion-api.splitbee.io/v1/page/${pageId}`).then((res) =>
    res.json()
  );

export const getTechStack = async () =>
  fetch(`https://notion-api.splitbee.io/v1/table/${techstack}`).then((res) =>
    res.json()
  );
export const getHostingPages = async () =>
  fetch(`https://notion-api.splitbee.io/v1/table/${hostingpages}`).then((res) =>
    res.json()
  );
