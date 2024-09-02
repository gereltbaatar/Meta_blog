import { BlogPost, Contents, Footer, Header, Trending } from "../parts";

export const HomePage = () => {
  return (
    <main className="flex flex-col gap-[100px]">
      <Header />
      <Contents />
      <Trending />
      <BlogPost />
      <Footer />
    </main>
  );
};
