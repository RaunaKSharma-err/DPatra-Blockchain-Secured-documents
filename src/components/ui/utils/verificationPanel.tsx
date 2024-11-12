import { FiEye, FiCheck, FiX } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

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
interface Document {
  id: number;
  name: string;
  type: string;
  url: string;
}

const VerificationPanel = () => {
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

  const toggleVerification = (id: number) => {
    setCitizens(
      citizens.map((citizen) =>
        citizen.id === id
          ? { ...citizen, verified: !citizen.verified }
          : citizen
      )
    );
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6 bg-white w-[100%]">
        <h1 className="text-3xl flex gap-2 font-bold text-gray-800">
          <FaCheckCircle color="blue" />
          Verification Panel
        </h1>
      </div>
      <div className="space-y-6">
        {citizens.map((citizen) => (
          <div key={citizen.id} className="bg-gray-200 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">{citizen.name}</h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => toggleVerification(citizen.id)}
                  className={`flex items-center px-4 py-2 rounded ${
                    citizen.verified
                      ? "bg-green-500 text-white"
                      : "bg-yellow-500 text-white"
                  }`}
                >
                  {citizen.verified ? (
                    <FiCheck className="mr-2" />
                  ) : (
                    <FiX className="mr-2" />
                  )}
                  {citizen.verified ? "Verified" : "Verify"}
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Email: {citizen.email}</p>
                <p className="text-sm text-gray-600">Phone: {citizen.phone}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {citizen.documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center space-x-2 bg-white p-2 rounded"
                  >
                    <span className="text-sm">{doc.name}</span>
                    <button className="text-blue-500 hover:text-blue-700">
                      <FiEye className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VerificationPanel;
