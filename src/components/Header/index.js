import React from 'react';

const Header = (props) => {
  return (
    <>
      <h1 className={props.title}>Hey, son!</h1>
      <h2>Check out my killer quotes!</h2>
      <img
        src='https://scontent.ffor8-2.fna.fbcdn.net/v/t31.0-8/13063093_987628454624376_8509385960094022954_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=ZXi62_EENbcAX9olNZM&_nc_ht=scontent.ffor8-2.fna&oh=8695f3d8f3609b3f4cf21c1f29e43bf0&oe=5EED85BC'
        alt='Ron Swanson'
      />
    </>
  );
};

export default Header;
