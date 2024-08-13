import { useState } from "react";
import ContactForm from "../components/ContactForm";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import ContactCard from "../components/ContactCard";

const Contacts = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const contacts = useSelector((state: RootState) => state.contact.contacts);

  return (
    <div className="flex flex-col w-full h-full    ">
      {/* modal open button  */}
      <div className="flex  w-full mt-4 mb-6 p-2">
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
          onClick={() => setModalOpen(true)}
        >
          Create Contact
        </button>
      </div>
      {/* contact list */}
      <div className="w-full p-2 sm:p-4 md:p-6">
        {contacts && contacts.length > 0 ? (
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {contacts.map((contact) => (
              <div key={contact.id} className="flex">
                <ContactCard contactDetails={contact} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-8">
            No contacts to show
          </div>
        )}
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Create Contact"
      >
        <ContactForm formType="create" onClose={() => setModalOpen(false)} />
      </Modal>
    </div>
  );
};
export default Contacts;
