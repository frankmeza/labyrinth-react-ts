import React, { useState, useEffect } from "react";
import "../app.scss";
import { uuidv4 } from "../modules/shared_utils";

interface MenuViewProps {
  readonly linesOfText: string[];
}

const defaultLines: string[] = [];

const MenuView = (props: MenuViewProps): JSX.Element => {
  const { linesOfText } = props;

  const [
    lines,
    setLines,
  ] = useState(defaultLines);

  // prettier-ignore
  useEffect(() => {
    setLines([...linesOfText, ...lines])
  }, [linesOfText]);

  const newOutput = lines.map(line => {
    const key = uuidv4();
    return <pre key={key}>{line}</pre>;
  });

  return <div className="menu-view">{newOutput}</div>;
};

export default MenuView;
