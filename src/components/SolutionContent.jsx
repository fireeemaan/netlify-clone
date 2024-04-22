import React from "react";
import ContentAnchor from "./ContentAnchor";

const SolutionContent = () => {
  return (
    <div className="absolute flex rounded-xl flex-row mt-3 w-fit h-fit group-hover:border-[#2036A1] shadow-md">
      <div className="flex flex-col rounded-l-xl border border-black/5 w-48 bg-gray-50 gap-4 p-6">
        <h1 className="font-bold text-sm text-black/60">WHY NETLIFY?</h1>
        <div className="flex flex-col gap-2">
          <ContentAnchor hoverable>Customers</ContentAnchor>
          <ContentAnchor hoverable>Case Studies</ContentAnchor>
          <ContentAnchor hoverable>ROI Calculator</ContentAnchor>
          <ContentAnchor hoverable>Security at Netlify</ContentAnchor>
          <ContentAnchor hoverable>Whitepaper</ContentAnchor>
        </div>
      </div>
      <div className="flex flex-col w-96 rounded-r-xl">
        <div className="flex flex-col border rounded-tr-xl border-black/5 bg-white gap-4 p-6">
          <h1 className="font-bold text-sm text-black/60">USE CASES</h1>
          <div className="flex flex-col gap-2">
            <ContentAnchor hoverable>Company Websites</ContentAnchor>
            <ContentAnchor hoverable>E-commerce</ContentAnchor>
            <ContentAnchor hoverable>Web Apps</ContentAnchor>
            <ContentAnchor hoverable>Large Sites</ContentAnchor>
          </div>
        </div>
        <div className="flex flex-col border rounded-br-xl border-black/5 bg-white gap-4 p-5 ">
          <h1 className="font-bold text-sm text-black/60">
            DONT SEE YOUR SOLUTION?
          </h1>
          <p>
            <span className="font-bold">Don’t see your solution?</span> We can
            help. <ContentAnchor>Chat with a Netlify expert</ContentAnchor>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionContent;
