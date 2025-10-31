import { useState } from "react";

const EditProfile = ({user}) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [about, setAbout] = useState(user.about);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);

      const [error, setError] = useState("");
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Edit Profile</h2>
          <div>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label py-2">
                <span className="label-text">First Name</span>
              </div>
              <input
                type="text"
                value={firstName}
                placeholder="firstName"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label py-3">
                <span className="label-text">Last Name</span>
              </div>
              <input
                type="text"
                value={lastName}
                placeholder="lastName"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label py-3">
                <span className="label-text">Photo</span>
              </div>
              <input
                type="text"
                value={photoUrl}
                placeholder="photo"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label py-3">
                <span className="label-text">Age</span>
              </div>
              <input
                type="text"
                value={age}
                placeholder="age"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label py-3">
                <span className="label-text">Gender</span>
              </div>
              <input
                type="text"
                value={gender}
                placeholder="gender"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setGender(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label py-3">
                <span className="label-text">About</span>
              </div>
              <input
                type="text"
                value={about}
                placeholder="about"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setAbout(e.target.value)}
              />
            </label>
            
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center m-2">
            <button className="btn btn-primary">
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
