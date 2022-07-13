import Table from "react-bootstrap/Table";
import React, { useState } from "react";
import data from "./data.json";

export const App = () => {
  const [persons, setPersons] = useState(data.applicants);
  const [jobs, setJobs] = useState(data.jobs);
  const [skill, setSkill] = useState(data.skills);

  const findJob = (id) => {
    const result = jobs.find((item) => item.id === id);
    // console.log(result);
    return result.name;
  };

  return (
    <div className="App">
      <Table striped="columns">
        <thead>
          <tr>
            <th>Job</th>
            <th>Applicant Name</th>
            <th>Email Address</th>
            <th>Website</th>
            <th>Skills</th>
            <th>Cover Letter Paragraph</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr>
              {/* {console.log(person)} */}
              <td>{findJob(person.job_id)}</td>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>{person.website}</td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      {skill.map((skill) => {
                        if (skill.applicant_id === person.id) {
                          return <td>{skill.name}</td>;
                        }
                      })}
                    </tr>
                  </tbody>
                </table>
              </td>

              <td>{person.cover_letter}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
