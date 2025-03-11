import UserProvider from "./contexts/userContextProvider";
import Router from "./Router";

const App = () => {
  return (
    <div className="bg-[var(--primary-color)] h-screen w-screen flex justify-center items-center p-5">
      <UserProvider>
        <Router />
      </UserProvider>
    </div>
  );
};

export default App;
