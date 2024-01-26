import { cloneElement, useState } from "react";
import { puppyList } from "./data.js";

export default function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const [featuredPup, setFeaturedPup] = useState(null);

  function handleClick(id) {
    setFeatPupId(id);
    setFeaturedPup(puppies.find((pup) => pup.id === id));
  }

  return (
    <div>
      {puppies.map((puppy) => (
        <p
          key={puppy.id}
          onClick={() => {
            handleClick(puppy.id);
          }}
        >
          {puppy.name}
        </p>
      ))}

      {featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
