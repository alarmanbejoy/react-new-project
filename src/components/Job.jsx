
import { MdLocationOn } from "react-icons/md";
import { TbCoinTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const { id,logo,job_title,company_name,remote_or_onsite, location,job_type,salary} = job;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className=" flex gap-4">
            <button className=" px-4 py-2  font-extrabold border rounded-md text-green-700">{remote_or_onsite}</button>
            <button className="px-4 py-2  font-extrabold border rounded-md text-green-700">{job_type}</button>
        </div>
        <div className="flex gap-4">
          <h2 className="text-xl flex  "><MdLocationOn></MdLocationOn>{location}</h2> 
          <h2 className="text-xl flex"><TbCoinTaka></TbCoinTaka>{salary}</h2>
        </div>

        <div className="card-actions ">
         <Link to = {`/job/${id}`}>
         <button className="btn btn-primary">View Details</button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
