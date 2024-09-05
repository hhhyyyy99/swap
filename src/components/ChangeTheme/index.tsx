import { useTheme } from "next-themes"

const ChangeTheme = () => {
  const {theme, setTheme} = useTheme()
  return <div>{theme}</div>
}

export default ChangeTheme