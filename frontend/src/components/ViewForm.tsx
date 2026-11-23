"use client";

import { useState } from "react";
import { viewText } from "@/lib/api";
import {
  Download,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Eye,
  EyeClosed,
} from "lucide-react";

export default function ViewForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [toggle, setToggle] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setText("");
    setCopied(false);

    try {
      const result = await viewText(userName, password);

      setText(result.text ?? "");
      setMessage(result.message || "Text retrieved successfully!");
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setMessage("Unable to copy text. Please try again.");
    }
  }

  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex">
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
          <Download size={22} />
        </div>{" "}
        <div className="ml-4 mt-3">
          <h2 className="text-2xl font-bold text-gray-900">View your text</h2>

          {/* <p className=" text-sm text-gray-500">
            Enter your credentials to retrieve your saved text.
          </p> */}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="md:flex justify-around p-6 rounded-xl shadow-md ">
          {/* username */}
          <div className="md:w-1/2">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Username
            </label>

            <input
              type="text"
              required
              minLength={3}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your username"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 mb-4 "
            />
          </div>

          {/* password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="relative">
              <input
                type={toggle ? "text" : "password"}
                required
                minLength={3}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create your password"
                className="w-full rounded-xl border text-black border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <button
                type="button"
                onClick={() => setToggle(!toggle)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors duration-200 w-5 h-5 flex items-center justify-center">
                <Eye
                  className={`absolute transition-all duration-100 ease-in-out ${
                    toggle
                      ? "opacity-100 scale-100 rotate-0"
                      : "opacity-0 scale-75 -rotate-12 pointer-events-none"
                  }`}
                />
                <EyeClosed
                  className={`absolute transition-all duration-100 ease-in-out ${
                    !toggle
                      ? "opacity-100 scale-100 rotate-0"
                      : "opacity-0 scale-75 rotate-12 pointer-events-none"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
        <div>
          {" "}
          {message && (
            <div
              className={`mt-5 flex items-start gap-2 rounded-xl p-3 text-sm ${
                text ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"
              }`}>
              {text ? (
                <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
              ) : (
                <AlertCircle size={18} className="mt-0.5 shrink-0" />
              )}
              {message}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading || !userName.trim() || !password}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60">
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Retrieving text...
            </>
          ) : (
            <>
              <Download size={18} />
              View Text
            </>
          )}
        </button>
      </form>

      {text !== "" && (
        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-semibold text-gray-800">
              Retrieved Text
            </label>

            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700">
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <pre className="max-h-96 overflow-auto whitespace-pre-wrap break-words rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm leading-7 text-gray-700">
            {text}
          </pre>
        </div>
      )}
    </div>
  );
}
