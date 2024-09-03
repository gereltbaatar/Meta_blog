// const TextCallback = () => {
//   // function orderPizza(name, callback) {
//   //   console.log("xahialga huleen avlaa");
//   //   setTimeout(function () {
//   //     let msg = `tani ${name} pizza belen bolloo ! Tanii pizza hurgeltend garlaa`;
//   //     callback(msg);
//   //   }, 3000);
//   // }
//   // orderPizza("Miniii pizaa", printDelvery);

//   // function printDelvery(message) {
//   //   console.log(message);
//   // }

//   return <div>callback page</div>;
// };

// export default TextCallback;

// import { Header } from "../header/Header";
// import { Footer } from "../footer/Footer";
// import { useEffect, useState } from "react";

// const ArticleCard = ({ article }) => {
//   const publishedDate = new Date(article.published_at);

//   const generatMonth = (month) => {
//     switch (month) {
//       case 1:
//         return "January";
//       case 2:
//         return "February";
//       case 3:
//         return "March";
//       case 4:
//         return "April";
//       case 5:
//         return "May";
//       case 6:
//         return "June";
//       case 7:
//         return "July";
//       case 8:
//         return "August";
//       case 9:
//         return "September";
//       case 10:
//         return "October";
//       case 11:
//         return "November";
//       case 12:
//         return "December";
//     }
//   };

//   return (
//     <div className="w-[400px] h-[475px] border-[#E8E8EA] rounded-xl border p-4 flex flex-col justify-between">
//       <div className="flex flex-col gap-4">
//         <div
//           style={{
//             backgroundImage: `url(${article.cover_image})`,
//             width: "100%",
//             height: "240px",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             borderRadius: "6px",
//           }}
//         ></div>
//         <div className="w-[100px] h-[30px] bg-[#4B6BFB0D] flex justify-center items-center rounded-md text-[#4B6BFB]">
//           {article.tag_list[0]}
//         </div>
//         <div className="overflow-hidden h-[100px]">
//           <p className="text-2xl font-semibold text-ellipsis ">
//             {article.description}
//           </p>
//         </div>
//       </div>

//       <p className=" text-[#97989F]">
//         {publishedDate.getFullYear()}-{generatMonth(publishedDate.getMonth())}-
//         {publishedDate.getDay()}
//       </p>
//     </div>
//   );
// };

// export default function HomePage() {
//   const [articles, setArticles] = useState([]);

//   const fetchData = () => {
//     fetch("https://dev.to/api/articles")
//       .then((response) => response.json())
//       .then((data) => setArticles(data));
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="flex flex-col items-center w-full">
//       <Header />
//       <div className="container flex flex-wrap justify-between gap-5 max-w-[1280px]">
//         {articles.map((article) => {
//           return <ArticleCard article={article} />;
//         })}
//       </div>

//       <Footer />
//     </div>
//   );
// }
