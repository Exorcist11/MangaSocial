import SliderImg from "../components/sliderImg";
import SliderImg2 from "../components/sliderImg2";
import SliderImg3 from "../components/sliderImg3";
import CommingSoon from "../components/commingSoon";
import slider1 from "../assets/imgSlider/Rectangle 1.svg";
import slider2 from "../assets/imgSlider/image 6.svg";
import slider3 from "../assets/imgSlider/image 8.svg";
import slider4 from "../assets/imgSlider/image 9.svg";
import slider5 from "../assets/imgSlider/image 5.svg";
import slider6 from "../assets/imgSlider/image 7.png";
import slider7 from "../assets/imgSlider/Vector 3.png";
import slider8 from "../assets/imgSlider/slider8.svg";
import slider9 from "../assets/imgSlider/sliderImgManga.png";
import Rank from "../components/rank";
import ComicRecent from "../components/comicRecent";
import News from "../components/news";
import { Link } from "react-router-dom";
import NewUsers from "../components/newUsers";
import Comments from "../components/comments";
import NewRelease from "../components/newRelease";
export default function Index() {
  return (
    <>
      <div className="cont">
        <div className="slider">
          <SliderImg
            arrImage={[slider1, slider2, slider3, slider4]}
          ></SliderImg>
          <div className="slider2">
            <SliderImg2 arrImage2={[slider5, slider6, slider7]}></SliderImg2>
          </div>
        </div>
        <img className="blur-dots" src="/images/Vector 2.svg" alt=""></img>
        <div className="background-dots"></div>
        <div className="title-released-comic mt-[450px]">
          <h2>New Released Comic</h2>
          <Link to="/newRelease">
            <p>See all</p>
          </Link>
        </div>
        <NewRelease></NewRelease>

        <div className="slider slider3">
          <SliderImg3 arrImage3={[slider8, slider9]}></SliderImg3>
        </div>
        <div className="title-released-comic">
          <h2>Recent Comics</h2>
          <Link to="/recent">
            <p>See all</p>
          </Link>
        </div>
        <ComicRecent></ComicRecent>
        <div className="title-released-comic">
          <h2>Recommnended Comics</h2>
          <Link to="/recent">
            <p>See all</p>
          </Link>
        </div>
        <ComicRecent></ComicRecent>
        <div className="title-released-comic">
          <h2>Comming Soon Comics</h2>
          <Link to="/commingsoon">
            <p>See all</p>
          </Link>
        </div>
        <CommingSoon></CommingSoon>
        <div className="title-released-comic">
          <h2>Top 15 Best Comics of the Week</h2>
          <Link>
            <p>See all</p>
          </Link>
        </div>
        <ComicRecent></ComicRecent>
        <div className="title-released-comic">
          <h2>Comedy Comics</h2>
          <Link>
            <p>See all</p>
          </Link>
        </div>
        <ComicRecent></ComicRecent>
        <div className="title-released-comic">
          <h2>Free Comics</h2>
          <Link>
            <p>See all</p>
          </Link>
        </div>
        <ComicRecent></ComicRecent>
        <div className="title-released-comic">
          <h2>News</h2>
          <Link>
            <p>See all</p>
          </Link>
        </div>
        <div className="news">
          <News></News>
          <NewUsers></NewUsers>
        </div>
        <div className="title-released-comic">
          <h2>Rank</h2>
        </div>
        <Rank></Rank>
        <div className="title-released-comic">
          <h2>Comment</h2>
        </div>
        <Comments></Comments>
      </div>
    </>
  );
}
