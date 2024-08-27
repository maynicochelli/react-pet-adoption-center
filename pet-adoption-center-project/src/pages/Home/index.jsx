import { useState } from "react";
import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {
  const pets = [
    {
      id: "123456",
      name: "test",
      age: 1,
    },
    {
      id: "1234567",
      name: "test2",
      age: 2,
    },
  ];

  return (
    <div className="container">
      <form className="form-container">
        <h1>Register new Pet</h1>
        <input name="name" placeholder="Pet Name" type="text" />
        <input name="age" placeholder="Age" type="number" />
        <input name="gender" placeholder="Gender" type="text" />
        <input name="species" placeholder="Species" type="text" />
        <input name="breed" placeholder="Breed" type="text" />
        <input name="status" placeholder="Status" type="text" />
        <input name="desc" placeholder="Description" type="text" />
        <button type="button">Register</button>
      </form>

      {pets.map((pet) => (
        <div key={pet.id} className="card" >
          <div>
            <p>name: <span>{pet.name}</span></p>
            <p>age: <span>{pet.age}</span></p>
            <p>gender: <span>{pet.gender}</span></p>
            <p>species: <span>{pet.species}</span></p>
            <p>breed: <span>{pet.breed}</span></p>
            <p>status: <span>{pet.status}</span></p>
            <p>desc: <span>{pet.desc}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}

    </div>
  );
}

export default Home;
