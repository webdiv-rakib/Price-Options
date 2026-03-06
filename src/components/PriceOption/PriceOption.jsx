import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-blue-500 p-5 rounded-xl flex flex-col">
            <h2>
                <span className="text-5xl font-bold">Price:{price}$</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-3xl">{name}</h4>
            <div className="p-5 flex-grow">
                {
                    features.map((feature, idx) => <Feature feature={feature}
                        key={idx}></Feature>)
                }
            </div>
            <button className="btn w-full bg-green-600 font-bold rounded-2xl hover:bg-green-800 text-white">Buy Now</button>
        </div>
    );
};

export default PriceOption;