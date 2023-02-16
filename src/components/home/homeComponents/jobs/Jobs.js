import React from 'react';
import style from "./job.module.css";



const handleJobClick = (e) => {
    if(e == 'job'){
        console.log('job');
    }else if(e == 'acc'){
        console.log('acc');
    }
}

function jobs() {

    return(
        <>
        <div className={style.jobContainer}>
           
            <div className={`row ${style.mainJobDiv}`}>
                <div className={`col-sm-12 col-md-6 ${style.colCenter}`} >
                    <div className={style.jobCard} onClick={() => handleJobClick('job')}>
                         <img className="" height={350} src={require('../../images/rent.png')} alt="Card image cap"/>
                         <div className="">
                            <h2 className={style.cardText}>Jobs</h2>
                         </div>
                    </div>
                </div>
                <div className={`col-sm-12 col-md-6 ${style.colCenter}`} >
                    <div className={style.jobCard} onClick={() => handleJobClick('acc')}>
                         <img className="" height={350} src={require('../../images/rent.png')} alt="Card image cap"/>
                         <div className="">
                            <h2 className={style.cardText}>Accomodation</h2>
                         </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}

export default jobs;