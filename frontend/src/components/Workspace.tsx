"use client";

import { useState } from "react";
import ShareForm from "@/components/ShareForm";
import ViewForm from "@/components/ViewForm";

export default function Workspace() {
  const [activeTab, setActiveTab] = useState<"share" | "view">("share");

  return (
    <section id="workspace" className="scroll-mt-24 px-5 py-6 md:py-14">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h2 className="sm:text-3xl text-2xl  font-bold tracking-tight text-gray-900">
            What would you like to do?
          </h2>

          <p className="mt-3 text-gray-500 sm:text-lg text-sm ">
            Drop something new or retrieve your saved text.
          </p>
        </div>

        {/* Tabs */}
        <div className="mx-auto mb-8 flex max-w-md rounded-xl border border-gray-200 bg-gray-50 p-1.5 inset-shadow-xs  ">
          <button
            onClick={() => setActiveTab("share")}
            className={`flex-1 rounded-lg px-4 py-3 text-sm font-semibold transition ${
              activeTab === "share"
                ? "bg-white shadow-md text-blue-600 "
                : "text-gray-500 hover:text-gray-900"
            }`}>
            Share Text
          </button>

          <button
            onClick={() => setActiveTab("view")}
            className={`flex-1 rounded-lg px-4 py-3 text-sm font-semibold transition ${
              activeTab === "view"
                ? "bg-white text-blue-600 shadow-md"
                : "text-gray-500 hover:text-gray-900"
            }`}>
            View Text
          </button>
        </div>

        {/* Conditional Rendering */}
        <div>{activeTab === "share" ? <ShareForm /> : <ViewForm />}</div>
      </div>
    </section>
  );
}
