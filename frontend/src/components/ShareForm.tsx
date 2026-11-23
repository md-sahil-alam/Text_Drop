"use client";

import { useState } from "react";
import { shareText } from "@/lib/api";
import {
  Upload,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeClosed,
} from "lucide-react";

export default function ShareForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");

  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      const result = await shareText(userName, password, data);

      setSuccess(true);
      setMessage(result.message || "Text saved successfully!");
    } catch (error) {
      setSuccess(false);
      setMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-8  flex   ">
        <div className=" flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Upload size={22} />
        </div>
        <div className=" ml-3 mt-2 ">
          <h2 className="text-2xl font-bold text-gray-900 mb">
            Drop your text
          </h2>
          {/* <p className="text-xs sm:text-sm text-gray-500 mb-2">
            Access it whenever you need from anywhere using Username and
            Password.
          </p> */}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className=" md:flex justify-around p-6 rounded-xl shadow-md  ">
          {/* userName input div */}
          <div className="md:w-1/2">
            <label className=" mb-2 block text-sm font-medium text-gray-900">
              Username{" "}
              <span className=" ml-2 text-[12px] text-gray-600">
                *(more than 3 characters)
              </span>
            </label>
            <input
              type="text"
              required
              minLength={3}
              maxLength={30}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your username"
              className="w-full rounded-xl border border-gray-800 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-black duration-200 ease-in-out mb-6 "
            />
          </div>

          {/* password input div */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Password{" "}
              <span className=" ml-2 text-[12px] text-gray-500">
                *(more than 3 characters)
              </span>
            </label>
            <div className="relative">
              <input
                type={toggle ? "text" : "password"}
                required
                minLength={3}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create your password"
                className="w-full rounded-xl border text-black border-gray-800 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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

        <div className="mt-8">
          <div className=" mb-2 flex justify-between">
            <label className="text-sm font-medium text-gray-700">
              Your text{" "}
            </label>

            <span className="text-xs text-gray-400">
              {data.length} characters
            </span>
          </div>

          <textarea
            required
            minLength={2}
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="Write or paste your text here..."
            rows={18}
            className="w-full resize-y rounded-xl text-black border border-gray-200 px-4 py-3 text-sm leading-6 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {message && (
          <div
            className={`flex items-start gap-2 rounded-xl p-3 text-sm ${
              success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"
            }`}>
            {success ? (
              <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
            ) : (
              <AlertCircle size={18} className="mt-0.5 shrink-0" />
            )}
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={
            loading || !userName.trim() || !password || data.trim().length < 2
          }
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60">
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Saving your text...
            </>
          ) : (
            <>
              <Upload size={18} />
              Drop Text
            </>
          )}
        </button>
      </form>

      <p className="mt-5 text-center text-xs text-gray-400">
        Your text automatically expires after 24 hours.
      </p>
    </div>
  );
}
