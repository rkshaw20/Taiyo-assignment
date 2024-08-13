import { useDispatch } from "react-redux";
import { useState } from "react";

import { CgProfile } from "react-icons/cg";
import { Contact } from "../types/contact";
import Modal from "./Modal";
import ContactForm from "./ContactForm";
import { deleteContact } from "../store/slices/contactSlice";

interface ContactCard {
  contactDetails: Contact;
}

const ContactCard = ({ contactDetails }: ContactCard) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isViewDetails, setIsViewDetails] = useState(false);

  const { firstName, lastName, id, status } = contactDetails;
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col gap-2 m-1 border-2 border-purple-500 rounded-lg p-4 w-[250px] h-[180px]  shadow-lg">
        {/* icon and name section */}
        <div className="flex w-full h-full items-center gap-x-2">
          <div className="w-[30%] flex justify-center items-center">
            <div className="w-full h-15 flex items-center justify-center">
              <CgProfile className="text-4xl text-indigo-500 " />
            </div>
          </div>
          <div className="w-[70%]">
            <div className="font-semibold">
              {firstName} {lastName}
            </div>
            {isViewDetails && (
              <>
                <div className="">Status: {status}</div>
              </>
            )}
            <button
              className="text-indigo-500 underline px-0 py-0 bg-transparent hover:text-indigo-600 focus:outline-none"
              onClick={() => setIsViewDetails(!isViewDetails)}
            >
              {isViewDetails ? "Hide" : "View"} Details
            </button>
          </div>
        </div>

        {/* buttons */}
        <div className="flex w-full gap-2  items-center mt-2">
          <button
            className="bg-gray-400 text-white px-2 py-1 rounded hover:bg-gray-500 w-[50%]"
            onClick={() => setModalOpen(true)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 w-[50%]"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Edit Contact"
      >
        <ContactForm
          formType="edit"
          defaultData={contactDetails}
          onClose={() => setModalOpen(false)}
        />
      </Modal>
    </>
  );
};
export default ContactCard;
