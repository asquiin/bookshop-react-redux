import React from "react";
import szpt from "../../data/szpt.json";

function Clean() {
  function extractNamesDeep(data) {
    const result = [];

    function search(obj) {
      if (!obj || typeof obj !== "object") return;

      if (obj.name?.ru) {
        result.push(obj.name.ru);
      }

      for (const key in obj) {
        search(obj[key]);
      }
    }

    data.forEach(search);
    return result;
  }

  const names = extractNamesDeep(szpt);

  return (
    <div style={{ padding: "20px" }}>
      <h3>Найденные name.ru: ({names.length})</h3>

      {names.length === 0 ? (
        <p>Нет данных</p>
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
