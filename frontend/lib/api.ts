const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api"

export interface ApiResponse<T = any> {
  success: boolean
  message?: string
  error?: string
  data?: T
}

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    })

    const data = await response.json()

    if (!response.ok) {
      return {
        success: false,
        error: data.error || "Something went wrong",
      }
    }

    return data
  } catch (error) {
    console.error("API request failed:", error)
    return {
      success: false,
      error: "Network error. Please check your connection.",
    }
  }
}

export const api = {
  contact: {
    submit: async (data: {
      name: string
      company?: string
      email: string
      problem: string
    }) => {
      return apiRequest("/contact/submit", {
        method: "POST",
        body: JSON.stringify(data),
      })
    },
  },
}
