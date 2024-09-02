import { BlogAll, BlogPost, Footer, Header } from "../parts";

export const AllBlogPage = () => {
  return (
    <main className="flex flex-col gap-9">
      <Header />
      <BlogAll />
      <Footer />
    </main>
  );
};
