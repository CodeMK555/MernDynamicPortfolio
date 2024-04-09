import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static ">
      <div className="flex flex-col items-center" id="LeftSiderIcon">
        <div className="flex flex-col gap-3 sm:flex-row" >
          <a href="https://www.facebook.com/ "  target="_blank" >
            <i class="ri-facebook-circle-line  text-gray-600 text-xl "></i>
          </a>

          <a href="https://www.instagram.com/accounts/login/" target="_blank">
            <i class="ri-instagram-line  text-gray-600 text-xl "></i>
          </a>

          <a href="https://twitter.com/i/flow/login" target="_blank">
            <i class="ri-twitter-line  text-gray-600 text-xl "></i>
          </a>

          <a href="https://github.com/login" target="_blank">
            <i class="ri-github-line  text-gray-600 text-xl "></i>
          </a>

          <a
            href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
            target="_blank"
          >
            <i class="ri-linkedin-line  text-gray-600 text-xl "></i>
          </a>

          <a
            href="https://google.com/"
            target="_blank"
          >
            <i class="ri-mail-line  text-gray-600 text-xl "></i>
          </a>
        </div>

        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
