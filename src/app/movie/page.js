import React from "react";
import Link from "next/link";
import MovieCard from "../Components/MovieCard";
import style from "@/app/styles/common.module.css";

const page = async () => {

  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cb10548f74msh711a638f9c9f2d8p1a7f06jsnd26b29ab46d0",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(main_data.jawSummary);

  return (
    <>
      <section className={style.movieSection}>
        <div className={style.container}>
          <h1>Series & Movies </h1>
          <div className={style.card_section}>
            {main_data.map((curr) => {
              return <MovieCard key={curr.id} {...curr} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
