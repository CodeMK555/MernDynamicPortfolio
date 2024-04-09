import React from "react";
import SectionTitle from "../../components/SectionTitle";
import {useSelector} from 'react-redux';


function Contact() {
  const {selectedItemIndex, setSelectedItemIndex} = React.useState(0);
  const { portfolioData } = useSelector ((state) => state.root);
  const { contact } = portfolioData;
  
  return (
    <div>
      <SectionTitle title="Contact" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col">
          <p className="text-tertiary ">{"{"}</p>
          {Object.keys(contact).map((key) => (
            key !== "_id" &&( <p>
              <span className="text-tertiary ">{key} : </span>
              <span className="text-tertiary ">{contact[key]} : </span>
            </p>
            )
          ))}
          <p className="text-tertiary">{"}"}</p>
        </div>

        <div className="h-[240px]">
          <lottie-player
            src="https://lottie.host/1d6ae494-e89c-43b9-901b-f4e0ba18f684/ewwcIznqmi.json"
            background="##FFFFFF"
            speed="1"
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
