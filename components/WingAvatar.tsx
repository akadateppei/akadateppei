import React from "react";
import ReactRoundedImage from "react-rounded-image";
import AvatarImage from "../public/logo_bordered.png";

export default class WingAvatar extends React.Component {
    render() {
        return (
            <ReactRoundedImage image={AvatarImage.src} />
        );
    }
}