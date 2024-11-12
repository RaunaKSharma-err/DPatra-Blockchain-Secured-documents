import { useState } from "react";
import { FiDownload, FiTrash2 } from "react-icons/fi";

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

const DocumentPanel = () => {
  const [citizens] = useState<Citizen[]>([
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
  return (
    <>
      <div className="grid md:grid-cols-3 gap-6">
        {citizens.flatMap((citizen) =>
          citizen.documents.map((doc) => (
            <div key={doc.id} className="bg-white p-4 rounded-lg shadow">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                {doc.type.startsWith("image/") ? (
                  <img
                    src={doc.url}
                    alt={doc.name}
                    className="object-cover rounded"
                  />
                ) : (
                  <div className="flex items-center justify-center bg-gray-100 rounded">
                    <span className="text-gray-500">PDF Document</span>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{doc.name}</span>
                <div className="flex space-x-2">
                  <button className="p-1 text-blue-500 hover:text-blue-700">
                    <FiDownload className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-red-500 hover:text-red-700">
                    <FiTrash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default DocumentPanel;
