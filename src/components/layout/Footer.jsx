import React from "react";
import ContactMeButton from "../ContactMeButton";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="flex justify-between px-20 items-center min-h-16 py-8 border-t mt-2">
      <p>ArsDevv &copy; 2024</p>
      <ContactMeButton>Contact Saya masbro</ContactMeButton>
    </footer>
  );
};

export default Footer;
