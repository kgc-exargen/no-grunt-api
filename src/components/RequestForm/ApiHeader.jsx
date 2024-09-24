import React, { useState } from "react";
import "./ApiHeader.css";

const ApiHeader = () => {
  const [activeTab, setActiveTab] = useState("CUSTOM API");
  const [product, setProduct] = useState("Order Placement");
  const [module, setModule] = useState("Mod2");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      // You can add additional processing or file handling logic here
      console.log("File selected:", file.name);
    }
  };

  return (
    <div className="api-header">
      <div className="tabs">
        <button
          className={`tab ${activeTab === "CUSTOM API" ? "active" : ""}`}
          onClick={() => setActiveTab("CUSTOM API")}
        >
          CUSTOM API
        </button>
        <button
          className={`tab ${activeTab === "AUTO API" ? "active" : ""}`}
          onClick={() => setActiveTab("AUTO API")}
        >
          AUTO API
        </button>
      </div>

      {activeTab === "CUSTOM API" && (
        <div className="custom-api-content">
          <div className="dropdown-container">
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="dropdown"
            >
              <option value="Test1">Test1</option>
              <option value="Test2">Test2</option>
              <option value="Test3">Test3</option>
              <option value="Test4">Test4</option>
              <option value="Test5">Test5</option>
              {/* Add more options as needed */}
            </select>

            <select
              value={module}
              onChange={(e) => setModule(e.target.value)}
              className="dropdown"
            >
              <option value="Mod1">Mod1</option>
              <option value="Mod2">Mod2</option>
              <option value="Mod3">Mod3</option>
              <option value="Mod4">Mod4</option>
              <option value="Mod5">Mod5</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="import-button">
            {/* Hidden file input */}
            <input
              type="file"
              id="file-upload"
              style={{ display: "none" }}
              accept=".json,.yaml,.yml"
              onChange={handleFileChange}
            />

            {/* Label styled as a button */}
            {selectedFile?
            <p className="file-selected">Selected File: {selectedFile.name}</p>
            : <label htmlFor="file-upload" className="upload-button">
            ↓ IMPORT FROM SWAGGER
          </label>
            }
            

            {/* Display selected file name if available */}
            
          </div>
        </div>
      )}
    </div>
  );
};

export default ApiHeader;
