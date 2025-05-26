import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


// AppLayout Component
function AppLayout() {
    return (
        <div className="app-layout">
            <Header />
            <Body />
        </div>
    );
}

// Render AppLayout
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);