import styled from "@emotion/styled";

import { colors, colorsPalette } from "../../Palettes/colors.palette";

interface ISearchInputProps {
  searchButtonOnClick(): void;
  
  label?: string;
  description?: string;
  inputWidth?: string;
  placeholder?: string;
  searchIconUrl?: string;
}

interface IInputWrapperProps {
  inputWidth: string;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const TextWrapper = styled.div`
    display: flex;
    column-gap: 2px;
    align-items: baseline;
    padding-left: 5px;
    margin-bottom: 1px;
`;

const InputWrapper = styled.div<IInputWrapperProps>`
    display: flex;
    align-items: center;
    flex: 1 1;

    padding: 0 10px;
    width: ${(props) => props.inputWidth};
    max-width: 100%;
    min-width: 140px;
    height: 30px;
    background-color: ${colorsPalette[colors.coral03]};
    border-radius: 10px;
    border: 1px solid transparent;
    box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    overflow: hidden;
    transition: all 0.3s;

    &:hover,
    &:focus,
    &:focus-within {
        border-color: ${colorsPalette[colors.coral02]};
    }
`;

const Input = styled.input`
    flex: 1;
    flex-basis: calc(100% - 27px);

    width: 0;
    padding: 0;
    margin-right: 3px;
    box-sizing: border-box;

    background: none;
    border: none;
    outline: 0;

    font-size: 12px;
    font-weight: 400;
    color: ${colorsPalette[colors.black05]};

    &::placeholder {
        color: rgba(41, 41, 41, 0.2);
    }

    &:focus {
        border: none;
    }
`;

const Button = styled.button`
    flex: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    outline: 0;
    padding: 0;

    & img {
        width: 24px;
        height: 24px;
    }

    cursor: pointer;
    transition: all 1s ease;

    &:active {
        transition: all 0s;
        transform: scale(0.9);
    }
`;

export type {
  ISearchInputProps,
  IInputWrapperProps
}
export {
  Wrapper,
  TextWrapper,
  InputWrapper,
  Input,
  Button
}