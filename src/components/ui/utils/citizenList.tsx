import { useState } from "react";
import { ChangeEvent, FormEvent, useRef } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { FiEye, FiUpload } from "react-icons/fi";
import { IoMdPerson } from "react-icons/io";
import { Switch } from "../switch";
import { FaEye, FaUserPlus } from "react-icons/fa";

interface Document {
  id: number;
  name: string;
  type: string;
  url: string;
}

interface Citizen {
  id: number;
  name: string;
  dob?: string;
  address?: string;
  email: string;
  phone: string;
  status: boolean;
  verified: boolean;
  documents: Document[];
}

interface FormData {
  name: string;
  dob: string;
  address: string;
  email: string;
  phone: string;
  documents: Document[];
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
}

export const CitizenList = () => {
  const [errors, setErrors] = useState<Errors>({});
  const [formData, setFormData] = useState<FormData>({
    name: "",
    dob: "",
    address: "",
    email: "",
    phone: "",
    documents: [],
  });

  const [citizens, setCitizens] = useState<Citizen[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      status: true,
      verified: true,
      documents: [
        {
          id: 1,
          name: "ID Card",
          type: "image/jpeg",
          url: "images.unsplash.com/photo-1621839673705-6617adf9e890",
        },
        {
          id: 2,
          name: "Proof of Address",
          type: "application/pdf",
          url: "images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
        },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1987654320",
      status: false,
      verified: false,
      documents: [
        {
          id: 3,
          name: "Passport",
          type: "image/jpeg",
          url: "images.unsplash.com/photo-1621839673705-6617adf9e890",
        },
      ],
    },
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      status: true,
      verified: true,
      documents: [
        {
          id: 1,
          name: "ID Card",
          type: "image/jpeg",
          url: "images.unsplash.com/photo-1621839673705-6617adf9e890",
        },
        {
          id: 2,
          name: "Proof of Address",
          type: "application/pdf",
          url: "images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
        },
      ],
    },
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      status: true,
      verified: true,
      documents: [
        {
          id: 1,
          name: "ID Card",
          type: "image/jpeg",
          url: "images.unsplash.com/photo-1621839673705-6617adf9e890",
        },
        {
          id: 2,
          name: "Proof of Address",
          type: "application/pdf",
          url: "images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
        },
      ],
    },
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      status: true,
      verified: true,
      documents: [
        {
          id: 1,
          name: "ID Card",
          type: "image/jpeg",
          url: "images.unsplash.com/photo-1621839673705-6617adf9e890",
        },
        {
          id: 2,
          name: "Proof of Address",
          type: "application/pdf",
          url: "images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
        },
      ],
    },
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      status: true,
      verified: true,
      documents: [
        {
          id: 1,
          name: "ID Card",
          type: "image/jpeg",
          url: "images.unsplash.com/photo-1621839673705-6617adf9e890",
        },
        {
          id: 2,
          name: "Proof of Address",
          type: "application/pdf",
          url: "images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
        },
      ],
    },
  ]);

  const validateForm = (formData: FormData): boolean => {
    const newErrors: Errors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone) newErrors.phone = "Phone is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm(formData)) {
      setCitizens([
        ...citizens,
        { ...formData, id: Date.now(), status: true, verified: false },
      ]);
      console.log(formData);

      setFormData({
        name: "",
        dob: "",
        address: "",
        email: "",
        phone: "",
        documents: [],
      });
    }
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    setFormData((prev) => ({
      ...prev,
      documents: [
        ...prev.documents,
        ...files.map((file) => ({
          id: Date.now(),
          name: file.name,
          type: file.type,
          url: URL.createObjectURL(file),
        })),
      ],
    }));
  };

  const toggleStatus = (id: number) => {
    setCitizens(
      citizens.map((citizen) =>
        citizen.id === id ? { ...citizen, status: !citizen.status } : citizen
      )
    );
  };

  const modalRef = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    if (modalRef.current) {
      (modalRef.current as HTMLDialogElement).showModal();
    }
  };

  const ModalRef = useRef<HTMLDialogElement | null>(null);

  const openmodal = () => {
    if (ModalRef.current) {
      (ModalRef.current as HTMLDialogElement).showModal();
    }
  };
  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Citizens Dashboard
          </h1>
          <div className="flex space-x-2">
            <button
              onClick={openmodal}
              className={`px-4 py-2 rounded btn btn-primary`}
            >
              <FaUserPlus />
              Add Citizen
            </button>
            <dialog ref={ModalRef} id="my_modal_1" className="modal">
              <div className="modal-box bg bg-white">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-black">
                        Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        className=" bg-white text-black border-slate-500 border-solid border-2 w-full p-2 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-black">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        value={formData.dob}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            dob: e.target.value,
                          })
                        }
                        className="bg-white border-slate-500 border-solid border-2 w-full p-2 rounded focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block mb-2 text-sm font-medium text-black">
                        Address
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            address: e.target.value,
                          })
                        }
                        className=" bg-white text-black border-slate-500 border-solid border-2 w-full p-2  rounded focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-black">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        className=" bg-white text-black border-slate-500 border-solid border-2 w-full p-2 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-black">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phone: e.target.value,
                          })
                        }
                        className=" bg-white text-black border-slate-500 border-solid border-2 w-full p-2 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block mb-2 text-sm font-medium text-black">
                        Upload Documents
                      </label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <FiUpload className="w-8 h-8 mb-4 text-gray-500" />
                            <p className="mb-2 text-sm text-black">
                              Click to upload documents
                            </p>
                          </div>
                          <input
                            type="file"
                            className="hidden"
                            multiple
                            onChange={handleFileUpload}
                            accept="image/*,.pdf"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Add Citizen
                  </button>
                </form>

                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {citizens.map((citizen) => (
                <tr key={citizen.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <IoMdPerson className="h-10 w-10 rounded-full bg-gray-200 p-2" />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {citizen.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{citizen.email}</div>
                    <div className="text-sm text-gray-500">{citizen.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Switch
                      // checked={citizen.status}
                      onChange={() => toggleStatus(citizen.id)}
                      className={`${
                        citizen.status ? "bg-blue-600" : "bg-gray-200"
                      } relative inline-flex items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      className={`px-3 py-1 rounded ${
                        citizen.verified
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {citizen.verified ? "Verified" : "Unverified"}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      className="btn btn-neutral btn-sm"
                      onClick={openModal}
                    >
                      <FaEye />
                      View
                    </button>
                    <dialog ref={modalRef} id="my_modal_1" className="modal">
                      <div className="modal-box bg bg-white">
                        <h3 className="font-bold text-lg mb-4 text-black">
                          Citizen's Details
                        </h3>
                        <div className="flex w-[100%]">
                          <div className="flex w-[100%] justify-between gap-4">
                            <div className="w-[100%] text-black h-[150px]">
                              <p>Id: {citizen.id}</p>
                              <p>Name: {citizen.name}</p>
                              <p>Email: {citizen.email}</p>
                              <p>Phone: {citizen.phone}</p>
                            </div>
                            <div className="flex flex-col gap-2 pl-10 w-[70%]">
                              {citizen.documents.map((doc) => (
                                <button
                                  key={doc.id}
                                  className="text-white btn btn-sm"
                                >
                                  <span className="text-[12px]">
                                    {doc.name}
                                  </span>
                                  <FiEye className="h-4 w-4" />
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <AiOutlineEdit size={20} />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <AiOutlineDelete size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
