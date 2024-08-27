import { useEffect, useState, useRef } from 'react';
import './style.css';
import Edit from '../../assets/edit.svg';
import Trash from '../../assets/trash.svg';
import api from '../../services/api';

function Home() {
  const [pets, setPets] = useState([])

  const inputName = useRef();
  const inputAge = useRef();
  const inputGender = useRef();
  const inputSpecies = useRef();
  const inputBreed = useRef();
  const inputStatus = useRef();
  const inputDescription = useRef();
  const inputImage = useRef();

  async function getPets() {
    const responseApi = await api.get('/pets')
    setPets(responseApi.data)
    console.log(pets)
  }

  async function createPets() {
    await api.post('/pets', {
      name: inputName.current.value,
      age: Number(inputAge.current.value),
      gender: inputGender.current.value,
      species: inputSpecies.current.value,
      breed: inputBreed.current.value,
      status: inputStatus.current.value,
      desc: inputDescription.current.value,
      image_url: inputImage.current.value,
    })

    getPets()
  }

  async function updatePets(id) {
    await api.put(`/pets/${id}`, {
      name: inputName.current.value,
      age: Number(inputAge.current.value),
      gender: inputGender.current.value,
      species: inputSpecies.current.value,
      breed: inputBreed.current.value,
      status: inputStatus.current.value,
      desc: inputDescription.current.value,
      image_url: inputImage.current.value,
    })

    getPets()
  }

  async function deletePets(id) {
    await api.delete(`/pets/${id}`)

    getPets()
  }

  useEffect(() => {
    getPets()
  }, []);

  return (
    <div className="container">
      <form className="form-container">
        <h1>Register new Pet</h1>
        <input name="name" placeholder="Pet Name" type="text" ref={inputName}/>
        <input name="age" placeholder="Age" type="number" ref={inputAge}/>
        <input name="gender" placeholder="Gender" type="text" ref={inputGender}/>
        <input name="species" placeholder="Species" type="text" ref={inputSpecies}/>
        <input name="breed" placeholder="Breed" type="text" ref={inputBreed}/>
        <input name="status" placeholder="Status" type="text" ref={inputStatus}/>
        <input name="desc" placeholder="Description" type="text" ref={inputDescription}/>
        <input name="image" placeholder="Image" type="text" ref={inputImage}/>
        <button type="button" onClick={createPets}>Register</button>
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
          <img className='img-pet' src={pet.image_url}></img>
          <div className='button-container'>
            <button onClick={() => updatePets(pet.id)}>
              <img src={Edit} />
            </button>
            <button onClick={() => deletePets(pet.id)}>
              <img src={Trash} />
            </button>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Home;
