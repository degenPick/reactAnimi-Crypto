import Button from '@mui/material/Button';

type Props = {
  onClick: VoidFunction;
  text: string;
  bgColor?: string;
  bgImage?: string;
  width?: string;
  height?: string;
  boxShadow?: string;
};

export const PrimaryButton = ({
  onClick,
  text,
  bgColor,
  bgImage,
  width,
  height,
  boxShadow,
}: Props) => (
  <Button
    onClick={onClick}
    variant="contained"
    sx={{
      width,
      height,
      backgroundImage: bgImage,
      backgroundColor: bgColor,
      fontFamily: 'Poppins',
      textTransform: 'none',
      fontSize: '16px',
      fontWeight: '700',
      boxShadow,
      maxWidth: '360px',
    }}
  >
    {text}
  </Button>
);
