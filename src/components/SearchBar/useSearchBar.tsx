import { useState } from "react";

export const useSearchBar = function <T>(objectToSearchInside: T[]) {
  const [objectAfterSearch, setObjectAfterSearch] =
    useState(objectToSearchInside);

  return {
    objectToSearchInside,
    objectAfterSearch,
    setObjectAfterSearch,
  };
};
