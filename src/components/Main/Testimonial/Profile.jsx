const Profile = ({profileImg, name, testimonial, role}) => {
  return (
    <div className="profile">
      <img src={profileImg} alt={"Profile picture of  " + name} />
      <p>
       {testimonial}
      </p>
      <p>
        {name} <br />
        <span>{role}</span>
      </p>
    </div>
  );
}

export default Profile