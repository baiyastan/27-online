import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/count/countSlice";

function About() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      About {value}
      <button onClick={() => dispatch(increment())}>add</button>
    </div>
  );
}

export default About;
