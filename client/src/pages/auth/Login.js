import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";
import "./login.css";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <div className="heading-io">
             <h1><span>W</span>elcome</h1>
             
             <h1><span>DRS</span> BLOOD BANK</h1>
             <p>
             Established in the year 1998, DRS Blood Bank Research & Development Centre in Jubilee Hills,Hyderabad listed under Blood Banks in Hyderabad.
             Address : Near Jublihills check Post, Jubliee Hills Hyderabad - 500 082. Phone : 040 - 23353114 040 5568668 040 23554849.
             A blood bank is a center where blood gathered as a result of blood donation is stored and preserved for later use in blood transfusion. The term "blood bank" typically refers to a department of a hospital usually within a Clinical Pathology laboratory where the storage of blood product occurs and where pre-transfusion and Blood compatibility testing is performed. However, it sometimes refers to a collection center, and some hospitals also perform collection. Blood banking includes tasks related to blood collection, processing, testing, separation, and storage
             </p>
             <div className="quote">
             <h3 className="q"><span>E</span>very Blood</h3>
             <h3 className="w"><span>D</span>onor</h3>
             <h3 className="e"><span>I</span>s A</h3>
             <h3 className="r"><span>L</span>ife</h3>
             <h3 className="t"><span>S</span>aver</h3>
             </div>

            </div>
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Login"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;