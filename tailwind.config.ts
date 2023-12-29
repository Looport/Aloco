import type {Config} from "tailwindcss"

const config: Config = {
  content: ["./src/**/**/*.tsx", "./node_modules/preline/preline.js"],
  plugins: [
    // eslint-disable-next-line import/no-commonjs
    require("preline/plugin"),
  ],
}
export default config
