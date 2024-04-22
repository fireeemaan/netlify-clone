import React from "react";
import ContentAnchor from "./ContentAnchor";

const PlatformContent = () => {
  return (
    <div className="absolute flex rounded-xl flex-row mt-3 w-fit h-fit group-hover:border-[#2036A1] shadow-md">
      <div className="flex flex-col border border-black/5 w-96 rounded-l-xl bg-gray-50 p-6 gap-4">
        <h1 className="font-bold text-sm text-black/60">
          THE NETLIFY PLATFORM
        </h1>
        <p>
          <span className="font-bold">Instantly build and deploy</span> your
          sites to our global network from Git. Custom domains, https, deploy
          previews, rollbacks and much more.
        </p>
        <div className="submenu flex flex-col gap-2">
          <ContentAnchor hoverable>Explore The Platform</ContentAnchor>
          <ContentAnchor hoverable>Netlify Connect</ContentAnchor>
          <ContentAnchor hoverable>Netlify Core</ContentAnchor>
          <ContentAnchor hoverable>Netlify Create</ContentAnchor>
        </div>
      </div>
      <div className="flex flex-col w-96 border border-black/5 rounded-r-xl bg-white pt-6 pl-6 pr-10 gap-4">
        <h1 className="font-bold text-black/60">Key Feature</h1>
        <div className="flex flex-row">
          <div className="left-submenu flex flex-col gap-2 ">
            <ContentAnchor hoverable>Platform Primitives</ContentAnchor>
            <ContentAnchor hoverable>Enterprise Team Management</ContentAnchor>
            <ContentAnchor hoverable>Identity</ContentAnchor>
            <ContentAnchor hoverable>SDK</ContentAnchor>
            <ContentAnchor hoverable>Security</ContentAnchor>
            <ContentAnchor hoverable>Edge Functions</ContentAnchor>
          </div>
          <div className="right-submenu flex flex-col gap-2">
            <ContentAnchor hoverable>Analytics</ContentAnchor>
            <ContentAnchor hoverable>Deploy Previews</ContentAnchor>
            <ContentAnchor hoverable>Split Testing</ContentAnchor>
            <ContentAnchor hoverable>Forms</ContentAnchor>
            <ContentAnchor hoverable>Integrations</ContentAnchor>
            <ContentAnchor hoverable>Changelog</ContentAnchor>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformContent;
