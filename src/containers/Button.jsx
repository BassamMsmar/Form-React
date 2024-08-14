export default function Button({ infoForm }) {
    console.log(infoForm)
  return (
    <>
      <button
        className="btn btn-success d-block mx-auto  text-center display-custom"
        
      >
        <a href="" className="text-white text-decoration-none ">
          Apply
        </a>
      </button>
      {/* <button
        className="btn btn-secondary d-block mx-auto  text-center display-custom"
        display
      >
        Apply
      </button> */}
    </>
  );
}
