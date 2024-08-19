import React from 'react'

const ContactMeButton = ({children}) => {
  return (
    <button className="bg-gray-900 text-white p-2 rounded-md hover:bg-gray-700">
     {children}
    </button>
  );
}

export default ContactMeButton
