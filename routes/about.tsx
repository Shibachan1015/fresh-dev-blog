// routes/about.tsx

/** @jsx h */
import { h } from "preact";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req,ctx) {
	const resp = await ctx.render();
	resp.headers.set("X-Custom-Header","Hello");
	return resp;
  },
};

export default function AboutPage () {
  return (
    <main>
	  <h1> About </h1>
	  <p> ・奈良県の草履屋４代目　コロナで引きこもっている間にプログラミングに興味を持ち独学で始める。</p>
	</main>
  );
}

