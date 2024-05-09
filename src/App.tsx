import type { IGroupedData } from "./types";
import { GroupedBarChart } from "./GroupedBarChart";
import "./styles.css";
import { Data } from "./Data";

const GROUPED_BAR_CHART_DATA: IGroupedData[] = Data;

function App() {
  return (
    <div className="container">
      <h1>
        <span>React Tsx and D3 js example </span>
        <span role="img" aria-label="Index pointing down emoji">
          👇
        </span>
      </h1>
      <section>
        <h2>Grouped bar chart</h2>
        <GroupedBarChart data={GROUPED_BAR_CHART_DATA} />
      </section>
    </div>
  );
}

export default App;
