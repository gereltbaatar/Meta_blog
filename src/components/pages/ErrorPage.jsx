import { Error404, Footer, Header } from "../parts";

export const ErrorPage = () => {
  return (
    <main className="w-full h-screen flex flex-col justify-between">
      <div></div>
      <Header />
      <Error404 />
      <Footer />
    </main>
  );
};
