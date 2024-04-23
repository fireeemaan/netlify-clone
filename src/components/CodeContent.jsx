import React from "react";
import { TbZoomMoney } from "react-icons/tb";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";

const classes = "w-[27rem] h-[20rem] p-4 bg-[#1a205d]";
const codeStyle = tomorrowNightBlue;

const ECommerce = () => {
  const CodeString = `import type { Config, Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  return Response.json({ geo: context.geo });
};

export const config: Config = {
  path: "/geolocation",
};
  `;

  return (
    <div className={classes}>
      <SyntaxHighlighter language="javascript" style={codeStyle}>
        {CodeString}
      </SyntaxHighlighter>
    </div>
  );
};

const AIChatbot = () => {
  const CodeString = `const stream = await getChatStream(
        {
          ...appConfig.apiConfig,
          user: context.ip,
          messages: [{ role: "system", content: prompt }, ...messages],
        },
        appConfig.OPENAI_API_KEY ?? ""
      );
      return new Response(stream, {
        headers: { "Content-Type": "text/plain" },`;
  return (
    <div className={classes}>
      <SyntaxHighlighter language="javascript" style={codeStyle}>
        {CodeString}
      </SyntaxHighlighter>
    </div>
  );
};

const LandingPage = () => {
  const CodeString = `---
const homepage = await getEntryBySlug("homepage", "index");
const { banner, key_features, service, testimonial } = homepage.data;
---

<Base>
  <Banner banner={banner} />
  <KeyFeatures key_features={key_features} />
  <Service service={service} />
  <Testimonial testimonial={testimonial} />`;
  return (
    <div className={classes}>
      <SyntaxHighlighter language="javascript" style={codeStyle}>
        {CodeString}
      </SyntaxHighlighter>
    </div>
  );
};

const EdgeFunction = () => {
  const CodeString = `import type { Config, Context } from "@netlify/edge-functions";

    export default async (request: Request, context: Context) => {
      return Response.json({ geo: context.geo });
    };
    
    export const config: Config = {
      path: "/geolocation",
    };
    `;
  return (
    <div className={classes}>
      <SyntaxHighlighter language="javascript" style={codeStyle}>
        {CodeString}
      </SyntaxHighlighter>
    </div>
  );
};

export { ECommerce, AIChatbot, LandingPage, EdgeFunction };
