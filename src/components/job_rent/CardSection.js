import React from "react";
import style from "../../assets/style/job_rent/card.module.css";
import Card from "./Card";
import RentCard from "./RentCard";
import { useState } from "react";
import PopUpRent from "./PopUpRent";
import PopUpJob from "./PopUpJob";
import useFetch from "../../hooks/useFetch";
import JobForm from "./Post_Form/JobForm";
import RentForm from "./Post_Form/RentForm";
import useAxios from "../../hooks/useAxios";

function CardSection({
  index,
  showModal,
  setShowModal,
  rentPopUp,
  jobPopUp,
  setJobPopUp,
  setRentPopUp,
}) {

  const jobData = {id: 0, name: '', company:'' , created_at:'', description:'', email:'', phone:'', place:'', salary:'', type:'', title:'', user_image:'' };

  const [popRentInfo, setPopRentInfo] = useState(jobData);

  const [popJobInfo, setPopJobInfo] = useState(jobData);
  const [jobForm, setJobFormOpen] = useState(false);
  const [rentForm, setRentOpen] = useState(false);

  const [Data] = useAxios("en/jobs");
  const Cards = Data?.data;
  console.log(Cards);
  // const[Data] = useFetch('https://jsonplaceholder.typicode.com/users');

  // const Cards = Data.slice(0, 6);

  function closeModal() {
    document.body.style.overflow = "auto";
    setRentPopUp(false);
    setJobPopUp(false);
    setShowModal(false);
  }
  const handleOpenModalForm = () => {
    document.body.style.overflow = "hidden";
    setJobFormOpen(true);
  };

  const handleOpenRentModal = () => {
    document.body.style.overflow = "hidden";
    setRentOpen(true);
  };

  return (
    <>
      <div className="">
        <div className={`row d-flex justify-content-end ${style.post_row}`}>
          <div className="col-lg-2 col-md-2 col-sm-6">
            {index === "Job" ? (
              <button
                className={`w-100 ${style.btn_post}`}
                onClick={handleOpenModalForm}
              >
                Post a job
              </button>
            ) : (
              <button
                className={`w-100 ${style.btn_post}`}
                onClick={handleOpenRentModal}
              >
                Post for rent
              </button>
            )}
            {jobForm && <JobForm setJobFormOpen={setJobFormOpen} />}
            {rentForm && <RentForm setRentOpen={setRentOpen} />}
          </div>
        </div>

        <div className={`row pb-5 ${style.main_card_section}`}>
          {index === "Rent"
            ? Cards?.slice(0,3).map((item, index) => (
                <RentCard
                  key={item.id}
                  id={item.id}
                  company={item.company}
                  created_at={item.created_at}
                  description={item.description}
                  email={item.email}
                  phone={item.phone}
                  place={item.place}
                  salary={item.salary}
                  type={item.type}
                  title={item.title}
                  user_image={item.user_image}
                  user_name={item.user_name}
                  setShowModal={setShowModal}
                  setRentPopUp={setRentPopUp}
                  popRentInfo={popRentInfo}
                  setPopRentInfo={setPopRentInfo}
                 
                />
              ))
            : Cards?.map((item, index) => (
                <Card
                  key={item.id}
                  id={item.id}
                  company={item.company}
                  created_at={item.created_at}
                  description={item.description}
                  email={item.email}
                  phone={item.phone}
                  place={item.place}
                  salary={item.salary}
                  type={item.type}
                  title={item.title}
                  user_image={item.user_image}
                  user_name={item.user_name}
                  setShowModal={setShowModal}
                  setJobPopUp={setJobPopUp}
                  popJobInfo={popJobInfo}
                  setPopJobInfo={setPopJobInfo}
                />
              ))}

          {showModal && (
            <div className={style.modalSection}>
              <div className={style.closeModalDiv}>
                <button className={`closeBtnModal`} onClick={closeModal}>
                  <i className={`fas fa-times ${style.closeModalBtn}`}></i>
                </button>
              </div>
              {rentPopUp ? (
                <PopUpRent popRentInfo={popRentInfo} />
              ) : (
                <PopUpJob popJobInfo={popJobInfo} />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CardSection;
