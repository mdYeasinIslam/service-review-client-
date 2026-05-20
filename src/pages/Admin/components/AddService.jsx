import { useContext, useState } from "react";
import { AuthProvider } from "../../../Context/UserContext";
import { useAxiosPublic } from "../../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import ImageUpload from "../../SharedPage/ImageUpload/ImageUpload";
import img from '../../../assets/image/custom-service/travel-world.jpg'

const CATEGORIES = [
    "Beach",
    "Adventure",
    "Cultural",
    "Wildlife",
    "City",
    "Mountain",
    "Desert",
    "Cruise",
];

const EMPTY_FORM = {
    serviceName: "",
    servicePrice: "",
    details: "",
    category: "Beach",
    status: "Active",
};

const AddService = () => {
    const { navControl, imgUrl } = useContext(AuthProvider);
    const axiosPublic = useAxiosPublic();
    const [form, setForm] = useState(EMPTY_FORM);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

    const validate = () => {
        const e = {};
        if (!form.serviceName.trim()) e.serviceName = "Service name is required";
        if (!form.servicePrice || isNaN(form.servicePrice) || Number(form.servicePrice) <= 0)
            e.servicePrice = "Valid price required";
        if (!form.details.trim()) e.details = "Service details are required";
        return e;
    };

    const formHandler = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
            return;
        }

        setSubmitted(true);
        setTimeout(async () => {
            const serviceInfo = {
                serviceName: form.serviceName,
                serviceImg: imgUrl,
                servicePrice: Number(form.servicePrice),
                details: form.details,
                category: form.category,
                status: form.status,
            };

            try {
                const res = await axiosPublic.post("/custom-service", { ...serviceInfo });
                if (res.data?.acknowledged) {
                    toast("Service is added successfully");
                    setForm(EMPTY_FORM);
                    setErrors({});
                }
            } catch (error) {
                toast.error("Failed to add service");
                setSubmitted(false);
            }
        }, 1000);
    };

    const Field = ({ label, k, type = "text", placeholder, textarea, required }) => (
        <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-amber-900">
                {label} {required && "*"}
            </label>
            {textarea ? (
                <textarea
                    rows={3}
                    value={form[k]}
                    onChange={(e) => set(k, e.target.value)}
                    placeholder={placeholder}
                    className={`p-2.5 border-2 rounded-lg text-sm resize-vertical outline-none bg-white text-amber-950 font-inherit placeholder-gray-400 ${
                        errors[k] ? "border-red-600" : "border-amber-100"
                    }`}
                />
            ) : (
                <input
                    type={type}
                    value={form[k]}
                    onChange={(e) => set(k, e.target.value)}
                    placeholder={placeholder}
                    className={`p-2.5 border-2 rounded-lg text-sm outline-none bg-white text-amber-950 placeholder-gray-400 ${
                        errors[k] ? "border-red-600" : "border-amber-100"
                    }`}
                />
            )}
            {errors[k] && <span className="text-xs text-red-600">{errors[k]}</span>}
        </div>
    );

    return (
        <div className="font-[cursive]">
            {/* <div className={`relative w-full h-80 md:h-96 bg-cover bg-center mb-6`} style={{ backgroundImage: `url(${img})` }}>
                <div
                    className={`absolute font-[cursive] top-28 w-full ${
                        navControl ? "transition-all duration-500" : "transition-all duration-500 z-10"
                    } font-semibold text-center text-white`}
                >
                    <span className="text-2xl md:text-5xl block mb-2 font-bold">
                        Customize your Service
                    </span>
                    <span className="text-xl md:text-2xl">Add More Services....</span>
                </div>
            </div> */}

            <div className="py-16 px-4 md:px-0">
                <div className="mb-8">
                    <h1 className="text-3xl text-center font-semibold">Insert Your Service Details</h1>
                    <p className="text-center text-gray-600">It should be related with tourism</p>
                </div>

                {submitted ? (
                    <div className="max-w-2xl mx-auto bg-emerald-50 border border-emerald-400 rounded-2xl p-8 text-center">
                        <div className="text-5xl mb-2">🎉</div>
                        <h2 className="text-emerald-800 font-bold text-2xl">Service Added Successfully!</h2>
                        <p className="text-emerald-700 mt-2">{form.serviceName} is now live in your services.</p>
                    </div>
                ) : (
                    <div className="md:flex md:flex-row-reverse items-center gap-8">
                        <figure className="md:w-1/2 mb-8 md:mb-0">
                            <img src={img} alt="Travel" className="w-3/4 mx-auto rounded-lg shadow-lg" />
                        </figure>

                        <form onSubmit={formHandler} className="md:w-1/2 bg-white border border-amber-100 rounded-2xl p-8 flex flex-col gap-5">
                            <Field label="Service Name" k="serviceName" placeholder="e.g. Mountain Trekking" required />

                            <Field label="Service Price (USD)" k="servicePrice" type="number" placeholder="e.g. 299" required />

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-amber-900">Category</label>
                                <select
                                    value={form.category}
                                    onChange={(e) => set("category", e.target.value)}
                                    className="p-2.5 border-2 border-amber-100 rounded-lg text-sm bg-white text-amber-950 cursor-pointer outline-none"
                                >
                                    {CATEGORIES.map((c) => (
                                        <option key={c}>{c}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-amber-900">Status</label>
                                <select
                                    value={form.status}
                                    onChange={(e) => set("status", e.target.value)}
                                    className="p-2.5 border-2 border-amber-100 rounded-lg text-sm bg-white text-amber-950 cursor-pointer outline-none"
                                >
                                    <option>Active</option>
                                    <option>Draft</option>
                                    <option>Sold Out</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-semibold text-amber-900">Service Image (Optional)</label>
                                <ImageUpload />
                            </div>

                            <Field label="Service Details" k="details" textarea placeholder="Describe your service..." required />

                            <div className="flex gap-3 justify-end pt-2">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setForm(EMPTY_FORM);
                                        setErrors({});
                                    }}
                                    className="bg-amber-50 text-amber-700 border-none rounded-lg px-6 py-2.5 font-semibold text-sm cursor-pointer hover:bg-amber-100 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-amber-600 text-white border-none rounded-lg px-7 py-2.5 font-bold text-sm cursor-pointer hover:bg-amber-700 transition"
                                >
                                    Publish Service →
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddService;
