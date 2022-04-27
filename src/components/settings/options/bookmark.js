import React from "react";
import { useSelector, useDispatch } from "react-redux";
import extractDomain from "extract-domain";

import { IoIosCloseCircle } from "react-icons/io";
import {
  ModalItem,
  ModalTitles,
  BookmarkInputs,
  BookmarkInputsContainer,
  BookmarkInputRemove,
  DefaultButton,
} from "../../../style/settings";

export default function Bookmark() {
  const dispatch = useDispatch();
  const bookmark = useSelector((state) => state.bookmarkLinks);

  function correctUrlIndicator(event) {
    !extractDomain(event.target.value, { tld: true })
      ? (event.target.style.outline = "2px solid #e01f5d")
      : (event.target.style.outline = "2px solid #1FE0A2");
  }

  function inputOnChange(event, index) {
    const change = [...bookmark];
    change[index] = event.target.value;
    dispatch({ type: "SET_STATE_ITEM", item: "bookmarkLinks", value: change });
    correctUrlIndicator(event);
  }

  function inputRemove(index) {
    const change = [...bookmark];
    change.splice(index, 1);
    dispatch({ type: "SET_STATE_ITEM", item: "bookmarkLinks", value: change });
  }

  function addNewInput() {
    if (bookmark.length >= 6) return null;
    return <DefaultButton onClick={addNewInputOnClick}>Add</DefaultButton>;
  }

  function addNewInputOnClick() {
    const change = [...bookmark, ""];
    dispatch({ type: "SET_STATE_ITEM", item: "bookmarkLinks", value: change });
  }

  return (
    <ModalItem>
      <ModalTitles>Bookmark</ModalTitles>
      {bookmark.map((url, index) => {
        return (
          <BookmarkInputsContainer>
            <BookmarkInputs
              type="url"
              value={url}
              onChange={(event) => inputOnChange(event, index)}
            />
            <BookmarkInputRemove onClick={() => inputRemove(index)}>
              <IoIosCloseCircle />
            </BookmarkInputRemove>
          </BookmarkInputsContainer>
        );
      })}
      {addNewInput()}
    </ModalItem>
  );
}
