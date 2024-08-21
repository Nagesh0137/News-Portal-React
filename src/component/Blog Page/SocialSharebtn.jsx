import React from "react";
import "./socialsharebtn.css";
const ShareIcons = ({ url }) => {
  const shareUrl = encodeURIComponent(url);

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
  const twitterShareUrl = `https://twitter.com/share?url=${shareUrl}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?url=${shareUrl}`;
  const redditShareUrl = `https://reddit.com/submit?url=${shareUrl}`;
  const instagramShareUrl = `https://www.instagram.com/?url=${shareUrl}`; // Instagram doesn't have direct sharing, this is a placeholder
  const whatsappShareUrl = `https://wa.me/?text=${shareUrl}`;
  const youtubeShareUrl = `https://www.youtube.com/?url=${shareUrl}`; // YouTube doesn't have direct sharing, this is a placeholder

  return (
    <div className="share-icons">
      <a
        href={facebookShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="share-icon facebook"
      >
        <i className="fab fa-facebook-f"></i>
      </a>
      <a
        href={twitterShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="share-icon twitter"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        href={linkedinShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="share-icon linkedin"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a
        href={redditShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="share-icon reddit"
      >
        <i className="fab fa-reddit-alien"></i>
      </a>
      <a
        href={instagramShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="share-icon instagram"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        href={whatsappShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="share-icon whatsapp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <a
        href={youtubeShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="share-icon youtube"
      >
        <i className="fab fa-youtube"></i>
      </a>
    </div>
  );
};

export default ShareIcons;
