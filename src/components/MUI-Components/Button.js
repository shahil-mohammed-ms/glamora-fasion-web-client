import Button from '@mui/material/Button';

function MUIButton({text,btnvariant,btnSize,btnColor}) {
  return (
    <Button variant={btnvariant} size={btnSize} color={btnColor} >{text}</Button>
  )
}

export default MUIButton