import { Routes, Route} from "react-router-dom";
import CreateDraft from "./CreateDraft";
import EditePost from "./EditePost";
import CardDraft from "./CardDraft";
import CardPost from "./CardPost";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CardPost />} />
        <Route path="draft" element={<CardDraft />} />
        <Route path="create_draft" element={<CreateDraft />} />
        <Route path="edit/:id" element={<EditePost />} />
      </Routes>
    </div>
  );
}

export default App;
