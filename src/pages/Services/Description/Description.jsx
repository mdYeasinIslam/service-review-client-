const Description = ({ service }) => {
  const { name, details, price, accomodation, meal, personalService } = service;

  return (
    <div className="md:w-[90%] mx-auto space-y-3 pt-8 md:pt-10 ">
      <h1 className="text-xl font-semibold">Name : {name}</h1>
      <div>
        <h1 className="text-xl font-semibold">Overview : </h1>
        <p>{details}</p>
      </div>

      <div>
        <h1 className="text-xl font-semibold">Meals :</h1>
        <p>{meal}</p>
      </div>
      <div>
        <h1 className="text-xl font-semibold">
          Cost : <span className="font-normal"> BDT.{price}</span>
        </h1>
      </div>
      <div>
        <h1 className="text-xl font-semibold">Accomodation :</h1>
        <p>{accomodation}</p>
      </div>
      <div>
        <h1 className="text-xl font-semibold">Family Room :</h1>
        <p>{personalService}</p>
      </div>
    </div>
  );
};

export default Description;
