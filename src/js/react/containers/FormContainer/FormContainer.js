import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { ThemeProvider } from "emotion-theming";
import LeeHealthTheme from "../../themes/LeeHealthTheme";
import DynamicForm from "../../components/DynamicForm";
// import idb from "idb";
import { openDB, deleteDB, wrap, unwrap } from "idb";

const FormContainer = ({ frmcode, frmalt }) => {
  const [model, setModel] = useState([]);
  const [formName, setFormName] = useState(null);
  const [passedValidation, setPassedValidation] = useState(true);
  const [submit, setSubmit] = useState(false);
  const baseURL = "/oppaapi/form/getformdefinition";

  // const url = `${baseURL}?formName=${frmcode}&formAlternative=${frmalt}`;
  const submitUrl = `/oppaapi/form/submit`;
  // let url =
  //   "/oppaapi/form/getformdefinition?formName=OPPAContactUs&formAlternative=OPPAAccessibleContactUs";

  const getFormData = async () => {
    const url = "/oppaapi/dummy.json";
    try {
      //  const url = "OPPA/src/js/react/containers/FormContainer/dummy.json";

      const res = await axios.get(url);

      setModel(res.data.fields);
      setFormName(res.data.formName);
    } catch (error) {
      console.log(error);
      const dbName = "api-store";
      const storeName = "api-data";
      const version = 1; //versions start at

      const dbPromise = openDB(dbName, version, {
        upgrade(db) {
          if (!db.objectStoreNames.contains(storeName)) {
            db.createObjectStore(storeName, {
              keypath: "formName"
            });
          }
        }
        // console.log(db);
        // if (!db.objectStoreNames.contains("posts")) {
        //   console.log("inside dbPromise");
        //   db.createObjectStore("posts", { keypath: "formName" });
        // }
      });

      // var dbPromise = openDB("posts-store", 1, function(db) {
      //   if (!db.objectStoreNames.contains("posts")) {
      //     db.createObjectStore("posts", { keypath: "formName" });
      //   }
      // });
      // var r2 = dbPromise
      //   .then(function(db) {
      //     var tx = db.transaction(storeName, "readwrite");
      //     return tx.objectStore(storeName);
      //   })
      //   .then(function(store) {
      //     return store.get(url);
      //   })
      //   .then(function(res) {
      //     if (res) {
      //       alert(res.formName);
      //       setModel(res.fields);
      //       setFormName(res.formName);
      //     }
      //   });
      const db = await dbPromise;
      const tx = db.transaction(storeName, "readwrite");
      const store = await tx.objectStore(storeName);
      const res = await store.get(url);
      if (res) {
        setModel(res.fields);
        setFormName(res.formName);
      }
    }
  };

  // const prepForJson = () =>{
  //   const modelCopy = [...model];
  //   const adjust = model.map((entry)=>)
  // }

  // const getSW = () => {
  //   if ('serviceWorker' in navigator) {
  //     // Supported!
  //   }
  //   if()
  //   navigator.serviceWorker.getRegistration().then(function(registration) {
  //     if(registration){

  //     }
  //   });
  // };

  const sendFormData = async () => {
    let reg = null;
    if ("serviceWorker" in navigator) {
      reg = await navigator.serviceWorker.getRegistration();
    }
    if (reg) {
      console.log(reg);
    } else {
      try {
        const res = await axios.post(submitUrl, {
          formName: formName,
          fields: model
        });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getFormData();
  }, []);

  useEffect(() => {
    if (submit && passedValidation) {
      setSubmit(false);
      alert("submitting");
      sendFormData();
    } else if (submit && !passedValidation) {
      alert("discard event");
      // setSubmit(()=>false));
      setSubmit(false);
    }
  }, [model, submit, passedValidation]);

  const onSubmitHandler = completedForm => {
    setSubmit(true);
    validateForm(completedForm);
  };

  // const onChangeHandler = (e, key) => {
  //   console.log("new!");
  //   const index = model.findIndex(obj => obj.fieldCodeName === key);
  //   const modified = Object.assign({}, model[index]);
  //   modified.value = e.target.value;
  //   const newModel = [
  //     ...model.slice(0, index),
  //     modified,
  //     ...model.slice(index + 1)
  //   ];
  //   setModel(() => {
  //     return newModel;
  //   });
  // };

  // const cbValidateForm = useCallback(completedForm => {
  //   validateForm(completedForm);
  // }, []);

  const validateForm = completedForm => {
    setPassedValidation(true);
    const modelCopy = model.map(entry => {
      const entryCopy = Object.assign({}, entry);
      const value = completedForm[entryCopy.fieldCodeName];
      if (value) {
        entryCopy.value = value;
        entryCopy.hasErrors = false;
      }
      if (entryCopy.required && !value) {
        entryCopy.hasErrors = true;
        setPassedValidation(false);
      }
      return entryCopy;
    });
    setModel(() => modelCopy);
  };

  return (
    <ThemeProvider theme={LeeHealthTheme}>
      <div className="gray-box">
        <div>
          <DynamicForm
            model={model}
            onSubmitHandler={completedForm => onSubmitHandler(completedForm)}
            setModel={setModel}
            showErrorBox={!passedValidation}
            validateForm={validateForm}
          />
        </div>
      </div>
      {passedValidation ? <h1>ya</h1> : <h1>boo</h1>}
      <pre>{JSON.stringify(model)}</pre>
    </ThemeProvider>
  );
};

FormContainer.propTypes = {
  frmcode: PropTypes.string.isRequired,
  frmalt: PropTypes.string.isRequired
};

export default FormContainer;
