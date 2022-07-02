/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
// Library
import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

// components
import ShoppingCart from "./ShoppingCart";
import Navbar from "./Navbar";
// page components
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProtectDetails from "./pages/NestedShoppingCard/NestedProtect/ProtectDetails";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import FormProduct from "./pages/NestedAdmin/FormProduct";
import NotFound from "./pages/NotFound";
// Nested page components
import OurTeam from "./pages/NestedAbout/OurTeam";
import OurCompany from "./pages/NestedAbout/OurCompany";

class App extends Component {
  state = {
    Protects: [],
  };
  async componentDidMount() {
    // call backend Servers
    const { data } = await axios.get("http://localhost:3000/Protects");
    // setState
    this.setState({ Protects: data });
  }

  incrementHandler = (num, prot) => {
    // deep clone
    const protects = [...this.state.Protects];
    const index = protects.indexOf(prot);
    // edit
    protects[index].count += num;
    // setState
    this.setState({ protects });
  };

  handleReset = () => {
    this.setState((preState) => preState.Protects.map((el) => (el.count = 0)));
  };
  onHandleClickIcon = (protect) => {
    // clone
    const protects = [...this.state.Protects];
    const index = protects.indexOf(protect);
    // Edit
    protects[index].isShopped = !protects[index].isShopped;
    // setState
    this.setState({ protects });
  };
  handleAdd = async (name, price) => {
    const newObj = {
      name,
      price,
      id: this.state.Protects.length + 1,
      isShopped: false,
      count: 0,
    };
    /*Edit State*/
    // Clone
    const Protects = [...this.state.Protects];
    // Edit
    Protects[Protects.length] = newObj;
    // setState
    this.setState({ Protects });
    /*Call backend Add*/
    await axios.post("http://localhost:3000/Protects/", newObj);
    /* Update UI by new data*/
    // Get new data
    const { data } = await axios.get("http://localhost:3000/Protects");
    // setState
    this.setState({ Protects: data });
  };
  handleEdit = async (id, name, price) => {
    const editObj = {
      id,
      name,
      price,
      isShopped: false,
      count: 0,
    };
    /*Edit State*/
    // Clone
    const Protects = [...this.state.Protects];
    // Edit
    Protects[id - 1] = editObj;
    // setState
    this.setState({ Protects });

    /*Call backend Edit*/
    delete editObj.id;
    await axios.put("http://localhost:3000/Protects/" + id, editObj);

    /* Update UI by new data*/
    // Get new data
    const { data } = await axios.get("http://localhost:3000/Protects");
    // setState
    this.setState({ Protects: data });
  };
  handleDelete = async (protect) => {
    /*Edit State*/
    // clone old
    const oldStateProtects = [...this.state.Protects];
    // Edit & setState
    this.setState(
      (ps) =>
        (ps.Protects = this.state.Protects.filter((el) => el.id !== protect.id))
    );
    /* Call backend Delete */
    try {
      // for delete Success
      await axios.delete("http://localhost:3000/Protects/" + protect.id);
      // for delete failed error test
      // await axios.delete("http://localhost:3000/Protects/555");
    } catch (ex) {
      /* Update UI by new data*/
      // if Failed return old state
      toast.info("can't delete");
      this.setState((ps) => (ps.Protects = oldStateProtects));
    }
  };

  render() {
    return (
      <>
        <ToastContainer />
        <Navbar
          count={this.state.Protects.filter((el) => el.isShopped).length}
        />

        <main>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/Home" element={<Home />} />
            <Route
              path="/Menu"
              element={
                <Menu
                  protects={this.state.Protects}
                  onHandleClickIcon={this.onHandleClickIcon}
                />
              }
            />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About/*" element={<About />}>
              <Route path="OurTeam" element={<OurTeam />} />
              <Route path="OurCompany" element={<OurCompany />} />
            </Route>
            <Route
              path="/About/"
              element={<Navigate replace to="/About/OurTeam" />}></Route>
            <Route
              path="/protect-details/:id"
              element={<ProtectDetails protects={this.state.Protects} />}
            />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/ShoppingCart"
              element={
                <ShoppingCart
                  protects={this.state.Protects}
                  onIncrementHandler={this.incrementHandler}
                  onHandleReset={this.handleReset}
                  onHandleClickIcon={this.onHandleClickIcon}
                />
              }
            />
            <Route path="/Login" element={<Login />} />
            <Route
              path="/Admin"
              element={
                <Admin
                  protects={this.state.Protects}
                  onHandleDelete={this.handleDelete}
                />
              }
            />
            <Route
              path="/FormProduct/:id"
              element={
                <FormProduct
                  onHandleAdd={this.handleAdd}
                  protects={this.state.Protects}
                  onHandleEdit={this.handleEdit}
                />
              }
            />
          </Routes>
        </main>
        <footer
          className="text-white w-100 py-1 px-1 position-fixed bottom-0 text-center"
          style={{
            backgroundImage: "linear-Gradient(to top,black, transparent)",
            fontSize: "12px",
          }}>
          Made With 💖 By Eng.Ahmed Mahmoud © 2022
        </footer>
      </>
    );
  }
}

export default App;
