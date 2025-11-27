import { useState } from "react";
import homiylar from "../assets/homiy-2.png";
import homiy from "../assets/homiy 2.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const notify = () =>
    toast.success("Ma'lumot yuborldi !", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyError = () =>
    toast.error("so'rovni yuborishda xatolik !", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
    subscribe: false,
  });

  const BOT_TOKEN = "6836941970:AAFOM-rw8XTBoFE9Vpy6c8bl4IEorOCZASA";
  const CHAT_ID = 5520835955;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.title || !form.message) {
      notifyError();

      return;
    }

    const txt = `
🔹 *New Form Message*
—————————————
👤 Name: ${form.name}
📧 Email: ${form.email}
💼 Title: ${form.title}
💬 Message: ${form.message}
📩 Subscribe: ${form.subscribe ? "Yes" : "No"}
`;

    let response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: txt,
          parse_mode: "Markdown",
        }),
      }
    );

    if (response.ok) {
      notify();
    } else {
      notifyError();
    }

    setForm({
      name: "",
      email: "",
      title: "",
      message: "",
      subscribe: false,
    });
  };

  async function sendToTelegramFront(message) {
    const botToken = "6836941970:AAFOM-rw8XTBoFE9Vpy6c8bl4IEorOCZASA";
    const chatId = 5520835955;

    if (!botToken || !chatId) {
      console.error("No credentials");
      return;
    }

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    });
  }

  return (
    <div>
      <div className="container max-w-[1200px] m-auto">
        <h1 className="text-[#36536B] text-[36px] sm:text-[45px] md:text-[50px] text-center md:text-start font-serif px-6 my-[5%] ">
          <b>
            Submit a help request and <br /> we’ll get in touch shortly.
          </b>
        </h1>

        <div className="md:flex text-center md:text-start w-full p-20 gap-20 text-[#556270] items-center">
          <form onSubmit={handleSubmit} className="flex-1 space-y-10 w-full">
            <div>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full bg-transparent border-b border-gray-300 p-2 focus:outline-none"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-gray-300 p-2 focus:outline-none"
              />
            </div>

            <div>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Title"
                className="w-full bg-transparent border-b border-gray-300 p-2 focus:outline-none"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows="3"
                className="w-full bg-transparent border-b border-gray-300 p-2 focus:outline-none"
              ></textarea>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                name="subscribe"
                checked={form.subscribe}
                onChange={handleChange}
                className="w-5 h-5 cursor-pointer"
              />

              <p className="text-sm">
                Stay up-to-date with company announcements and updates to our
                API
              </p>
            </div>

            <button
              type="submit"
              className="text-[#36536B] w-[150px] mt-5 border border-[#36536B] py-2 px-4 rounded-3xl shadow cursor-pointer transform hover:scale-105 hover:bg-[#36536B] hover:text-[white] duration-300"
            >
              Submit
            </button>
          </form>

          <div>
            <p className="text-[#36536B] mt-10 text-[20px]">
              Join the thousands of innovators already <br /> building with us
            </p>

            <img className="hidden sm:block md:w-full m-auto my-20" src={homiylar} alt="" />
            <img className="w-full block sm:hidden m-auto my-20" src={homiy} alt="" />
          </div>
        </div>

        <section>
        <div className="container max-w-[1200px] m-auto flex justify-between items-center">
          <div className="w-[1200px] px-6 m-auto text-center md:flex justfify-center md:justify-between sm:items-center mt-15">
            <span className="text-2xl sm:text-3xl md:text-4xl text-[#36536B]">
              Ready to start?
            </span>
            <form
              className="flex-wrap sm:flex sm:flex-nowrap mt-6 shadow w-[75%] sm:w-[400px] m-auto md:m-0 rounded-3xl"
              onSubmit={async (e) => {
                e.preventDefault();

                const email = e.target.email.value.trim();

                if (!email) {
                  notifyError();
                  return;
                } else {
                  notify();
                  e.target.email.value = "";
                }

                await sendToTelegramFront(`📩 Новая заявка\nEmail: ${email}`);
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                className="px-4 py-3 rounded-xl border-none outline-none w-full text-[#36536B]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-3xl bg-[#c44569] text-white shadow w-full cursor-pointer transform hover:scale-105 hover:bg-[#DA6D97] duration-300"
              >
                Schedule a Demo
              </button>
            </form>
          </div>
        </div>
      </section>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
