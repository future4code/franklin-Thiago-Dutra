import { Animation } from "@devexpress/dx-react-chart";
import { Chart, Legend, PieSeries } from "@devexpress/dx-react-chart-material-ui";
import { DeleteOutlined } from "@mui/icons-material";
import {
  AppBar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  Box,
  IconButton,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/urls";
import { useForm } from "../../hooks/Form";

const Principal = () => {
  const [contributors, setContributors] = useState([]);
  var totalContribution = 0;
  const { form, onChange, cleanFields } = useForm({});
  const data = [];

  const onSubmitForm = (event) => {
    event.preventDefault();
    postContributor();
    cleanFields();
  };

  const postContributor = () => {
    axios
      .post(`${BASE_URL}`, form)
      .then((response) => {
        alert("cadastrado com sucesso");
        getContributors();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const deleteContributor = (id) => {
    axios
      .delete(`${BASE_URL}${id}`)
      .then((response) => {
        getContributors();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  const getContributors = () => {
    axios
      .get(`${BASE_URL}`)
      .then((response) => {
        setContributors(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const renderContributorList = contributors.map((contributor) => {
    data.push({
      argument: contributor.firstname,
      value: contributor.participation,
    });

    contributors.map((contributor) => {
      console.log(contributor.participation);
      return (totalContribution += contributor.participation);
    });

    return (
      <TableRow key={contributor.id}>
        <TableCell>{contributor.id}</TableCell>
        <TableCell>{contributor.firstname}</TableCell>
        <TableCell>{contributor.lastname}</TableCell>
        <TableCell>
          {((contributor.participation / totalContribution) * 100).toFixed(2)}%
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="delete"
            onClick={() => deleteContributor(contributor.id)}
          >
            <DeleteOutlined />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  });
  useEffect(() => {
    getContributors();
  }, []);

  return (
    <>
      <AppBar position="static">
        <form onSubmit={onSubmitForm}>
          <TextField
            placeholder="First name"
            type="text"
            id="firstname"
            name="firstname"
            value={form.firstname}
            onChange={onChange}
            color="primary"
            variant="outlined"
            required
          />
          <TextField
            placeholder="Last name"
            type="text"
            id="lastname"
            name="lastname"
            variant="outlined"
            value={form.lastname}
            onChange={onChange}
            required
          />
          <TextField
            placeholder="Participation"
            type="number"
            id="participation"
            name="participation"
            variant="outlined"
            value={form.participation}
            onChange={onChange}
            required
          />
          <Button
            sx={{ marginTop: "10px", marginLeft: "15px" }}
            color="inherit"
            type="submit"
            variant="outlined"
          >
            Send
          </Button>
        </form>
      </AppBar>
      <TableContainer>
        <Table sx={{ maxWidth: 700 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell></TableCell>
              <TableCell>First name</TableCell>
              <TableCell>Last name</TableCell>
              <TableCell>Participation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderContributorList}</TableBody>
        </Table>
      </TableContainer>
      <Box>
        <Chart type="pie" width={500} height={500} data={data}>
          <PieSeries
            valueField="value"
            argumentField="argument"
            innerRadius={0.5}
          />
          <Animation duration={500} />
          <Legend />
        </Chart>
      </Box>
    </>
  );
};
export default Principal;
