import React from "react";
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import style from '../../assets/style/job_rent/search.module.css';


function SearchForm(){
    const [formData, setFormData] = useState({searchName: '', zipCode: ''});

    const handleChange = (e) => {
        if (e.target.name === 'name') {
            setFormData({...formData, searchName: e.target.value})
        } else if (e.target.name === 'zip') {
            setFormData({...formData, zipCode: e.target.value})
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        let userInfo = formData;
        console.log({...userInfo});
    }

    return(
        <>
        <Col sm="12" md="12" lg="12" className='d-flex align-item-center'>
        <form className={`contact__form w-100 rounded-4 ${style.form}`}>
            <div className={`row m-4 w-100 ${style.paddingForm}`}>
                <div className={`col-sm-12 col-md-7 col-lg-7 form-group ${style.search_div} ${style.form_m}`}>
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
                <div className={`col-sm-6 col-md-3 col-lg-3 form-group  ${style.form_m}`}>
                    <input 
                            className={`${style.form_control} ${style.search_name}`}
                            id="zip"
                            name="zip"
                            placeholder="Zip Code"
                            type="text"
                            value={formData.zipCode}
                            onChange={handleChange}
                        />
                </div>
                <div className={`col-sm-6 col-md-2 col-lg-2 form-group  ${style.form_m}`}>
                    <button className={`btn rounded-10 w-100 ${style.job_btn}`} type="submit" onClick={handleClick}>Saved Job</button>
                </div>
           </div>
     
        </form>
        </Col>
        
        </>
    );
}

export default SearchForm;