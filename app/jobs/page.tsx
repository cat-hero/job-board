"use client";
import React from "react";
import axios from "axios";
const Jobs = () => {
  const getJobs = async () => {
    try {
      const jobs = await axios.get("/api/jobs");
      console.log(jobs);
    } catch (error) {
      console.error(error);
    }
  };
  React.useEffect(() => {
    getJobs();
  }, []);
  return <div>Jobs1232131232</div>;
};
export default Jobs;
