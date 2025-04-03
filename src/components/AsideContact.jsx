import React from "react";
import ContactForm from "./ContactForm";


const AsideContact = () => {
  const location = window.location.href;
  return (
    <div className={`hidden lg:block lg:w-[40%] lg:h-fit rounded-lg ${!location.includes('/product/') ? `my-39` : ``}`}>
      <ContactForm aside={true}/>
    </div>
  );
};

export default AsideContact;
