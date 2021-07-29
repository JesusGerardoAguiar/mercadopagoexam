import logo from "./logo.svg";
import Main from "./components/main";
import Product from "./components/Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderHandler from "./components/OrderComponent/OrderHandler";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Main} />
          <Route path="/success" component={OrderHandler} />
          <Route path="/pending" component={OrderHandler} />
          <Route path="/failure" component={OrderHandler} />
          <Route
            path={process.env.PUBLIC_URL + "/product/:id"}
            render={(routeProps) => (
              <Product {...routeProps} key={routeProps.match.params.id} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
