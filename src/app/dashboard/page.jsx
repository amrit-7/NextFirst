"use client";
import React from "react";

const Dashboard = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading data");
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
