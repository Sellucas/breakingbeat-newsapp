import React from "react";
import axios from "axios";
import { BsArrowRightShort } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";

const Economy = () => {
  const [economy, setEconomy] = useState(null);

  const fetchEconomy = async () => {
    return axios
      .get("https://economia.awesomeapi.com.br/last/USD-BRL%2CEUR-BRL")
      .then((response) => {
        setEconomy(null);
        setEconomy(response.data);
      });
  };

  useEffect(() => {
    fetchEconomy();
  }, []);

  return (
    <div className="bg-white border-2 h-60 w-full drop-shadow-lg">
      <div className="h-14 border-b-2 flex items-center">
        <h2 className="ml-2 font-bold">Economia</h2>
      </div>
      <div className="w-full">
        <h3 className="ml-2 h-10 flex items-center">Compra de Moedas</h3>
        <div className="flex flex-row justify-around h-20 mt-4">
          <div className="font-thin mt-2">
            <p>Dólar</p>
            <p>Euro</p>
          </div>
          <div className="mt-2">
            <p>R$ {economy?.USDBRL.bid}</p>
            <p>R$ {economy?.EURBRL.bid}</p>
          </div>
        </div>
      </div>
      <div className="h-12 border-t-2 flex items-center ml-2 text-red-600">
        <p>Tudo sobre economia</p>
        <BsArrowRightShort size={25}/>
      </div>
    </div>
  );
};

export default Economy;
