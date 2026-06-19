

const ProfileViewCard = ({user}) => {
    const {firstName ,lastName,age ,gender, photoUrl ,about} = user
  return (
    <div className="card bg-base-300 w-80 shadow-sm mt-1 ">
  <figure className="h-86 w-full object-cover" >
    <img
      src={photoUrl}
      alt="Picture"
      className="w-full   object-cover " />

  </figure>
  <div className="card-body">
    <h2 className="card-title"> {firstName + " " + lastName}</h2>
    { age && gender && <p>{age + "  , " + gender}</p>}
    <p>{about}</p>
    {/* <div className="card-actions justify-center">
      <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Interested</button>
    </div> */}
  </div>
</div>
  )
}

export default ProfileViewCard