import { useContext } from "react";
import Accordion from "../accordion/accordion-index";
import TabTest from "../custom-tabs/tab-test";
import LightDarkMode from "../light-dark-mode/light-dark-mode-index";
import RandomColor from "../random-color/random-color-index";
import TicTacToe from "../tic-tac-toe/tic-tac-index";
import menus from "../tree-view/tree-view-data";
import TreeView from "../tree-view/tree-view-index";
import { FeatureFlagsContext } from "./context/context-index";


export default function FeatureFlags() {

    const { loading, enabledFlags } = useContext(FeatureFlagsContext);

    const componentsToRender = [
        {
            key: "showLightAndDarkMode",
            component: <LightDarkMode />,
        },
        {
            key: "showTicTacToeBoard",
            component: <TicTacToe />,
        },
        {
            key: "showRandomColorGenerator",
            component: <RandomColor />,
        },
        {
            key: "showAccordian",
            component: <Accordion />,
        },
        {
            key: "showTreeView",
            component: <TreeView menus={menus} />,
        },
        {
            key: 'showTabs',
            component: <TabTest />
        }
    ];

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey];
    }

    if (loading) return <h1>Loading... Please wait.</h1>;

    return (
        <div>
            <h1>Feature Flags</h1>
            {
                componentsToRender.map(componentItem => checkEnabledFlags(componentItem.key) ? componentItem.component : null)
            }
        </div>
    )
}