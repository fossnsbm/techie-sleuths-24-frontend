"use client";

import { BarList } from "@tremor/react";
import { useEffect, useState } from "react";

import Image from "next/image";

import axios from "axios";

interface TeamData {
  rank: number;
  name: string;
  value: number;
  href: string;
}

export default function Page() {
  const [data, setData] = useState<TeamData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://techiesleuths-backend-webapp-prod.azurewebsites.net/api/v1/score/all-teams?all_details=true&high_to_low=true"
        );

        if (response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = response.data.scoreDetails;

        const transformedData: TeamData[] = result.map(
          (item: any, index: number) => ({
            rank: index + 1,
            name: `${index + 1}. ${item.team.team_name}`,
            value: item.score.score,
            href: item.team.team_profile_img_url,
          })
        );

        setData(transformedData);

        console.log(response);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }

    fetchData();
  }, []);

  const style = {
    boxShadowLittle: "3px 3px #000",
    boxShadowLarge: "8px 8px #000",
    littleBoxStyle: "absolute aspect-square w-3 bg-[#A66224]",
  };

  const renderData = data.slice(0, 29).map((item) => (
    <div key={item.rank} className="mt-2">
      <BarList data={[item]} className="!tremor-metric mt-2" />
    </div>
  ));

  return (
    <div className="relative min-h-screen w-full bg-slate-900">
      <Image
        alt="Mountains"
        src="/assets/bg-img.webp"
        layout="fill"
        objectFit="cover"
      />
      <div
        style={{
          boxShadow: style.boxShadowLarge,
        }}
        className="relative mx-7 border-8 border-[#A66224] bg-[#FEF3C7] px-10 py-10 md:mx-auto md:max-w-5xl"
      >
        <p className="mt-4 flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          <span>Team Name</span>
          <span>Points</span>
        </p>
        {renderData}
      </div>
    </div>
  );
}
