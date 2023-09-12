import jwtDecode from "jwt-decode";

export const generateQueryKeys = (queryKey: string) => ({
  all: [queryKey],
  details: () => [queryKey, "details"],
  detail: (id?: number) => [...generateQueryKeys(queryKey).details(), id],
  lists: () => [queryKey, "lists"],
  filteredList: (params: QueryParams) => [
    ...generateQueryKeys(queryKey).lists(),
    params,
  ],
});

export const removeSessionToken = () => {
  sessionStorage.removeItem("token");
};

export const getDecodedToken = () => {
  const token = sessionStorage.getItem("token");
  return token ? jwtDecode<any>(token) : null;
};

export const isValidToken = () => {
  const currentTime = new Date();
  const token = getDecodedToken();
  const unixCurrentTime = Math.floor(currentTime.getTime() / 1000);
  if (!token || token.exp <= unixCurrentTime) {
    removeSessionToken();
    return false;
  }

  return true;
};

export const checkRoles = (roles?: Role[]) => {
  const decodedToken = getDecodedToken();
  const localUserRole: string = decodedToken?.UserRole;

  return roles?.some(
    (role) => localUserRole?.toLowerCase() === role.toLowerCase()
  );
};

export const getErrorMessage = (
  error: any,
  defaultMessage: string,
  onlyValue = false
) => {
  let errorMessage = "";
  if (error.response.status === 400) {
    const errorData = error.response.errors;
    if (Array.isArray(errorData)) {
      errorMessage = errorData
        .map((err: any) =>
          Object.entries<any>(err).map(([key, value]) =>
            !onlyValue ? `${key}: ${value} \r\n` : `${value} \r\n`
          )
        )
        .join("\r\n");
    } else
      Object.entries<any>(errorData).forEach(([key, value]) => {
        errorMessage += !onlyValue ? `${key}: ${value} \r\n` : `${value} \r\n`;
      });
  } else if (error.response.status === 404)
    errorMessage = "error.notFound No encontrado";
  else if (error.response.status === 403)
    errorMessage = "error.forbidden Denegado";

  return errorMessage || defaultMessage;
};
