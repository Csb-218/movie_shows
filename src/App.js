import { Routes, Route ,Outlet} from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Home from "./pages/Home";
import Movie from "./pages/movie/Movie"
import NavBar from "./components/navigation/NavBar";

// Create a client
const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>

        <NavBar />


        <Routes>

          <Route
            index
            element={
              <Home />
            }
          />

          <Route
            path='movie'
            element={<><Outlet/></>}
          >
            <Route
              path=':id'
              element={
                <Movie />
              }
            />
          </Route>

        </Routes>

        
      </QueryClientProvider>

    </>


  );
}

export default App;
