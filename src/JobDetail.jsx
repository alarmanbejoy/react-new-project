import { useLoaderData, useParams } from "react-router-dom";

const JobDetail = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job, id);

  return (
    <div>
      <h1>job details:{job.job_title}</h1>
      <div className="grid grid-cols-4  gap-3">
        <h1>deltail:</h1>
        <div className="grid  md: grid-cols-3 border border-red-600">
          <h2>deatails:</h2>
        </div>
        <div className=" border"><button className="btn btn-primary">APPly btn</button></div>
      </div>
    </div>
  );
};

export default JobDetail;
