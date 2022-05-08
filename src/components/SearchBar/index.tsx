import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDebouncedCallback } from "use-debounce";
import * as S from "./styles";

interface SearchBarProps {
  objectToSearchInside: any[];
  objectAfterSearch: any[];
  setObjectAfterSearch: Dispatch<SetStateAction<any[]>>;
  objectFieldToSearch: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  objectToSearchInside,
  setObjectAfterSearch,
  objectFieldToSearch,
}) => {
  const [searchedText, setSearchedText] = useState("");

  const handleSearch = (event: FormEvent<HTMLInputElement>) => {
    setSearchedText(event.currentTarget.value);
    findPosts();
  };

  const findPosts = useDebouncedCallback(() => {
    const newObject = objectToSearchInside.filter((object) =>
      object[objectFieldToSearch]
        .toLowerCase()
        .includes(searchedText.toLowerCase())
    );

    setObjectAfterSearch(newObject);
  }, 400);

  return (
    <S.SearchBarContainer>
      <S.SearchInput
        placeholder="Pesquisa..."
        value={searchedText}
        onChange={handleSearch}
      />
      <BiSearch />
    </S.SearchBarContainer>
  );
};
