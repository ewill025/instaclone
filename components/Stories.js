import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";

function NextArrow(props) {
  const { style, onClick } = props;

  return (
    <ChevronRightIcon
      className="absolute rounded-full bg-slate-50 bg-opacity-50 h-7 z-5 cursor-pointer hover:scale-110 transition transform duration-200 ease-out "
      style={{
        ...style,
        display: "block",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "10px",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <ChevronLeftIcon
      className="absolute rounded-full bg-slate-50 bg-opacity-50 h-7 z-5 cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
      style={{
        ...style,
        display: "block",
        top: "10%",
        transform: "translate(0, 50%)",
        left: "-25px",
      }}
      onClick={onClick}
    />
  );
}
function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      id: i,
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    }));

    setSuggestions(suggestions);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <div className=" mx-5 lg:mx-auto space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm">
      <Slider {...settings}>
        {session && (
          <Story img={session.user.image} username={session.user.username} />
        )}
        {suggestions.map((profile) => (
          <Story
            key={profile.id}
            img={profile.avatar}
            username={profile.username}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Stories;
