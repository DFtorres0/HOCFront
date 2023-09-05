import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";


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
    return false
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
