import React from "react";
import axios from "axios";
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
    <div className="bg-white border-2 h-96 w-full grid place-items-center">
      <div>
        <div>
          <p>Dólar {economy?.USDBRL.bid}</p>
          <p>Euro {economy?.EURBRL.bid}</p>
        </div>
      </div>
    </div>
  );
};

export default Economy;
