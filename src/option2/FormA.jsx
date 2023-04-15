import React from "react";

const FormA = ({ formik }) => {
  return (
    <div className={"form"}>
      <h3>Form A</h3>
      <div>
        <label>Name </label>
        <input
          name="formA.name"
          value={formik.values.formA.name}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.errors.formA && (
          <div style={{ color: "red" }}>
            <small>{formik.errors.formA.name}</small>
          </div>
        )}
      </div>
      <br />
      <div>
        <label>Email </label>
        <input
          name="formA.email"
          value={formik.values.formA.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.errors.formA && (
          <div style={{ color: "red" }}>
            <small>{formik.errors.formA.email}</small>
          </div>
        )}
      </div>
      <pre>{JSON.stringify(formik.values.formA, null, 2)}</pre>
    </div>
  );
};

export default FormA;
