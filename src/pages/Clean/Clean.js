import React from "react";
import szpt from "../../data/szpt.json";

function Clean() {
  // Фильтруем товары по measures внутри chich
  function getProductsWithWeightInGramsOrKg(data) {
    return data.filter(item => {
      const measures = item?.chich?.measures;

      if (!Array.isArray(measures)) return false;

      return measures.some(
        m =>
          m.type === "weight" &&
          (m.name === "граммы" || m.name === "килограммы")
      );
    });
  }

  const products = getProductsWithWeightInGramsOrKg(szpt);

  // Берём наименование товара — initial_request (если нужно, можно поменять поле)
  const names = products
    .map(item => item?.chich?.initial_request)
    .filter(Boolean);

  return (
    <div style={{ padding: "20px" }}>
      <h3>
        Товары с весом в граммах/килограммах: ({names.length})
      </h3>

      {names.length === 0 ? (
        <p>Нет подходящих товаров</p>
      ) : (
        <ul>
          {names.map((n, index) => (
            <li key={index}>{n}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Clean;
