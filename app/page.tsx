"use client"

import Editor from "@/components/editor"
import Loading from "@/components/loading"
import { LayerStore } from "@/lib/layer-store"
import { ImageStore } from "@/lib/store"
export default function Home() {
  return (
    <>
    <div className="flex justify-center items-center mt-2">
    <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
    <span className="font-medium">Warning alert!</span> Godara&apos;s Projects are into testing mode so you might face some issues 
    </div>
    </div>
    <ImageStore.Provider
      initialValue={{
        activeTag: "all",
        activeColor: "green",
        activeImage: "",
      }}
    >
      <LayerStore.Provider
        initialValue={{
          layerComparisonMode: false,
          layers: [
            {
              id: crypto.randomUUID(),
              url: "",
              height: 0,
              width: 0,
              publicId: "",
            },
          ],
        }}
      >
        <Editor />
      </LayerStore.Provider>
    </ImageStore.Provider>
    </>
  )
}
