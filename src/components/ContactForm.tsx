import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { addContact, editContact } from "../store/slices/contactSlice";

import { v4 as uuid } from "uuid";
import { STATUS } from "../types/status";
import { Contact } from "../types/contact";

const schema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  status: z.enum(["active", "inactive"], {
    required_error: "Status is required",
  }),
});

type FormValues = z.infer<typeof schema>;
export type formType = "create" | "edit";

interface ContactFormProps {
  formType?: formType;
  defaultData?: Contact;
  onClose: () => void;
}

const ContactForm = ({ formType, defaultData, onClose }: ContactFormProps) => {
  const dispatch = useDispatch();

  const defaultStatus = defaultData ? defaultData.status : STATUS.ACTIVE;

  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: defaultData ? defaultData.firstName : "",
      lastName: defaultData ? defaultData.lastName : "",
      status: defaultStatus === STATUS.ACTIVE ? "active" : "inactive",
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FormValues) => {
    if (formType === "edit") {
      if (defaultData?.id) {
        dispatch(
          editContact({
            ...data,
            id: defaultData.id,
            status: data.status === "active" ? STATUS.ACTIVE : STATUS.INACTIVE,
          })
        );
      } else {
        console.error("ID is not defined for editing");
      }
    } else {
      dispatch(
        addContact({
          ...data,
          status: data.status === "active" ? STATUS.ACTIVE : STATUS.INACTIVE,
          id: uuid(),
        })
      );
    }
    reset();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="mb-4">
        <label className="block font-semibold mb-2">First Name:</label>
        <input
          type="text"
          {...register("firstName")}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Last Name:</label>
        <input
          type="text"
          {...register("lastName")}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm">{errors.lastName.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Status:</label>
        <div className="flex items-center gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="active"
              {...register("status")}
              className="form-radio text-blue-600"
            />
            <span className="ml-2">Active</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="inactive"
              {...register("status")}
              className="form-radio text-blue-600"
            />
            <span className="ml-2">Inactive</span>
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded"
      >
        {formType === "edit" ? "Save" : "Create"}
      </button>
    </form>
  );
};

export default ContactForm;
