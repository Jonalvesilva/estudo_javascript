"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Teste() {
  const { currentUser } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "user/login", payload: 40 });
  }, []);

  console.log(currentUser);
  return <></>;
}
