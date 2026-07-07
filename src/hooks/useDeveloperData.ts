import { useState, useEffect } from "react";

export interface DeveloperData {
  name: string;
  contact: {
    phone: string;
    whatsapp: string;
  };
  website: {
    portfolio: string;
  };
  community: {
    name: string;
    website: string;
    discord: string;
  };
}

export function useDeveloperData() {
  const [data, setData] = useState<DeveloperData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Gagal mengambil data developer");
        }
        return res.json();
      })
      .then((fetchedData) => {
        setData(fetchedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Developer API Error:", err);
        setError(err);
        // Fallback to avoid empty fields if the network is down
        setData({
          name: "Ran Dev",
          contact: {
            phone: "+62895613915570",
            whatsapp: "https://wa.me/62895613915570",
          },
          website: {
            portfolio: "https://portfolio.randev.my.id",
          },
          community: {
            name: "Ran Community",
            website: "https://community.randev.my.id",
            discord: "https://discord.gg/rancommunity",
          },
        });
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}
