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
