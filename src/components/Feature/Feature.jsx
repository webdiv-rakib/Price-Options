import { CiCircleCheck } from "react-icons/ci";
const Feature = ({ feature }) => {
    return (
        <div>
            <p className="flex items-center gap-2"><CiCircleCheck className="text-green-500"></CiCircleCheck>{feature}</p>
        </div>
    );
};

export default Feature;