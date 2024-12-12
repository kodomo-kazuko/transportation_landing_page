"use client";

import { useState } from "react";
import Layout from "../components/layout";
import NavBar from "../sections/Navbar";
import Spacer from "../components/spacer";
import Footer from "../sections/Footer";

export default function UserPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");

  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [pinError, setPinError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPinError(null);
    setPhoneError(null);

    // Validate inputs
    if (!/^\d{8}$/.test(phoneNumber)) {
      setPhoneError("Утасны дугаар зөв форматаар оруулна уу");
      return;
    }

    if (!/^\d{4}$/.test(code)) {
      setPinError("4-н оронтой пин код оруулна уу");
      return;
    }

    setLoading(true);

    console.log({ phoneNumber, code });

    try {
      const response = await fetch(
        `https://app-backend-dev.ubcard.mn/auth/deactivate`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phoneNumber, code }),
        }
      );

      console.log({ response });

      if (response.ok) {
        alert("Хэрэглэгчийн бүртгэл амжилттай устгагдлаа!");
      } else {
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="h-screen flex flex-col justify-between">
        <div>
          <NavBar setShowSecondDiv={false as any} setScrollToId={"" as any} />

          <Spacer height="70px" width="" />

          <div className="mx-auto my-24 max-w-[400px] flex flex-col gap-10 text-center">
            <h2 className="font-semibold text-xl">
              Хэрэглэгчийн бүртгэл устгах
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="text-start">
                <label htmlFor="phoneNumber">Утасны дугаар:</label>

                <input
                  type="text"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Утасны дугаараа оруулна уу"
                  maxLength={8}
                  className="mt-2 w-full p-2.5 border rounded-lg"
                />

                {phoneError && (
                  <p className="ml-2 mt-1 text-xs text-red-500">{phoneError}</p>
                )}
              </div>

              <div className="text-start">
                <label htmlFor="code">Пин код:</label>

                <input
                  type="text"
                  id="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Пин кодоо оруулна уу"
                  maxLength={4}
                  className="mt-2 w-full p-2.5 border rounded-lg"
                />

                {pinError && (
                  <p className="ml-2 mt-1 text-xs text-red-500">{pinError}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`p-2.5 rounded-lg text-white bg-purple-600 font-bold ${
                  loading && "cursor-not-allowed"
                }`}
              >
                {loading ? "Уншиж байна" : "Бүртгэл устгах"}
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  );
}
