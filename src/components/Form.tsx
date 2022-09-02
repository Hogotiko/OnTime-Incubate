import { FC, useState, useRef } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import emailjs from "@emailjs/browser";

const defaultValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const MyTextField = styled(TextField)({
  "& label.Mui": {
    color: "#0F003D",
  },
  "& label.Mui-focused": {
    color: "#c9b3f3",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#c9b3f3",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "3px solid #E5D7FF",
    },
    "&:hover fieldset": {
      borderColor: "#c9b3f3",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#c9b3f3",
    },
  },
});

const MyTextFieldMessage = styled(TextField)({
  "& label.Mui": {
    color: "#0F003D",
  },
  "& label.Mui-focused": {
    color: "#c9b3f3",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#c9b3f3",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "3px solid #E5D7FF",
      height: "90px",
    },
    "&:hover fieldset": {
      borderColor: "#c9b3f3",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#c9b3f3",
    },
  },
});

const Form: FC = (): JSX.Element => {
  const [formValues, setFormValues] = useState(defaultValues);
  const form = useRef(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormValues(defaultValues);

    emailjs
      .sendForm(
        "service_csi7e84",
        "contact_form",
        e.currentTarget,
        "hclcIhrLELQtBWgva"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <Grid
        container
        sx={{
          alignItems: "center",
          justify: "center",
          direction: "column",
          width: "500px",
          height: "300px",
          mb: "85px",
        }}
      >
        <Grid item>
          <MyTextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
            sx={{
              width: "226px",
              height: "50px",
              mr: "12px",
            }}
          />
          <MyTextField
            id="email-input"
            name="email"
            label="Email"
            type="email"
            value={formValues.email}
            onChange={handleInputChange}
            sx={{
              width: "262px",
              height: "50px",
            }}
          />
        </Grid>
        <Grid item>
          <MyTextField
            id="subject-input"
            name="subject"
            label="Subject"
            type="text"
            value={formValues.subject}
            color="warning"
            onChange={handleInputChange}
            sx={{
              height: "50px",
              width: "500px",
              m: "20px 0",
              outline: "none",
            }}
          />
        </Grid>
        <Grid item>
          <MyTextFieldMessage
            id="message-input"
            name="message"
            label="Message"
            type="text"
            value={formValues.message}
            onChange={handleInputChange}
            sx={{ width: "500px" }}
          />
        </Grid>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            height: "50px",
            width: "500px",
            mt: "50px",
            padding: "25px",
            borderRadius: "5px",
            backgroundColor: "#a077ec",
            "&:hover": {
              backgroundColor: "#cdbaf0",
            },
          }}
        >
          Submit
        </Button>
      </Grid>
    </form>
  );
};
export default Form;
