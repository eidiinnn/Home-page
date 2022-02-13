import React from "react";
import { Component } from "react";
import AmPmFormat from "./options/ampmformat";
import BackgroundImage from "./options/backgroundImage";
import BackgroundColor from "./options/backgroundColor";
import Bookmark from "./options/bookmark";

import { FaCog, FaRegTimesCircle } from "react-icons/fa";
import {
  SettingsModal,
  SettingsModalContainer,
  SettingsModalItems,
  SettingsIconContainer,
  ReloadButton,
  ReloadButtonMessage,
} from "../../style";

export default class SettingsMenu extends Component {
  buttonSaveAction = () => {
    window.location.reload();
  };

  modalOpen = () => this.setState({ modalOpen: true });
  modalClose = () => this.setState({ modalOpen: false });

  state = {
    modalOpen: false,
  };

  render() {
    return (
      <>
        <SettingsModal show={this.state.modalOpen}>
          <SettingsModalContainer>
            <BackgroundImage />
            <AmPmFormat />
            <BackgroundColor />
            <Bookmark />
            <SettingsModalItems vertical noBottomMargin>
              <SettingsModalItems vertical>
                <ReloadButton value="Save" onClick={this.buttonSaveAction}>
                  Reload
                </ReloadButton>
                <ReloadButtonMessage>
                  You need to reload to see the change.
                </ReloadButtonMessage>
              </SettingsModalItems>
              <FaRegTimesCircle onClick={this.modalClose} />
            </SettingsModalItems>
          </SettingsModalContainer>
        </SettingsModal>

        <SettingsIconContainer>
          <FaCog onClick={this.modalOpen} />
        </SettingsIconContainer>
      </>
    );
  }
}
