import { withStyles } from "@mui/styles";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(0.5),
    border: "none",
  }
}))(ToggleButtonGroup);

export default ButtonGroup;
