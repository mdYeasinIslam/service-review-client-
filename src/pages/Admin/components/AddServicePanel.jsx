import { useContext, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../../../base-component/Loader";
import { AuthProvider } from "../../../Context/UserContext";
import { useAxiosPublic } from "../../../hooks/useAxiosPublic";
import ImageUpload from "../../SharedPage/ImageUpload/ImageUpload";
// import img from "../../../assets/image/custom-service/travel-world.jpg";

// const CATEGORIES = [
//   "Beach",
//   "Adventure",
//   "Cultural",
//   "Wildlife",
//   "City",
//   "Mountain",
//   "Desert",
//   "Cruise",
// ];

const Field = ({
  label,
  k,
  type = "text",
  placeholder,
  textarea,
  required,
  className,
}) => (
  <div className={`flex flex-col gap-1.5 ${className}`}>
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
const AddServicePanel = () => {
  const { imgUrl, setImgUrl } = useContext(AuthProvider);
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);

  const formHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    // const serviceImg = form.serviceImg.value;
    const personalService = form.personalService.value;
    const accomodation = form.accomodation.value;
    const meal = form.meal.value;
    const servicePrice = form.price.value;
    const details = form.details.value;
    if (imgUrl) {
      const serviceInfo = {
        serviceName,
        serviceImg: imgUrl,
        servicePrice,
        details,
        meal,
        personalService,
        accomodation,
      };
      const res = await axiosPublic.post("/add-service", { ...serviceInfo });
      console.log(res)
      if (res.data.success) {
        setLoading(false);
        toast("Service is added successfully");
        setImgUrl(null);
        form.reset();
      }
    }
    setLoading(false);
  };
  return (
    <div>
      {loading && (
        <Loader className={"absolute top-1/4 left-1/2 lg:left-[60%] z-50"} />
      )}
      <div className={` py-4 px-4 md:px-0 ${loading && "blur-sm"}`}>
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

            {/* <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-white">
                Category
              </label>
              <select
                name="category"
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
                name="status"
                className="p-2.5 border-2 border-amber-100 rounded-lg text-sm bg-black/50 text-white cursor-pointer outline-none"
              >
                <option>Active</option>
                <option>Draft</option>
                <option>Sold Out</option>
              </select>
            </div> */}
            <div className="flex justify-between gap-4">
              <Field
                label="Service Price (USD)"
                k="price"
                type="number"
                textarea={false}
                placeholder="e.g. 299"
                required
                className="w-full"
              />
              <div className="relative w-full flex flex-col gap-2">
                <label className="text-sm font-semibold text-white">
                  Service Image
                </label>
                {/* <input
                  type="text"
                  name="serviceImg"
                  // value={imgUrl ? imgUrl : ""}
                  placeholder={imgUrl}
                  readOnly
                  className="input input-bordered"
                /> */}
                <ImageUpload required={true} />
              </div>
            </div>

            <Field
              label="Service Details"
              k="details"
              type="text"
              textarea={true}
              placeholder="Describe about service..."
              required
            />
            <Field
              label="Meal"
              k="meal"
              type="text"
              textarea={true}
              placeholder="Describe about meal..."
              required
            />
            <Field
              label="Personal Service"
              k="personalService"
              type="text"
              textarea={true}
              placeholder="Describe about personalService..."
              required
            />
            <Field
              label="Accommodation"
              k="accomodation"
              type="text"
              textarea={true}
              placeholder="Describe about accomodation..."
              required
            />

            <div className="flex gap-3 justify-end pt-2">
              <button
                disabled={!imgUrl}
                type="submit"
                className="bg-amber-600 text-white border-none rounded-lg px-7 py-2.5 font-bold text-sm cursor-pointer hover:bg-amber-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Publish Service →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddServicePanel;
