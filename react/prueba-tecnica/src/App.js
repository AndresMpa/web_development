import Card from "./components/Card";
import Mosaico from "./components/Mosaico";
import Banner from "./components/Banner";
import ContactFooter from "./components/ContactFooter";
import LinkImage from "./components/LinkImage";

import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <div className="d-flex justify">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>

      <div className="d-flex justify">
        <LinkImage></LinkImage>
        <LinkImage></LinkImage>
      </div>

      <Mosaico></Mosaico>

      <div className="d-flex justify">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className="d-flex justify">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <ContactFooter></ContactFooter>
    </div>
  );
}

export default App;
