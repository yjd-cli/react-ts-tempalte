import * as styles from './tab-selector.less';
import * as React from 'react';


interface TabItem {
    tabName: string;
    value: any;
    visible: boolean;
}

interface Props {
    render: any;
    selectedOpt: any;
    style?: React.CSSProperties;
    options: TabItem[];
    onChange: (TabItem) => void;
}

export default class TabSelector extends React.PureComponent<Props> {

    render() {
        const {options, selectedOpt, onChange, style} = this.props;
        return (
            <>
                <ul className={styles.tabSelector} style={style}>
                    {options.map((opt, idx) => (
                            opt.visible && <li
                                key={idx}
                                className={`${styles.tabItem} ${opt.tabName === selectedOpt.tabName ? `${styles.selected}` : ""}`}
                                onClick={() => onChange({tabName: opt.tabName, value: opt.value})}
                            >
                                {opt.tabName}
                            </li>
                        )
                    )}
                </ul>
                {this.props.render && this.props.render(selectedOpt)}
            </>
        );
    }
}