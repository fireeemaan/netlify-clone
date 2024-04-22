import React from "react";
import ContentAnchor from "./ContentAnchor";

const StartBuildingContent = () => {
  return (
    <div className="absolute flex rounded-xl flex-row mt-3 w-fit h-fit group-hover:border-[#2036A1] shadow-md">
      <div className="flex flex-col rounded-l-xl border border-black/5 w-52 bg-gray-50 gap-4 p-6">
        <h1 className="title font-bold text-sm text-black/60">
          WHERE TO START
        </h1>
        <div className="submenu flex flex-col gap-2">
          <ContentAnchor hoverable>Docs</ContentAnchor>
          <ContentAnchor hoverable>Templates</ContentAnchor>
          <ContentAnchor hoverable>Resource & Guides</ContentAnchor>
          <ContentAnchor hoverable>Composable Commerce 101</ContentAnchor>
          <ContentAnchor hoverable>Work with a Partner Agency</ContentAnchor>
        </div>
      </div>
      <div className="flex flex-col rounded-r-xl border border-black/5 w-80 bg-white gap-4 p-6">
        <h1 className="title font-bold text-sm text-black/60">
          PROJECT KICKSTARTS
        </h1>
        <div className="flex flex-row gap-16">
          <div className="flex flex-col gap-2">
            <ContentAnchor hoverable>Next.js</ContentAnchor>
            <ContentAnchor hoverable>Gatsby</ContentAnchor>
            <ContentAnchor hoverable>Jamstack</ContentAnchor>
            <ContentAnchor hoverable>Wordpress</ContentAnchor>
            <ContentAnchor hoverable>React</ContentAnchor>
          </div>
          <div className="flex flex-col gap-2">
            <ContentAnchor hoverable>Nuxt</ContentAnchor>
            <ContentAnchor hoverable>Vue</ContentAnchor>
            <ContentAnchor hoverable>Sitecore</ContentAnchor>
            <ContentAnchor hoverable>Svelte</ContentAnchor>
            <ContentAnchor hoverable>+More</ContentAnchor>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartBuildingContent;
