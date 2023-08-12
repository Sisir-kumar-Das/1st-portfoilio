import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          alias rem vel ad repellendus ipsa hic facere quo earum ab eius ducimus
          exercitationem dolor, quas quia, nam fugiat. Voluptas fuga architecto
          enim amet doloremque cumque sunt perspiciatis quas, in tenetur eaque
          incidunt, deserunt expedita cum quisquam nam rerum debitis
          voluptatibus?
        </p>
        <br />
        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis et,
          facilis ipsa tenetur doloribus quas excepturi labore voluptas, vel
          nemo adipisci ab, unde tempore dolorum voluptates sint. Nam in, ad
          unde adipisci distinctio incidunt quae facere quibusdam expedita
          laudantium doloribus quam sit fuga. Alias nisi nam qui, culpa nulla
          cumque!
        </p>
      </div>
    </div>
  );
};

export default About;
