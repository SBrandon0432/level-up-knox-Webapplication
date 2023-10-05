import { ReactNode, createContext, useState } from "react";
import { EmployeeCard, StoreCard, StoreImages } from "./types";

interface MyLevelUpContextProperties {
    storeImages: StoreImages[];
    storeCard: StoreCard[];
    employeeCard: EmployeeCard[];
}

export const MyLevelUpContext = createContext<MyLevelUpContextProperties>({
    storeImages: [],
    storeCard: [],
    employeeCard: [],
});

interface Props {
    children: ReactNode;
}

export const MyLevelUpContextProvider = ({ children }: Props) => {
    const [storeImages] = useState<StoreImages[]>([]);
    const [storeCard] = useState<StoreCard[]>([]);
    const [employeeCard] = useState<EmployeeCard[]>([]);

    return (
        <MyLevelUpContext.Provider
            value={{
                storeCard,
                storeImages,
                employeeCard,
            }}
        >
            {children}
        </MyLevelUpContext.Provider>
    );
};
