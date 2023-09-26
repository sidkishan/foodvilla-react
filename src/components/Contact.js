import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("set interval in useEffect");
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>This is contact page</p>
    </div>
  );
};
export default Contact;
