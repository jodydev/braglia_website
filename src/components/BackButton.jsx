import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="back-button block md:hidden -ms-3">
      <IoMdArrowBack size={20} /> 
    </button>
  );
};

export default BackButton;