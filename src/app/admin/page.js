"use client";
import "./admin.css";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="links-container">
        <Link href="/admin/project" className="dashboard-card">
          <h2>Project</h2>
        </Link>
        <Link href="/admin/skill" className="dashboard-card">
          <h2>Skill</h2>
        </Link>
        <Link href="/admin/experience" className="dashboard-card">
          <h2>Experience</h2>
        </Link>
        <Link href="/admin/certifications" className="dashboard-card">
          <h2>Certification</h2>
        </Link>
        <Link href="/admin/education" className="dashboard-card">
          <h2>Education</h2>
        </Link>
        <Link href="/admin/messages" className="dashboard-card">
          <h2>Messages</h2>
        </Link>
      </div>
    </div>
  );
}
