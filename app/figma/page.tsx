import {Blockquote} from "@/components/docs/components/blockquote";
import {FigmaButton} from "@/components/figma-button";
import { LayoutBackground } from "@/components/layout/layout-background";
import {ScriptProviders} from "@/components/scripts/script-providers";

export default function FigmaPage() {
  return (
    <>
      <main className="relative container mx-auto max-w-7xl z-10 px-6 min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow">
        <section className="w-full flex flex-col items-center lg:px-16 mt-12 gap-6">
          <div className="text-center max-w-xl">
            <h1 className="mb-2 font-bold text-4xl">NextUI Figma Kit</h1>
            <h5 className="text-default-500 text-lg">
              A Figma file that contains the basis of the NextUI design system to help you design
              your applications.
            </h5>
          </div>

          <iframe
            className="aspect-video w-full border border-transparent dark:border-default-200/50 object-fit rounded-xl shadow-lg"
            height="600"
            src="https://embed.figma.com/file/1267584376234254760/hf_embed?community_viewer=true&embed_host=nextui"
            title="NextUI Figma Kit"
            width="800"
          />
          <div className="text-center max-w-2xl m-auto">
            <FigmaButton />
            <Blockquote color="warning">
              This file is still in development and will be continuously updated.
            </Blockquote>
          </div>
        </section>
      </main>

      <LayoutBackground />
      <ScriptProviders />
    </>
  );
}
