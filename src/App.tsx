import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainBody from "./components/MainBody";
import WatchVideo from "./components/WatchVideo";
import Demo from "./components/Demo";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        { path: "/", element: <MainBody /> },
        { path: "watch", element: <WatchVideo /> },
        { path: "demo", element: <Demo /> }
      ]
    }
  ]);

  return (
    <div>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
