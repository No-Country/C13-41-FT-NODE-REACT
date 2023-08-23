import { useState } from "react"
import { TextInput, createStyles, rem } from "@mantine/core"

const useStyles = createStyles((theme, { floating }) => ({

  root: {

    position: "relative",
    width: "300px",
    
  },

  label: {

    position: "absolute",
    zIndex: 2,
    top: rem(7),
    left: theme.spacing.sm,
    pointerEvents: "none",
    color: floating
      ? theme.colorScheme === "dark"
        ? theme.white
        : theme.black
      : theme.colorScheme === "dark"
      ? theme.colors.dark[3]
      : theme.colors.gray[5],
    transition: "transform 150ms ease, color 150ms ease, font-size 150ms ease",
    transform: floating
      ? `translate(-${theme.spacing.sm}, ${rem(-28)})`
      : "none",
    fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
    fontWeight: floating ? 500 : 400,

  },

  required: {

    transition: "opacity 150ms ease",
    opacity: floating ? 1 : 0

  },

  input: {

    height: "50px",

    "&::placeholder": {

      transition: "color 150ms ease",
      color: !floating ? "transparent" : undefined,

    }

    
  }

}))

export default function InputName () {

  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState("")

  const { classes } = useStyles({

    floating: value.trim().length !== 0 || focused

  })

  return (

    <TextInput
      label="Numero telefonico de contacto"
      placeholder="Por favor indica tu numero telefonico"
      required
      classNames={classes}
      value={value}
      onChange={event => setValue(event.currentTarget.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      mt="xl"
      hideControls
      type="number"
      inputMode="numeric"
    />

  )

};