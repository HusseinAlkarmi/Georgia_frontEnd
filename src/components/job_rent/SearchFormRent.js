import React from "react";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import style from "../../assets/style/job_rent/search.module.css";

function SearchFormRent() {
  const [formData, setFormData] = useState({ 'name': "", 'zipCode': "" , 'filter': '0'});
  const [showFilter, setShowFilter] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log(formData);
    // if (e.target.name === "name") {
    //   setFormData({ ...formData, searchName: e.target.value });
    // } else if (e.target.name === "zip") {
    //   setFormData({ ...formData, zipCode: e.target.value });
    // }

  };

  const handleClick = (e) => {
    e.preventDefault();
    let userInfo = formData;
    console.log({ ...userInfo });
  };

  return (
    <>
      <Col sm="12" md="12" lg="12" className="d-flex align-item-center">
        <form className={`contact__form w-100 rounded-4 ${style.form}`}>
          <div className={`row mt-4 w-100 ${style.paddingForm}`}>
            <div
              className={`col-sm-12 col-md-7 col-lg-6 form-group ${style.search_div} ${style.form_m}`}
            >
              <i className={`${style.search_icon} fas fa-search`}></i>
              <input
                className={`${style.form_control} ${style.search_name}`}
                id="name"
                name="name"
                placeholder="What are you looking for?"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div
              className={`col-sm-6 col-md-3 col-lg-2 form-group  ${style.form_m}`}
            >
              <input
                className={`${style.form_control} ${style.search_name}`}
                id="zip"
                name="zipCode"
                placeholder="Zip Code"
                type="text"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </div>

            {/* <div className={`col-sm-6 col-md-2 col-lg-2 form-group  ${style.form_m}`}> */}
            <select onChange={handleChange} name='filter'
              className={`col-sm-6 col-md-2 col-lg-2 form-group ${style.filterRent} ${style.form_m}`}
            >
              <option value="0">Filter</option>
              <option value="1">Select1</option>
              <option value="2">Select2</option>
              <option value="3">Select3</option>
            </select>
            {/* </div> */}

            <div
              className={`col-sm-6 col-md-2 col-lg-2 form-group  ${style.form_m}`}
            >
              <button
                className={`btn rounded-10 w-100 ${style.job_btn}`}
                type="submit"
                onClick={handleClick}
              >
                Search
              </button>
            </div>
          </div>

          {(formData.filter != 0) && (
            <>
              <div className={`row mt-4 w-100 ${style.paddingForm}`}>
                <label
                  className={`col-sm-12 col-md-7 col-lg-4 ${style.rentLabel}`}
                >
                  Living area
                </label>
                <label
                  className={`col-sm-12 col-md-7 col-lg-4 ${style.rentLabel}`}
                >
                  Type
                </label>
                <label
                  className={`col-sm-12 col-md-7 col-lg-4 ${style.rentLabel}`}
                >
                  Gender
                </label>
              </div>

              <div className={`row mt-2 w-100 ${style.paddingForm}`}>
                <div
                  className={`col-sm-12 col-md-7 col-lg-4 form-group ${style.search_div} ${style.form_m}`}
                >
                  <input
                    className={`${style.form_control} ${style.search_name}`}
                    id="name"
                    name="name"
                    placeholder="Where do you want to live?"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div
                  className={`col-sm-6 col-md-2 col-lg-4 form-group ${style.divSelectRent} ${style.form_m}`}
                >
                  <select className={` ${style.filterRent} `}>
                    <option value="0">Apartment</option>
                    <option value="1">Hoom</option>
                    <option value="2">Room</option>
                  </select>
                </div>

                <div
                  className={`col-sm-6 col-md-2 col-lg-4 form-group ${style.divSelectRent} ${style.form_m}`}
                >
                  <select className={` ${style.filterRent}`}>
                    <option value="0">Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </select>
                </div>
              </div>
            </>
          )}
        </form>
      </Col>
    </>
  );
}

export default SearchFormRent;
