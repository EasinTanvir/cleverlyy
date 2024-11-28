import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "@mui/material/Modal";
import axios from "axios";
import toast from "react-hot-toast";

import { useContextProvider } from "../../hooks/useContextProvider";
import { useSession } from "next-auth/react";

const ModalView = ({ openModal, setOpenModal, plan, path = "/" }) => {
  const [loader, setLoader] = useState();

  const { data: session } = useSession();

  const router = useRouter();

  const {
    selectedCountry,
    selectedGrade,
    selectedSchool,
    selectedSubjects,
    selectedUnits,
  } = useContextProvider();

  const finalArray = selectedSubjects
    .map((subject) => {
      const subjectSelectedUnits = selectedUnits.filter(
        (unit) => unit.subject_id === subject.subject_id
      );

      if (subject.units.length > 0) {
        if (subjectSelectedUnits.length === 0) {
          return null;
        }

        return {
          ...subject,
          units: subjectSelectedUnits,
        };
      }

      return subject;
    })
    .filter((subject) => subject !== null);

  const handleClose = () => setOpenModal(false);

  const handleConfirm = async () => {
    if (!selectedCountry || !selectedGrade || selectedSubjects.length === 0) {
      return toast.error(
        "Minimum data is required. Go back and add all required data"
      );
    }

    const sendData = {
      country: selectedCountry?.name || "",
      grade: selectedGrade?.toString() || "",
      school: selectedSchool?.name || "",
      subjects_with_units:
        finalArray?.map((subject) => ({
          subject_id: subject.subject_id,
          unit_id: subject.units?.map((unit) => unit.unit_id) || [],
        })) || [],
    };

    try {
      setLoader(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/setup-profile`,
        sendData,
        {
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        }
      );
      toast.success(data?.message || "Profile setup completed successfully");
      handleClose();

      router.push(path);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.error || "Profile update failed");
    } finally {
      setLoader(false);
    }
  };

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="flex items-center justify-center"
    >
      <div className="w-[550px] h-52 flex flex-col flex-center bg-white p-6 rounded-lg shadow-lg text-center">
        <h2
          id="modal-modal-title"
          className="text-xl font-semibold mb-4 text-gray-800"
        >
          Are you sure you want to take{" "}
          <span className="font-bold text-textColor">{plan}</span> plan?
        </h2>
        <div className="flex justify-center space-x-4 mt-6">
          <button
            disabled={loader}
            onClick={handleConfirm}
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
          >
            {loader ? "Loading.." : " Confirm"}
          </button>
          <button
            disabled={loader}
            onClick={handleClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalView;
