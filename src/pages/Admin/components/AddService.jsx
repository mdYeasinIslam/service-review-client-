import { useContext, useState } from "react";
import { AuthProvider } from "../../../Context/UserContext";
import { useAxiosPublic } from "../../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import ImageUpload from "../../SharedPage/ImageUpload/ImageUpload";
// import img from "../../../assets/image/custom-service/travel-world.jpg";

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
const Field = ({
  label,
  k,
  type = "text",
  placeholder,
  textarea,
  required,
}) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-semibold text-white">
      {label} {required && "*"}
    </label>
    {textarea ? (
      <textarea
        rows={3}
        //   value={form[k]}
        name={k}
        //   onChange={(e) => set(k, e.target.value)}
        placeholder={placeholder}
        className={`p-2.5 border-2 rounded-lg text-sm resize-vertical outline-none bg-black/50 text-white font-inherit placeholder-gray-400 `}
        required
      />
    ) : (
      <input
        type={type}
        //   value={form[k]}
        //   onChange={(e) => set(k, e.target.value)}
        name={k}
        placeholder={placeholder}
        className={`p-2.5 border-2 rounded-lg text-sm outline-none bg-black/50 text-white placeholder-gray-400 `}
        required
      />
    )}
    {/* {errors[k] && <span className="text-xs text-red-600">{errors[k]}</span>} */}
  </div>
);
const AddService = () => {
  const { imgUrl } = useContext(AuthProvider);
  const axiosPublic = useAxiosPublic();
  const formHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    // const serviceImg = form.serviceImg.value;
    const servicePrice = form.price.value;
    const details = form.details.value;
    const serviceInfo = {
      serviceName,
      serviceImg: imgUrl,
      servicePrice,
      details,
    };
    const res = await axiosPublic.post("/custom-service", { ...serviceInfo });
    console.log(res);
    if (res.data?.acknowledged) {
      toast("Service is added successfully");
      form.reset();
    }
  };

  return (
    <div className="py-4 px-4 md:px-0">
      <div className="mb-8">
        <h1 className="text-3xl text-center font-semibold">
          Insert Your Service Details
        </h1>
        <p className="text-center text-gray-600">
          It should be related with tourism
        </p>
      </div>

      <div className=" gap-8">
        <form
          onSubmit={formHandler}
          className="w-full bg-black/50 border border-amber-100 rounded-2xl p-8 flex flex-col gap-5"
        >
          <Field
            label="Service Name"
            k="serviceName"
            type="text"
            textarea={false}
            placeholder="e.g. Mountain Trekking"
            required
          />

          <Field
            label="Service Price (USD)"
            k="price"
            type="number"
            textarea={false}
            placeholder="e.g. 299"
            required
          />

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-white">Category</label>
            <select
              //   value={form.category}
              name="category"
              // onChange={(e) => set("category", e.target.value)}
              className="p-2.5 border-2 border-amber-100 rounded-lg text-sm bg-black/50 text-white cursor-pointer outline-none"
            >
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-white">Status</label>
            <select
              //   value={form.status}
              name="status"
              // onChange={(e) => set("status", e.target.value)}
              className="p-2.5 border-2 border-amber-100 rounded-lg text-sm bg-black/50 text-white cursor-pointer outline-none"
            >
              <option>Active</option>
              <option>Draft</option>
              <option>Sold Out</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-white">
              Service Image (Optional)
            </label>
            <ImageUpload />
          </div>

          <Field
            label="Service Details"
            k="details"
            type="text"
            textarea={true}
            placeholder="Describe your service..."
            required
          />

          <div className="flex gap-3 justify-end pt-2">
            {/* <button
              type="button"
              onClick={() => {
                setForm(EMPTY_FORM);
                setErrors({});
              }}
              className="bg-amber-50 text-amber-700 border-none rounded-lg px-6 py-2.5 font-semibold text-sm cursor-pointer hover:bg-amber-100 transition"
            >
              Cancel
            </button> */}
            <button
              type="submit"
              className="bg-amber-600 text-white border-none rounded-lg px-7 py-2.5 font-bold text-sm cursor-pointer hover:bg-amber-700 transition"
            >
              Publish Service →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
