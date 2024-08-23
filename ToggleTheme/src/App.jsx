import {ThemeProvider , DarkLight} from "./components/DarkLight";

export const  App = () => {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
      <ThemeProvider>
        <DarkLight/>
      </ThemeProvider>
    </div>
  );
};