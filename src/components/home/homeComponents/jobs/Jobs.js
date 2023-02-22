import React from 'react';
import { Link } from 'react-router-dom';
import style from "./job.module.css";

const handleJobClick = (e) => {
    if(e == 'job'){
        console.log('job');
    }else if(e == 'acc'){
        console.log('acc');
    }
}


function Jobs({handleChangePage}) {

 

    return(
        <>
        <div className={style.jobContainer}>
           
            <div className={`row ${style.mainJobDiv}`}>
                <div className={`col-sm-12 col-md-6 ${style.colCenter}`} >
                    <Link to="/Jobs/Job"  onClick={handleChangePage} className={style.navLink}>
                        <div className={style.jobCard} onClick={() => handleJobClick('job')}>
                            <img className="" height={350} src={require('../../images/rent.png')} alt="Card image cap"/>
                            <div className="">
                                <h2 className={style.cardText}>Jobs</h2>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={`col-sm-12 col-md-6 ${style.colCenter}`} >
                    <Link to="/Jobs/Rent" onClick={handleChangePage} className={style.navLink}>
                       <div className={style.jobCard} onClick={() => handleJobClick('acc')}>
                         <img className="" height={350} src={require('../../images/rent.png')} alt="Card image cap"/>
                         <div className="">
                            <h2 className={style.cardText}>Rent</h2>
                         </div>
                       </div>
                    </Link>
                </div>

            </div>
        </div>
        </>
    );
}

export default Jobs;