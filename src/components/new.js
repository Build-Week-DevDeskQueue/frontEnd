import React from 'react';
import { useFormik } from 'formik';

const formik = useFormik({
    initialValues: {
        owner: '',
        date: '',
        title: '',
        type: 'Select',
        description: '',
        tried: '',
        assigned: '',
        resolved: '',
    }
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
});
return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='owner'>{name}</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor='date'>{name}</label>
      <input
        id="date"
        name="date"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor='title'>{name}</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
<label htmlFor='type'>{name}</label>
      <input
        id="type"
        name="type"
        type="select"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
<label htmlFor='description'>{name}</label>
      <input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor='tried'>{name}</label>
      <input
        id="tried"
        name="tried"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor='assigned'>{name}</label>
      <input
        id="assigned"
        name="assigned"
        type="select"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor='resolved'>{name}</label>
      <input
        id="resolved"
        name="resolved"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <button type="submit">Submit</button>
    </form>
);