import { useState } from "react";

function App() {
  const [nestedObject, setNestedObject] = useState({
    taxi: "Ücret karşılığında yolcu taşımak için lisanslı bir araç",
    food: {
      sushi:
        "Deniz ürünleri ve sebzelerle birlikte sunulan geleneksel bir Japon yemeği",
      apple: {
        Honeycrisp:
          "MAES Bahçe Araştırma Merkezi'nde geliştirilen bir elma çeşidi",
        Fuji: "Tohoku Araştırma İstasyonu'nda yetiştiriciler tarafından geliştirilen bir elma çeşidi",
      },
    },
  });

  return (
    <div style={{ margin: "auto", width: "70%", paddingTop: 40 }}>
      <DisplayNested nestedObject={nestedObject} />
    </div>
  );
}

const DisplayNested = ({ nestedObject }) => {
  function discombobulator(obj) {
    return (
      <ul className="ml-12">
        {Object.keys(obj).map((key) =>
          typeof obj[key] === "string" ? (
            <li key={key} className="mt-4">
              {key}: {obj[key]}
            </li>
          ) : (
            <li key={key} className=" mt-4">
              {key}: {discombobulator(obj[key])}
            </li>
          )
        )}
      </ul>
    );
  }

  return <>{discombobulator(nestedObject)}</>;
};

export default App;
