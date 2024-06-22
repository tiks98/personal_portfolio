import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
// import Projects from "./components/Projects";
// import TopNav from "./components/Navbar/TopNav";

function App() {
	return (
		<div className="App">
			<div className="header">
				<div>
					<h1>Tilak Suthar</h1>
				</div>
				<div className="d-flex justify-content-between">
					<h3 className="navLinks">Home</h3>
					<h3 className="navLinks">Projects</h3>
					<h3 className="navLinks">Contact</h3>
				</div>
				{/* <TopNav /> */}
			</div>
			<div className="container">
				<Home />

				{/* <Projects /> */}
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
