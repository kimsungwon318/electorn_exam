const TOKEN_STORAGE_KEY = "access_token";

export const setToken = (token: string): void => {
  try {
    sessionStorage.setItem(TOKEN_STORAGE_KEY, token);
  } catch (error) {
    console.error("Failed to save token to sessionStorage:", error);
  }
};

export const getToken = (): string | null => {
  try {
    return sessionStorage.getItem(TOKEN_STORAGE_KEY);
  } catch (error) {
    console.error("Failed to read token from sessionStorage:", error);
    return null;
  }
};

export const removeToken = (): void => {
  try {
    sessionStorage.removeItem(TOKEN_STORAGE_KEY);
  } catch (error) {
    console.error("Failed to remove token from sessionStorage:", error);
  }
};
