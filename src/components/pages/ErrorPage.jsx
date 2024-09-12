import MainLayout from "../layout/MainLayout";
import { Error404 } from "../parts";

export const ErrorPage = () => {
  return (
    <main className="w-screen h-screen">
      <MainLayout>
        <div></div>
        <Error404 />
      </MainLayout>
    </main>
  );
};
