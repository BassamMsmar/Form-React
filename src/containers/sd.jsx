import { useState } from "react";
import Model from "./Model";

export default function Forms() {
  const [showModel, setShowModel] = useState(false);
  const [infoForm, setInfoForm] = useState({
    name: "",
    phone: "",
    age: "",
    isEmployed: false,
    salary: "less_than_5000",
  });

  const btnIsDisabled =
    infoForm.name === "" || infoForm.phone === "" || infoForm.age === "";

  function handleSubmit(e) {
    e.preventDefault();
    setShowModel(true);
  }

  function handleFormClick(e) {
    e.stopPropagation();
  }

  return (
    <div className="bg-light" onClick={() => setShowModel(false)}>
      <form className="form mx-5" onClick={handleFormClick}>
        <div className="d-block text-center mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={infoForm.name}
            onChange={(e) =>
              setInfoForm({ ...infoForm, name: e.target.value })
            }
          />
        </div>
        <div className="d-block text-center mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Phone"
            value={infoForm.phone}
            onChange={(e) =>
              setInfoForm({ ...infoForm, phone: e.target.value })
            }
          />
        </div>
        <div className="d-block text-center mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Age"
            value={infoForm.age}
            onChange={(e) => setInfoForm({ ...infoForm, age: e.target.value })}
          />
        </div>
        <div className="d-block mb-3">
          <div className="d-flex align-items-center">
            <label className="form-check-label me-2" htmlFor="employedCheckbox">
              Employed
            </label>
            <input
              type="checkbox"
              className="form-check-input"
              id="employedCheckbox"
              checked={infoForm.isEmployed}
              onChange={(e) =>
                setInfoForm({ ...infoForm, isEmployed: e.target.checked })
              }
            />
          </div>
        </div>
        <div className="d-block text-center mb-3">
          <select
            className="form-select text-center"
            value={infoForm.salary}
            onChange={(e) =>
              setInfoForm({ ...infoForm, salary: e.target.value })
            }
          >
            <option value="less_than_5000">Less than $5,000</option>
            <option value="5000_to_10000">$5,000 - $10,000</option>
            <option value="more_than_10000">More than $10,000</option>
          </select>
        </div>
        <button
          className="btn btn-success m-auto d-block"
          onClick={handleSubmit}
          disabled={btnIsDisabled}
        >
          Send
        </button>
      </form>
      <div>
        <Model isVisibal={showModel} />
      </div>
    </div>
  );
}
import { useState } from "react";
import Model from "./Model";

export default function Forms() {
  const [showModle, setShowModle] = useState(false);
  const [infoForm, setInfoForm] = useState({
    name: "",
    phone: "",
    age: "",
    isEmployed: false,
    salary: "less_than_5000",
  });

  const btnIsDisabled =
    infoForm.name === "" || infoForm.phone === "" || infoForm.age === "";

  // const [clickSubmit, setClickSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setShowModle(true);
  }
  function handleFormClick(e) {
    e.stopPropagation();
  }

  return (
    <div className="bg-light" onClick={() => setShowModle(false)}>
      <form className="form mx-5">
        <div className="d-block text-center mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={infoForm.name}
            onChange={(e) => setInfoForm({ ...infoForm, name: e.target.value })}
          />
        </div>
        <div className="d-block text-center mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Phone"
            value={infoForm.phone}
            onChange={(e) =>
              setInfoForm({ ...infoForm, phone: e.target.value })
            }
          />
        </div>
        <div className="d-block text-center mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Age"
            value={infoForm.age}
            onChange={(e) => setInfoForm({ ...infoForm, age: e.target.value })}
          />
        </div>
        <div className="d-block mb-3">
          <div className="d-flex align-items-center">
            <label className="form-check-label me-2" htmlFor="employedCheckbox">
              Employed
            </label>
            <input
              type="checkbox"
              className="form-check-input"
              id="employedCheckbox"
              checked={infoForm.isEmployed}
              onChange={(e) =>
                setInfoForm({ ...infoForm, isEmployed: e.target.checked })
              }
            />
          </div>
        </div>
        <div className="d-block text-center mb-3">
          <select
            className="form-select text-center"
            value={infoForm.salary}
            onChange={(e) =>
              setInfoForm({ ...infoForm, salary: e.target.value })
            }
          >
            <option value="less_than_5000">Less than $5,000</option>
            <option value="5000_to_10000">$5,000 - $10,000</option>
            <option value="more_than_10000">More than $10,000</option>
          </select>
        </div>
        {/* <Button /> */}
        <button
          className="btn btn-success m-auto d-block"
          onClick={handleFormClick}
          disabled={btnIsDisabled}
        >
          Send
        </button>
      </form>
      <div>
        <Model isVisibal={showModle} />
      </div>
    </div>
  );
}


