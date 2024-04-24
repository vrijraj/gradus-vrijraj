// For expanding main section
export const useIsExpanded = () => useState<boolean>("isExpanded", () => false);

// For setting current section of markdown to render
export const useCurrentNode = () => useState<number>("currentNode", () => 0);

export const useFilter = () => useState("filter", () => []);
