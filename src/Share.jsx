import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from "react-helmet";
import gif1 from './assets/gif1.gif'
import gif2 from './assets/gif2.gif'
const Share = () => {
    const { id } = useParams()
    let gifUrl;
    if (id === "1") {
        gifUrl = "https://interactly-images.s3.ap-south-1.amazonaws.com/temp/1.gif";
    } else {
        gifUrl = "https://interactly-images.s3.ap-south-1.amazonaws.com/temp/2.gif";
    }
    return (
        <>
            <Helmet>
                <meta property="og:url" content={`https://interactly-images.s3.ap-south-1.amazonaws.com/temp/2.gif`} />
                <meta property="og:title" content="gif" />
                <meta property="og:image" content={gifUrl} />
            </Helmet>
            <img style={{ display: "flex", justifyContent: "center" }} src={id === "1" ? gif1 : gif2} /></>
    )
}
export default Share