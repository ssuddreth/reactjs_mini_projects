import Tabs from "./custom-tabs";
import './custom-tabs.css';

function RandomComponent() {
    return <h1>Random content...</h1>;
}


export default function TabTest() {

    const tabs = [
        {
            label: 'Tab 1',
            content: <div>'Tab 1 Content...'</div>
        },
        {
            label: 'Tab 2',
            content: <div>'Tab 2 Content...'</div>
        },
        {
            label: "Tab 3",
            content: <RandomComponent />,
        }
    ]

    function handleChange(currentTabIndex) {
        console.log(currentTabIndex);
    }

    return <Tabs tabsContent={tabs} onChange={handleChange} />
}