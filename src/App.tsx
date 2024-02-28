import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import routerBindings, {
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout";

import { Dashboard } from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <Refine
          dataProvider={dataProvider("https://api.finefoods.refine.dev")}
          routerProvider={routerBindings}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
        >
          <Routes>
            <Route
              element={
                <Layout>
                  <Outlet />
                </Layout>
              }
            >
              <Route index element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard">
                <Route index element={<Dashboard />} />
              </Route>
            </Route>
          </Routes>
          <RefineKbar />
          <UnsavedChangesNotifier />
        </Refine>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
