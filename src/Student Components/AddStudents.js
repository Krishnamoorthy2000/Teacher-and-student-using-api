import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import StudentsBase from "../StudentsBase";

export function AddStudents({ student, setStudent }) {
  const history = useHistory();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  const addNewStudent = async () => {
    const newStudent = {
      id,
      name,
      dob,
      gender,
      email,
      contact,
      age,
      address,
    };

    try {
      const response = await fetch("https://641eba77ad55ae01ccaeda8b.mockapi.io/Data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });

      const data = await response.json();
      setStudent([...student, data]);
      history.push("/students");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StudentsBase title="Add new Student">
      <div>
        <input
          placeholder="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="DOB"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <input
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <input
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          placeholder="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button className="btn add-btn" onClick={addNewStudent}>
        Add
      </button>

      <button className="btn back" onClick={() => history.push("/students")}>
        Back
      </button>
    </StudentsBase>
  );
}
