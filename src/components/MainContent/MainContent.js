import React, { useState } from 'react';
import './MainContent.css';
import ApiHeader from '../RequestForm/ApiHeader';
import AddApiName from '../AddApiName/AddApiName';


function MainContent({addNameToSidebar}) {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');
 
  const [response, setResponse] = useState('');

  // State to manage the current active tab
  const [activeTab, setActiveTab] = useState('queryParams');

  // State to manage the dynamic fields for each section
  const [queryParams, setQueryParams] = useState([{ key: '', value: '' }]);
  const [headers, setHeaders] = useState([{ key: '', value: '' }]);
  const [body, setBody] = useState([{ key: '', value: '' }]);

  // Function to handle tab switching
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Function to handle adding a new input field
  const handleAddField = (setFields, fields) => {
    setFields([...fields, { key: '', value: '' }]);
  };

  // Function to handle removing an input field
  const handleRemoveField = (index, setFields, fields) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  // Function to handle changing the input values
  const handleChange = (index, event, setFields, fields) => {
    const { name, value } = event.target;
    const updatedFields = fields.map((field, i) =>
      i === index ? { ...field, [name]: value } : field
    );
    setFields(updatedFields);
  };



  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the data submission logic here
    console.log('Query Params:', queryParams);
    console.log('Headers:', headers);
    console.log('Body:', body);
  };

  // Component to render fields based on the active tab
  const renderFields = (fields, setFields) => (
    <div className="fields-container">
      {fields.map((field, index) => (
        <div key={index} className="field-row">
          <input
            type="text"
            name="key"
            placeholder="Key"
            value={field.key}
            onChange={(e) => handleChange(index, e, setFields, fields)}
          />
          <input
            type="text"
            name="value"
            placeholder="Value"
            value={field.value}
            onChange={(e) => handleChange(index, e, setFields, fields)}
          />
          <button
            type="button"
            onClick={() => handleRemoveField(index, setFields, fields)}
            className="remove-button"
          >
            REMOVE
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => handleAddField(setFields, fields)}
        className="add-button"
      >
        ADD
      </button>
    </div>
  );

  

  const handleSendRequest = () => {
    // Simulate an API request here
    fetch(url, {
      method,
      headers: headers.reduce((acc, header) => {
        acc[header.key] = header.value;
        return acc;
      }, {}),
      body: method !== 'GET' ? body : null,
    })
      .then((res) => res.json())
      .then((data) => setResponse(JSON.stringify(data, null, 2)))
      .catch((err) => setResponse(err.toString()));
  };

  return (
    <div className="main-content">
      <ApiHeader />
<div >
      {/* Component for adding API names */}
      <AddApiName addNameToSidebar={addNameToSidebar} />

      {/* Sidebar component */}
      
    </div>
      <div className="request-form">
        <div className="request-method">
        <select className='request-methods' value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
        <input className='request-url'
          type="text"
          placeholder="Request URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className='send-button' onClick={handleSendRequest}>SEND</button>
        </div>
        

        
        {/* <div className='params-fields'>
        <div className="params-section">
          <h3>Query Params</h3>
          {params.map((param, index) => (
            <div key={index} className="param-row">
              <input
                type="text"
                placeholder="Key"
                value={param.key}
                onChange={(e) => {
                  const newParams = [...params];
                  newParams[index].key = e.target.value;
                  setParams(newParams);
                }}
              />
              <input
                type="text"
                placeholder="Value"
                value={param.value}
                onChange={(e) => {
                  const newParams = [...params];
                  newParams[index].value = e.target.value;
                  setParams(newParams);
                }}
              />
            </div>
          ))}
          <button onClick={handleAddParam}>ADD</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>

        <div className="headers-section">
          <h3>Headers</h3>
          {headers.map((header, index) => (
            <div key={index} className="header-row">
              <input
                type="text"
                placeholder="Key"
                value={header.key}
                onChange={(e) => {
                  const newHeaders = [...headers];
                  newHeaders[index].key = e.target.value;
                  setHeaders(newHeaders);
                }}
              />
              <input
                type="text"
                placeholder="Value"
                value={header.value}
                onChange={(e) => {
                  const newHeaders = [...headers];
                  newHeaders[index].value = e.target.value;
                  setHeaders(newHeaders);
                }}
              />
            </div>
          ))}
          <button onClick={handleAddHeader}>ADD</button>
          <button >Submit</button>
        </div>
        </div> */}

<div className="dynamic-input-form">
      {/* Tab Navigation */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'queryParams' ? 'active' : ''}`}
          onClick={() => handleTabChange('queryParams')}
        >
          QUERY PARAMS
        </button>
        <button
          className={`tab ${activeTab === 'headers' ? 'active' : ''}`}
          onClick={() => handleTabChange('headers')}
        >
          HEADERS
        </button>
        <button
          className={`tab ${activeTab === 'body' ? 'active' : ''}`}
          onClick={() => handleTabChange('body')}
        >
          BODY
        </button>
      </div>

      {/* Dynamic Input Fields */}
      <form onSubmit={handleSubmit}>
        {activeTab === 'queryParams' && renderFields(queryParams, setQueryParams)}
        {activeTab === 'headers' && renderFields(headers, setHeaders)}
        {activeTab === 'body' && renderFields(body, setBody)}

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          SUBMIT
        </button>
      </form>
    </div>


        {method !== 'GET' && (
          <div className="body-section">
            <h3>Body</h3>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Enter JSON body"
            />
          </div>
        )}
      </div>

      <div className="response-section">
        <h3>Response</h3>
        <pre>{response}</pre>
      </div>
    </div>
  );
}

export default MainContent;
