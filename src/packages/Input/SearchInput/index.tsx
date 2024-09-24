import { ForwardedRef, forwardRef } from "react";

import { Body2Bold, Title2Description } from "../../index";

import { Button, Input, InputWrapper, ISearchInputProps, TextWrapper, Wrapper } from "./useSearchInput";

const IconSearch = '../../../asset/icons/defaultSearchIcon.svg';

const SearchInput = (
  {
    label,
    description,
    inputWidth = 'auto',
    placeholder = 'Search keyword...',
    searchIconUrl = IconSearch,
    searchButtonOnClick,
  }: ISearchInputProps,
  ref: ForwardedRef<HTMLDivElement>) => (
  <Wrapper ref={ref}>
    {(!!label || !!description) && (
      <TextWrapper>
        {!!label && (
          <Body2Bold>
            {label}
          </Body2Bold>
        )}
        {!!description && (
          <Title2Description>
            {description}
          </Title2Description>
        )}
      </TextWrapper>
    )}
    
    <InputWrapper inputWidth={inputWidth}>
      <Input
        type={'text'}
        placeholder={placeholder}
      />
      <Button onClick={searchButtonOnClick}>
        <img src={searchIconUrl} alt={'검색 아이콘'}/>
      </Button>
    </InputWrapper>
  </Wrapper>
);

export default forwardRef(SearchInput);