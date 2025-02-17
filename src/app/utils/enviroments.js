const environment = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  isProduction: process.env.NODE_ENV === "production",
  isDevelopment: process.env.NODE_ENV === "development",
  env: process.env.NEXT_PUBLIC_ENV || "development",
};

// Validation
if (!environment.baseUrl) {
  throw new Error("NEXT_PUBLIC_BASE_URL is required");
}

export default environment;
