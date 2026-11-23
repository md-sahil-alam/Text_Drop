
const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log(API_URL)

interface ApiResponse {
  message: string;
  data?: string;
  text?: string;
}

async function apiRequest(
  endpoint: string,
  payload: Record<string, string>
): Promise<ApiResponse> {
  if (!API_URL) {
    throw new Error("Backend API URL is not configured.");
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Something went wrong.");
  }

  return result;
}

export function shareText(
  userName: string,
  password: string,
  data: string
) {
  return apiRequest("/api/v1/share/text", {
    userName,
    password,
    data,
  });
}

export function viewText(
  userName: string,
  password: string
) {
  return apiRequest("/api/v1/view/text", {
    userName,
    password,
  });
}
