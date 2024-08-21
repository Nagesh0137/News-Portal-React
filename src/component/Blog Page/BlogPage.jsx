import React from "react";
import "./blogPageStyle.css";
import RightSidebar from "../Category/RightSidebar";
import ShareIcons from "./SocialSharebtn";
import RelatedPost from "../Category/RelatedPost";

export default function BlogPage() {
  const headtitle =
    "मान्सून'ने महाराष्ट्र सुखावला, नाशिक-जळगाव जिल्ह्यात मुसळधार पाऊस, पेरण्यांना आला वेग";
  const paragraphtitle = `राजा आनंदात आहे. जमिनीमध्ये चांगली ओल निर्माण झाली असून खरिप हंगामातील पेरण्यांना वेग आला आहे`;
  const headlimitedText = headtitle.split(" ").slice(0, 10).join(" ") + "...";
  const paralimitedText =
    paragraphtitle.split(" ").slice(0, 15).join(" ") + "...";
  return (
    <>
      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-md-8 shadow mb-4 pb-0 bg-body-tertiary pt-2 p-3   ">
              {/*blog title */}
              <div className="">
                <span>
                  <h1 className="news-title">
                    Shraddha Kapoor Announces Stree 2 Trailer Release with New
                    Poster: ‘Aa Rahi Hai’
                  </h1>
                </span>
                <span className="text-primary underline-hover">
                  <i class="fa-solid fa-pen-to-square me-1 text-dark"></i>
                  <small>Rohti Sharama</small>
                  <i class="fa-solid fa-calendar-days mx-1 text-dark"></i>
                  <small> 15,Aug 2024</small>
                </span>
              </div>
              {/* blog img */}
              <div className="blog-image text-center">
                <img
                  src="https://picsum.photos/800/600"
                  className="img-fluid mt-4"
                  style={{ aspectRatio: "8/5", objectFit: "cover" }}
                  alt=""
                />
                <caption className="d-inline-flex text-center">
                  Stree 2 Movie Poster
                </caption>
              </div>
              {/* social media follow account */}
              <div className="group-card whatsapp-card">
                <span style={{ display: "flex", alignItems: "center" }}>
                  <i
                    className="fab fa-whatsapp"
                    style={{ fontSize: "24px", color: "#25d366" }}
                  ></i>
                  <span
                    style={{
                      fontWeight: "bold",
                      marginLeft: "10px",
                      fontSize: "0.9rem",
                    }}
                  >
                    WhatsApp Group
                  </span>
                </span>
                <a
                  className="seoquake-nofollow"
                  href="https://chat.whatsapp.com/Ip7qvvgIFqNGZi7U8uZJJB"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-whatsapp"></i> Join Now
                </a>
              </div>

              <div className="group-card telegram-card">
                <span style={{ display: "flex", alignItems: "center" }}>
                  <i
                    className="fab fa-telegram"
                    style={{ fontSize: "24px", color: "#004F7A" }}
                  ></i>
                  <span
                    style={{
                      fontWeight: "bold",
                      marginLeft: "10px",
                      fontSize: "0.9rem",
                    }}
                  >
                    Telegram Channel
                  </span>
                </span>
                <a
                  className="seoquake-nofollow"
                  href="https://t.me/todayupdates24"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-telegram"></i> Join Now
                </a>
              </div>

              <div className="group-card instagram-card">
                <span style={{ display: "flex", alignItems: "center" }}>
                  <i
                    className="fab fa-instagram"
                    style={{ fontSize: "24px", color: "#E1306C" }}
                  ></i>
                  <span
                    style={{
                      fontWeight: "bold",
                      marginLeft: "10px",
                      fontSize: "0.9rem",
                    }}
                  >
                    Instagram Profile
                  </span>
                </span>
                <a
                  className="seoquake-nofollow"
                  href="https://www.instagram.com/todayupdates24?igsh=Y2Y2bzZsZjlmbm9z"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i> Join Now
                </a>
              </div>
              {/* blog paragraph 1 */}
              <div>
                <b className="fs-3 m-0">Movie Review : </b>
                <p style={{ textIndent: "10px" }} className="fs-4 text-justify">
                  <br />
                  Shraddha Kapoor is back with the much-anticipated sequel to
                  the hit horror-comedy Stree. The trailer for Stree 2 is set to
                  release soon, and fans couldn’t be more excited. The movie,
                  starring Shraddha Kapoor and Rajkummar Rao, will hit theaters
                  on August 15, 2024.
                </p>
              </div>
              {/* blog paragraph 2 */}
              <div>
                <b className="fs-3 m-0">Movie Review : </b>
                <p style={{ textIndent: "10px" }} className="fs-4 text-justify">
                  <br />
                  Shraddha Kapoor is back with the much-anticipated sequel to
                  the hit horror-comedy Stree. The trailer for Stree 2 is set to
                  release soon, and fans couldn’t be more excited. The movie,
                  starring Shraddha Kapoor and Rajkummar Rao, will hit theaters
                  on August 15, 2024.
                </p>
              </div>
              <div className="col-12 col-md-4">
                Share this Post: <ShareIcons></ShareIcons>
              </div>
              <div className="col-12 col-md-12">
                <RelatedPost
                  headlimitedText={headlimitedText}
                  paralimitedText={paralimitedText}
                ></RelatedPost>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <RightSidebar></RightSidebar>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
