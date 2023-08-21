import TopBannerComponent from "./components/TopBannerComponent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full bg-gray-100 h-screen">
      <TopBannerComponent />
      <Navbar />
      <div className="pl-4 lg:pl-0 lg:w-[85%] mx-auto py-4 text-xs">
        <p>Home {'>'} <span className="text-gray-400">Official Stores</span></p>
      </div>
    </div>
  );
}

export default App;
