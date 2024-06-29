import React from "react";
import "./Examinations.css";
import { LuCalendarClock } from "react-icons/lu";


const Examinations = () => {
  return (
    <div className="E_container">
      <div className="E-main">
        <div className="E_div_1">
          <span>Upcoming</span>
          <span>examinations</span>
          <span>
            Enquire about the Examinations and register for the Exams.
          </span>
        </div>
        <div className="E_div_2">
            <div><LuCalendarClock size={30} color="#12406f"/></div>
            <div>
                <div className="E_date">02nd October 2014</div>
                <div className="E_subtext">Level 1 Exam</div>
            </div>
        </div>
        <div className="E_div_3">
            <div><LuCalendarClock size={30} color="#12406f"/></div>
            <div>
                <div className="E_date">02nd October 2014</div>
                <div className="E_subtext">Level 1 Exam</div>
                <div className="E_subtext">Lorem ipsum</div>
                <div className="E_subtext"> Lorem, ipsum.</div>
            </div>
        </div>
        <div className="E_div_4">
            <div><LuCalendarClock size={30} color="#12406f"/></div>
            <div>
                <div className="E_date">02nd October 2014</div>
                <div className="E_subtext">Level 1 Exam</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Examinations;
