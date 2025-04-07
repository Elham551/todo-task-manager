import React, { createContext, useContext, useState } from "react";
import { Task } from "../types/Task";

type SelectedItemContextType = {
    selectedItem: Task | null;
    setSelectedItem: (item: Task | null) => void;
};

const SelectedItemContext = createContext<SelectedItemContextType | undefined>(undefined);

export const SelectedItemProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedItem, setSelectedItem] = useState<Task | null>(null);

    return (
        <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem }}>
            {children}
        </SelectedItemContext.Provider>
    );
};

export const useSelectedItem = () => {
    const context = useContext(SelectedItemContext);
    if (!context) {
        throw new Error("useSelectedItem must be used within a SelectedItemProvider");
    }
    return context;
};