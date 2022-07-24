import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function InitialPost() {
  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <img
          src="https://cdn.sanity.io/images/ub6yj6nr/production/08cfc5601a32cdc9f5783ee8cb0c52775b44be0c-5992x2893.png"
          className="rounded-full h-12 w-12 object-cover border p-1 mr-3"
          alt=""
        />
        <p className="flex-1 font-bold">slim.i.am_</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      <img
        src="https://cdn.sanity.io/images/ub6yj6nr/production/08cfc5601a32cdc9f5783ee8cb0c52775b44be0c-5992x2893.png"
        className="object-contain w-full"
        alt=""
      />

      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIconFilled className="btn text-red-500" />

          <HeartIcon className="btn" />

          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn rotate-45" />
        </div>

        <BookmarkIcon className="btn" />
      </div>

      <p className="p-5">
        <p className="font-bold mb-1">1914 likes</p>
        <span className="font-bold mr-1">slim.i.am_</span>
        WELCOME TO INSTACLONE! SIGN IN TO ADD YOUR OWN POST! FOLLOW ME ON
        INSTAGRAM (THIS IS MY REAL USERNAME)
        <span className="font-semibold text-blue-400">
          {" "}
          #REACTJS #NEXTJS #DEVELOPER #TAILWIND #WEBAPP
        </span>
      </p>

      <div className="ml-10 h-20 ">
        <div className="flex items-center space-x-2 mb-3">
          <img
            className="rounded-full h-7"
            src="https://cdn.sanity.io/images/ub6yj6nr/production/08cfc5601a32cdc9f5783ee8cb0c52775b44be0c-5992x2893.png"
            alt="profile pic"
          />
          <p className="text-sm flex-1 ">
            <span className="font-bold">slim.i.am_ </span>
            This is not a REAL app, nor does it have any affiliation with
            Instagram or Meta (Facebook).
          </p>
        </div>
        <div className="flex items-center space-x-2 mb-3">
          <img
            className="rounded-full h-7"
            src="https://cdn.sanity.io/images/ub6yj6nr/production/08cfc5601a32cdc9f5783ee8cb0c52775b44be0c-5992x2893.png"
            alt="profile pic"
          />
          <p className="text-sm flex-1 ">
            <span className="font-bold">slim.i.am_ </span>
            This was created for educational purposes only. Enjoy!
          </p>
        </div>
      </div>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          className="border-none flex-1 focus:ring-0 outline-none"
          placeholder="Add a comment..."
        />
        <button
          type="submit"
          disabled={true}
          className="font-semibold text-blue-400"
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default InitialPost;
