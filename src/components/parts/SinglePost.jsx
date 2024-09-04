export const SinglePost = ({ article }) => {
  console.log(article, "ajilah sigle blog");
  console.log(article.title);

  return (
    <main>
      <div className="container m-auto">
        <div className="px-20 flex justify-center">
          <div className="flex flex-col gap-8 max-w-[800px]">
            <div className="flex flex-col gap-5">
              <h1 className="self-stretch font-workSans font-semibold not-italic text-4xl text-[#181A2A]">
                {article.title}
              </h1>
              <div className="flex items-center gap-6">
                <div className="flex gap-3 items-center">
                  <div className="rounded-[50%] bg-[#F4F4F5]">
                    <img
                      // src={article.user.profile_image}
                      alt=""
                      className="w-7 h-7 rounded-[50%]"
                    />
                  </div>
                  <p className="font-workSans font-medium not-italic text-sm text-[#696A75]">
                    {/* {article.user.name} */}
                  </p>
                </div>
                <p className="font-workSans font-normal not-italic text-sm text-[#696A75]">
                  August 20, 2022
                </p>
              </div>
            </div>

            <div className="bg-[#F4F4F5] w-full h-auto rounded-xl">
              <img
                // src={article.cover_image}
                alt=""
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="">
              <p className="font-soerceSerif font-normal not-italic text-xl leading-8 text-[#3B3C4A]">
                Traveling is an enriching experience that opens up new horizons,
                exposes us to different cultures, and creates memories that last
                a lifetime. However, traveling can also be stressful and
                overwhelming, especially if you don't plan and prepare
                adequately. In this blog article, we'll explore tips and tricks
                for a memorable journey and how to make the most of your
                travels. One of the most rewarding aspects of traveling is
                immersing yourself in the local culture and customs. This
                includes trying local cuisine, attending cultural events and
                festivals, and interacting with locals. Learning a few phrases
                in the local language can also go a long way in making
                connections and showing respect.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="self-stretch font-workSans font-semibold not-italic text-2xl leading-7 text-[#181A2A]">
                Research Your Destination
              </h1>
              <p className="">
                Before embarking on your journey, take the time to research your
                destination. This includes understanding the local culture,
                customs, and laws, as well as identifying top attractions,
                restaurants, and accommodations. Doing so will help you navigate
                your destination with confidence and avoid any cultural faux
                pas. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. In hendrerit gravida rutrum quisque non tellus orci ac
                auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit
                amet. Aenean euismod elementum nisi quis eleifend quam
                adipiscing vitae. Viverra adipiscing at in tellus.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="self-stretch font-workSans font-semibold not-italic text-2xl leading-7 text-[#181A2A]">
                Plan Your Itinerary
              </h1>
              <p className="">
                While it's essential to leave room for spontaneity and
                unexpected adventures, having a rough itinerary can help you
                make the most of your time and budget. Identify the must-see
                sights and experiences and prioritize them according to your
                interests and preferences. This will help you avoid
                overscheduling and ensure that you have time to relax and enjoy
                your journey. Vitae sapien pellentesque habitant morbi
                tristique. Luctus venenatis lectus magna fringilla. Nec
                ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non
                sodales neque sodales ut etiam sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
