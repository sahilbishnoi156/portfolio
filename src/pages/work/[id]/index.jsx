/* eslint-disable @next/next/no-img-element */
import Main from "@/Components/Main/Main";
import { data } from "@/Components/Projects/projectData";
import ScrollToTop from "@/Components/ScrollToTop/ScrollToTop";
import { useRouter } from "next/router";
import React from "react";


export default function Index() {
  const router = useRouter();
  const id = router.query.id;
  const details = data.find((project) => project.id === id);
  return (
    <Main>
        <ScrollToTop/>
      <div className="mb-16">
        <div className="md:h-screen h-[40vh] w-screen md:px-16 px-4 md:pb-16 pb-4">
          <img
            src={details?.link}
            alt="notFound"
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>
        <div className="md:px-16 px-4">
          <h1 className="md:text-[4vw] text-[9vw]">{details?.title} :</h1>
          <p className="md:ml-16 ml-4 md:text-[1.8vw] text-[6vw] text-gray-300">
            {details?.description}
          </p>
          <ul className="mt-6 md:ml-16 ml-4 flex flex-col gap-2">
            {details?.points.map((point, index) => {
              return <li key={point}>{index+1}) {point}</li>;
            })}
          </ul>
        </div>
      </div>
    </Main>
  );
}
