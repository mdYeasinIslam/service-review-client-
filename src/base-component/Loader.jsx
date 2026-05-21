
const Loader = ({className}) => {
  return (
    <p className={`${className} text-center py-3`}>
      <span className="loading loading-spinner text-success w-12 h-12"></span>
    </p>
  );
}

export default Loader