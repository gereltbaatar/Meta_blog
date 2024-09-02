import { Error404, Footer, Header } from "../parts";

export const ErrorPage = () => {
  return (
    <main className="w-full h-screen flex flex-col justify-between">
      <Header />
      <Error404 />
      <Footer />
    </main>
  );
};
