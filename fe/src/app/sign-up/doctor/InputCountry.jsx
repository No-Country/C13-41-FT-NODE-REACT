import { createStyles, rem, Select } from '@mantine/core';

const useStyles = createStyles((theme) => ({

  root: {

    position: 'relative',

  },

  input: {

    height: rem(54),
    paddingTop: rem(18),
    width: "300px",
    height: "50px",

  },

  label: {

    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: `calc(${theme.spacing.sm} / 2)`,
    zIndex: 1,

  },

}));

export default function Country () {

  const { classes } = useStyles();

  return (

    <div>

      <Select
        mt="xl"
        withinPortal
        data={["Argentina","Bolivia","Chile","Colombia","Cuba","Ecuador","El Salvador","Guatemala","Honduras","Mexico","Panama","Paraguay","Peru","Republica Dominicana","Uruguay","Venezuela"]}
        placeholder="Por favor indica tu Pais."
        label="Pais"
        classNames={classes}
      />

    </div>

  );
}