import { createStyles, } from "@mantine/core"
import { DatePickerInput } from "@mantine/dates"
import 'dayjs/locale/es';

const useStyles = createStyles (theme => ({

  root: {

    position: "relative"

  },

  input: {
    
    height: "50px",
    paddingTop: "20px",
    width: "300px",

  },

  label: {

    position: "absolute",
    pointerEvents: "none",
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: `calc(${theme.spacing.sm} / 2)`,
    zIndex: 1
  }

}))

export default function Dob () {

  const { classes } = useStyles()

  return (

    <div>
      
      <DatePickerInput
        mt="xl"
        popoverProps={{ withinPortal: true }}
        label="Fecha de Nacimiento"
        placeholder="Por favor indica tu fecha de nacimiento."
        classNames={classes}
        clearable={false}
        valueFormat="DD MMMM YYYY"
        locale="es"
        required
      />

    </div>

  )

}