import React from 'react';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    color: "white",
    padding: "30px",
    width: "50%",
    minWidth: "500px"
  },
  halfWidth: { border: "1px solid black", width: "50%" },
  title: {
    border: "2px solid white",
    borderRadius: 5,
    padding: 7
  },
  paper: {
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: 5,
    padding: 5
  }
});

const NewIssueForm = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      owner: '',
      date: '',
      title: '',
      type: 'Select',
      description: '',
      tried: '',
      assigned: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='owner'>Name</label>
      <input
        id="owner"
        name="owner"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.owner}
      />
      <label htmlFor='date'>Date</label>
      <input
        id="date"
        name="date"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.date}
      />
      <label htmlFor='title'>Issue</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      <label htmlFor='type'>Issue Type</label>
      <select
        as="select"
        name="type"
        onChange={formik.handleChange}
        value={formik.values.type}
      >
        <option value='algo'>Algorithms</option>
        <option value='block'>Blockchain</option>
        <option value='css'>CSS</option>
        <option value='hash'>Hash Tables</option>
        <option value='html'>HTML</option>
        <option value='java'>Java</option>
        <option value='js'>JavaScript</option>
        <option value='react'>React</option>
        <option value='redux'>Redux</option>
        <option value='python'>Python</option>
        <option value=''>SQL</option>
      </select>
      <label htmlFor='description'>Description</label>
      <input
        id="description"
        name="description"
        type="textarea"
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      <label htmlFor='tried'>What I've Tried</label>
      <input
        id="tried"
        name="tried"
        type="textarea"
        onChange={formik.handleChange}
        value={formik.values.tried}
      />
      <label htmlFor='assigned'>Helper</label>
      <select
        as="select"
        name="assigned"
        onChange={formik.handleChange}
        value={formik.values.assigned}
      >
        <option value='as'>Andrew Speer</option>
        <option value='bt'>Bonnie Turnbeaugh</option>
        <option value='cr'>Carl Redding</option>
        <option value='dm'>Derrick Mei</option>
        <option value='jp'>Joseph Paniagua</option>
        <option value='jc'>Julian Cole</option>
        <option value='ml'>Michael Luck</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewIssueForm;