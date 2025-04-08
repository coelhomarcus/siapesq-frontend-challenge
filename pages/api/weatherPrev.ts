import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { lat, lon } = req.query;

  if (!lat || !lon) {
    console.error("Erro: Coordenadas não foram passadas corretamente.");
    return res.status(400).json({ error: "Coordenadas inválidas" });
  }

  try {
    const apiKey = process.env.NEXT_PUBLIC_API_SECRET;
    if (!apiKey) {
      console.error("Erro: API_SECRET não está definida!");
      return res
        .status(500)
        .json({ error: "Erro interno - API Key não configurada" });
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric
    `
    );

    if (!response.ok) {
      throw new Error(
        `Erro da API externa: ${response.status} - ${await response.text()}`
      );
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error: unknown) {
    let errorMessage = "Erro desconhecido";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error("Erro na API externa:", errorMessage);
    res
      .status(500)
      .json({ error: "Erro ao buscar os dados", details: errorMessage });
  }
}
